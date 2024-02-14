const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const router = require("./app/route");
const logger = require("./logger");
const app = express();

// dot eve config

dotenv.config({ path: path.join(__dirname, ".env") });

// express parser
app.use(express.json());
// bodyparser
// Router config

app.use(`${process.env.VERSION}`, router);

// app.method(path, callback);
// app.get("/", (req, res, next) => {
//   try {
//     res.send("You are running on Express Server");
//   } catch (error) {
//     next(error);
//   }
// });
// app.use(() => {});

// app.post("/user", (req, res, next) => {
//   try {
//     const reqParams = req.body;
//     return res
//       .status(200)
//       .json({ reqParams, msg: "this is post API with Data" });
//   } catch (error) {
//     next(error);
//   }
// });
// // app.put();
// // app.delete();

// error handling
function logError(req, res, next) {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
}
function errorHandler(error, req, res, next) {
  logger.error({
    message: error.message,
    stack: error.stack,
  });
  res.status(error.status || 500);
  res.json({ error: { message: error.message, stack: error.stack } });
}
app.use(logError);
app.use(errorHandler);

const port = process.env.PORT;

app.listen(port || 8000, () => {
  logger.info(`Our app is runing on ${port}`);
  console.log(`Our app is runing on ${port}`);
});
