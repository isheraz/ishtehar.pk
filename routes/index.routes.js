/* eslint-disable no-undef */
app.use("/User", require("./routes/UserRoutes"));
app.use("/Role", require("./routes/RoleRoutes"));
app.use("/About", require("./routes/AboutRoute"));
app.use("/NewsPaper", require("./routes/NewsPaperRoute"));
app.use("/Notices", require("./routes/NoticesRoute"));
