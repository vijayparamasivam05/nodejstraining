var User = {
  firstName: null,
  lastName: null,
  email: null
};

const connection = require("../../databaseconfig/dataBaseMySqlClient");


const postUserData = async (req, res, next) => {
  try {
    const { name, phone } = req.body;
    await connection.query(`INSERT INTO users(name, phone) VALUES ('${name}', '${phone}');`);
    return res.status(200).json({ Message: "User successfully registered" });
  } catch (error) {
    next(error);
  }
};

const getUserData = async (req, res, next) => {
  try {
    await connection.query("select * from users", function (results, fields){
      return res.status(200).json({ data: fields });
    });

  } catch (error) {
    next(error);
  }
};

const putUserData = async (req, res, next) => {
  try {
    const { name, phone } = req.body;
    await connection.query(`UPDATE users SET phone = '${phone}' WHERE name = '${name}'`);
    return res.status(200).json({ Message: "User successfully updated" });
  } catch (error) {
    next(error);
  }
};

const deleteUserData = async (req, res, next) => {
  try {
    const { name } = req.body;
    await connection.query(`DELETE FROM users WHERE name = '${name}'`);
    return res.status(200).json({ Message: "User successfully Deleted" });
  } catch (error) {
    next(error);
  }
};

// const getUserData = (req, res, next) => {
//     try {
//       return res.status(200).json({ 
//           First_Name: User.firstName,
//           Last_Name: User.lastName,
//           Email: User.email
//         });
//     } catch (error) {
//       next(error);
//     }
//   };
  
  // const postUserData = (req, res, next) => {
  //   try {
  //     User.firstName = req.body["FirstName"];
  //     User.lastName = req.body["LastName"];
  //     User.email = req.body["Email"];
  //     return res.status(200).json({ User, Message: "User data successfully stored"});
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  // const putUserData = (req, res, next) => {
  //   try {
  //     User.firstName = req.body["FirstName"];
  //     User.lastName = req.body["LastName"];
  //     User.email = req.body["Email"];
  //     return res.status(200).json({ User, Message: "User data successfully updated"});
  //   } catch (error) {
  //     next(error);
  //   }
  // };
  
  // const deleteUserData = (req, res, next) => {
  //   try {
  //     User.firstName = null;
  //     User.lastName = null;
  //     User.email = null;
  //     return res.status(200).json({ Message: "User data successfully Deleted"});
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  module.exports = { getUserData, postUserData, putUserData, deleteUserData };
  