import User from "./../models/User.js";
import md5 from "md5";

const postSignup = async (req, res) => {
    const { name, mobile, address, email, password, age, gender } = req.body;

    const isMobileValid = mobile.match(/^[6-9]\d{9}$/);
    if (!isMobileValid) {
        return res.status(400).json({ message: "Mobile number is invalid" });
    }

    const isEmailValid = email.match(/\S+@\S+\.\S+/);
    if (!isEmailValid) {
        return res.status(400).json({ message: "Email is invalid" });
    }

    const isPasswordValid = password.length >= 8;
    if (!isPasswordValid) {
        return res
            .status(400)
            .json({ message: "Password must be atleast 8 characher long" });
    }

    if (!name || !address || !age || !gender) {
        return res.status(400).json({
            message: "name, address, age, gender is required",
        });
    }

    const user = new User({
        name,
        mobile,
        address,
        email,
        password: md5(password),
        age,
        gender,
    });

    try {
        const savedUser = await user.save();

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: savedUser,
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message,
        });
    }
};

const postLogin = async (req, res) => {
    const { mobile, password } = req.body;

    const encryptedPassword = md5(password);

    const user = await User.findOne({
        mobile,
        password: encryptedPassword,
    });

    if (!user) {
        return res.status(400).json({
            success: false,
            message: "Invalid credential",
        });
    } else {
        return res.status(200).json({
            success: true,
            message: "Login successful",
            data: user
        });
    }
};

export { postSignup, postLogin};
