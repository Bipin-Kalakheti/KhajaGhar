import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

//Login User

const loginUser = async (req, res) => {};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
//Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if all fields are entered
    if (!name || !email || !password) {
      return res.json({ success: false, message: "Please enter all fields" });
    }
    // Validate email format
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid email" });
    }

    // Validate password length strength
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }
    // Check if user already exists
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.json({ success: false, message: "User already exists" });
    }

    //Hashing User Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    // Save user to database
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token, message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error: Failed to register user" });
  }
};

export { loginUser, registerUser };
