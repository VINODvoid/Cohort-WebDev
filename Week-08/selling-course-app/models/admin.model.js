const { Schema, default: mongoose } = require("mongoose");

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = { Admin };
