const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("SmartPool AI Server Running");
});
module.exports = app;