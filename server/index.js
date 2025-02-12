const express = require("express");
const router = require("./routes");
const connectDB = require("./db");
const cors = require("cors");

connectDB();
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use("/api", router);

const port = 4000;
app.listen(port, () => {
  console.log(`Server is listening on PORT : ${port}`);
});
