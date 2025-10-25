const express = require("express");
const app = express();

const indexRouter = require("./routes/routes.js");
const logger = require("./middleware/logger.js");

app.use(logger);
app.use("/", indexRouter);

app.use((req, res) => {
    res.status(404).send("Not found!");
});

module.exports = app;
