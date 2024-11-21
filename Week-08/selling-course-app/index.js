require("dotenv").config(); // load environmental variables
const express = require("express");
const { userRouter } = require("./routes/user.js");
const { courseRouter } = require("./routes/course.js");
const { adminRouter } = require("./routes/admin.js");
const connectDB = require("./db/index.js");
const app = express();
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("api/v1/admin", adminRouter);
connectDB();
app.listen(3000);
