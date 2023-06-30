const express = require("express")
const app = express()

app.get("/test", (_req, res) => {
    res.status(200).send("Programowanie Zespołowe")
});

module.exports = app;
