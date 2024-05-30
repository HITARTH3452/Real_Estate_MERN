import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const haashPassword = bcryptjs.hashSync(password , 10);
    const newUser = await new User({ username, email, password : haashPassword});
    await newUser.save();
    res.status(201).json({
      success : true,
      newUser,
      message : "user generated successfully"
    });
  } catch (err) {
    res.json("something wrong happend")
    console.log(err);
  }
};
