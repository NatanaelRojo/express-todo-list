const express = require("express");
const cors = require("cors");
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
app.use(cors());

router(app);

app.use(errorLog);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port);
