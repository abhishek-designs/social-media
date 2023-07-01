const express = require("express");
const dotenv = require("dotenv");
const api = require("./routes");
// const "./utils/connectDB.js";

dotenv.config();
const app = express();
const PORT = 8000 || process.env.PORT;

app.use(express.json());
app.use("/api", api);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
