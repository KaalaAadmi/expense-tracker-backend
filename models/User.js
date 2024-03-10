import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      // maxLength: [30, "Your name cannot exceed 30 characters"],
    },
    lastName: {
      type: String,
      required: true,
      // maxLength: [30, "Your name cannot exceed 30 characters"],
    },
    username:{
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // validator: [validator.isEmail, "Please enter valid email address"],
    },
    password: {
      type: String,
      required: true,
      // minLength: [8, "Your password must be longer than 8 characters"],
      select: false,
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
