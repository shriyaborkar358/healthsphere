import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      unique:true
    },
    address: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender:{
        type: String,
        enun: ["male", "female", "other"]
    },
    role:{
        type: String,
        enum:["admin", "doctor", "patient"],
        default: "patient"
    }
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
