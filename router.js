const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
   res.send("message has been sent");
});

module.exports = router;