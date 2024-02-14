var format = require("pg-format");
const createClinet = require("../../databaseconfig/databaseClient");

const getData = async (req, res, next) => {
  let client;
  try {
    client = createClinet();
    await client.connect();
    const query = format("select * from users");
    const data = await client.query(query);
    //console.log(data.rows, "data from database ");
    return res.status(200).json({ data: data.rows });
  } catch (error) {
    next(error);
  } finally {
    client.end();
  }
};

const postData = async (req, res, next) => {
  let client;
  try {
    const { name, phone } = req.body;
    client = createClinet();
    await client.connect();
    const query = format(
      `INSERT INTO public.users(name, phone) VALUES ('${name}', '${phone}');`
    );
    const data = await client.query(query);

    return res.status(200).json({ reqData: { name, phone }, data: data });
  } catch (error) {
    next(error);
  } finally {
    client.end();
  }
};

module.exports = { getData, postData };
