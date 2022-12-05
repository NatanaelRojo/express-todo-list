const express = require("express");
const routes = require("./routes");
const router = require("./routes");

const port = 3000;
const app = express();
app.use(express.json());
router(app);

app.listen(port, () => {
  console.log("running");
});
