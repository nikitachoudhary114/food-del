import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'


//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: 'user does not exists' })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: 'Invalid Credentials' })
        }

        const token = createToken(user._id);
        return res.json({ success: true, token})


    } catch (error) {
        res.json({ success: false, message: 'Error' })
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//register user
const registerUSer = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        //checking if user exixts or not
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: 'User already exists with same email' })
        }

        //validate email and strong pass
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Please enter valid E-mail' })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a password with 8+ characters" })
        }


        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hasedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name: name,
            email: email,
            password: hasedPassword
        });

        const user = await newUser.save()
        const token = createToken(user._id);

        res.json({ success: true, token});



    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" })
    }
}

//
export { loginUser, registerUSer }