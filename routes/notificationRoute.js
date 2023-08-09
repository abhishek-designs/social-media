const express = require("express");
const { getMessaging } = require("firebase-admin/messaging");
const router = express.Router();

router.post("/send", async (req, res) => {
  try {
    const message = {
      notification: {
        title: "First Notification",
        body: "This is a first notification",
      },
      token:
        "dFT7ixKwR0i4k7Wr289XTn:APA91bHpFs_RxeKNJDIMfEZDHL6HNyGoQ8MMiaYyOZg1gh6bfr4w6N2ia1ZQtMqoLSgxyn2deiwUwksJsI9h4juLmh7vCokpMq6LlVSq1pdYOQ1r2BLW0mPpPLrOdLXaeyAKNtd-cp_o",
    };
    const result = await getMessaging().send(message);
    console.log(result);
    res.status(200).json({
      msg: "Notification sent",
      result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "Internal server error",
      result: err,
    });
  }
});

module.exports = router;
