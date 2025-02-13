const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./utils/db");
const router = require("./routes");
const cookieParser = require("cookie-parser");

dotenv.config();
connectDB();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(`/api`, router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on PORT : ${port}`);
});
