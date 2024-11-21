const { Schema, default: mongoose } = require("mongoose");

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  creatorId: {
    type: ObjectId,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = { Course };
