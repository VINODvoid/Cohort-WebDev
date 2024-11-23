require("dotenv").config(); // load environmental variables
const express = require("express");
const { userRouter } = require("./routes/user.js");
const { courseRouter } = require("./routes/course.js");
const { adminRouter } = require("./routes/admin.js");
const connectDB = require("./db/index.js");
const app = express();

app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("api/v1/admin", adminRouter);
connectDB()
  .then(function () {
    app.listen(process.env.PORT || 8080, function () {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch(function (error) {
    console.log("Server as Crashed @@@!!!!!", error);
    process.exit(1);
  });
