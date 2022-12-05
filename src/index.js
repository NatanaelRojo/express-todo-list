const express = require("express");
const {
  errorLog,
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/errorHandler");
const routes = require("./routes");
const router = require("./routes");

const port = 3000;
const app = express();
app.use(express.json());

router(app);

app.use(errorLog);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("running");
});
