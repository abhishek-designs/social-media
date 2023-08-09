const express = require("express");
const dotenv = require("dotenv");
const admin = require("firebase-admin");
const { applicationDefault } = require("firebase-admin/app");
const api = require("./routes");
// const "./utils/connectDB.js";

dotenv.config();
const app = express();
const PORT = 8000 || process.env.PORT;

// admin.initializeApp({
//   credential: admin.credential.cert({
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//     privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
//   }),
// });
admin.initializeApp({
  credential: applicationDefault(),
});

app.use(express.json());
app.use("/api", api);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
