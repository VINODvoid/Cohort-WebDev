const { Router } = require("express");
const { Admin } = require("../models/admin.model.js");
const z = require("zod");
const bcrypt = require("bcryptjs");

const adminRouter = Router();
const adminSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

adminRouter.post("/signup", async function (req, res) {
  try {
    const parsedData = adminSchema.parse(req.body);
    const hashedPassword = await bcrypt.hash(parsedData.password);
    const admin = new Admin({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
    await admin.save();
    res.status(201).json({
      message: "Admin Sign up is successfully !",
    });
  } catch (error) {
    res.status(403).json({
      message: "sign up failed !!!",
      error: error,
    });
  }
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
