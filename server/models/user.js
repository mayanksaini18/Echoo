const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  gender: String,
  age: Number,
  marriageStatus: String,
  ethnicity: String,
  occupation: String,
  pronoun: String,
  pwd: { type: String, required: true, minlength: 6 },
  userData: [
    {
      datetime: Date,
      answer_prob: [Number],
      answers: [mongoose.Schema.Types.Mixed],
      stress_point: Number,
      condition: String,
      questions_index: String,
    },
  ],
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

// Hash password before saving
UserSchema.pre("save", async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified("pwd")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.pwd = await bcrypt.hash(this.pwd, salt);
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("User", UserSchema);

// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         max: 50,
//         unique: true,
//     },
//     name: {
//         type: String,
//         required: true,
//         min: 2,
//         max: 50,
//     },
//     password: {
//         type: String,
//         required: true,
//         min: 2,
//         max: 50,
//     },
//     profile_img: {
//         type: String,
//         default:
//             "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png",
//     },
// });
// const User = mongoose.model("User", UserSchema);
// module.exports = User;
