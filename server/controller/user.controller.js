import User from "../model/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
        const userData =  await createdUser.save();
        console.log("userData :", userData)     
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: userData._id,
                fullname: userData.fullname,
                email: userData.email
            },
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password)
        if (!user || !isMatch) {
            return res.status(400).json({ message: "invalid username or password" })
        } else {
            res.status(200).json({
                message: "Login Successfully",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email
                },
            })
        }

    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}