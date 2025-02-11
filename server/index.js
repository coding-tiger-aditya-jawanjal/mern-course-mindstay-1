const express = require("express");
const router = require("./routes");
const connectDB = require("./db");

connectDB();
const app = express();
app.use(express.json());
app.use("/api", router);

const port = 4000;
app.listen(port, () => {
  console.log(`Server is listening on PORT : ${port}`);
});
