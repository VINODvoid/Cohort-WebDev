const { Router } = require("express");
const { Admin } = require("../models/admin.model.js");

const adminRouter = Router();

adminRouter.post("/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

adminRouter.post("/signin", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});

adminRouter.post("/course-create", function (req, res) {
  res.json({
    message: "Course Creation",
  });
});

adminRouter.put("/course", function (req, res) {
  res.json({
    message: "Course Update",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
