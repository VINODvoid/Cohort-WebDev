const { Router } = require("express");
const { User } = require("../models/user.model.js");
const z = require("zod");
const bcrypt = require("bcryptjs");

const userRouter = Router();
const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

userRouter.post("/signup", async function (req, res) {
  //TODO: add zod validation
  //TODO: hash the password
  try {
    const parsedData = userSchema.parse(req.body);
    const hashedPassword = await bcrypt.hash(parsedData.password, 10);
    const user = new User({
      email: parsedData.email,
      password: hashedPassword,
      firstName: parsedData.firstName,
      lastName: parsedData.lastName,
    });
    await user.save();
    res.status(201).json({
      message: "User signed up is successfully",
      user_id: user._id,
    });
  } catch (error) {
    res.json({
      message: "signup failed !!",
      error: error,
    });
  }
});
userRouter.post("/signin", async function (req, res) {
  try {
    const parsedData = userSchema.parse(req.body);
    const user = await User.findOne({ email: parsedData.email });
    if (!user) {
      return res.status(404).json({
        message: "User Not Found !!",
      });
    }
    const validPassword = await bcrypt.compare(
      parsedData.password,
      user.password,
    );
    if (!validPassword) {
      return res.status(401).json({
        message: "Invalid Credentials !!",
      });
    }
    res.status(200).json({
      message: "signin successfully :)",
    });
  } catch (error) {
    res.status(401).json({
      message: "SignIn failed !!",
      error: error,
    });
  }
});

userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "purchased courses",
  });
});

module.exports = {
  userRouter: userRouter,
};
