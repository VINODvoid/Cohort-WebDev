const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

export const User = mongoose.model("User", userSchema);
