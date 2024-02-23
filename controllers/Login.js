import UserModel from "../models/User.js";

const Login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await UserModel.findOne({ userName });
    if (!user) {
      return res.status(401).json({ message: `Wrong Credentials` });
    }
    if (password !== user.password) {
      return res.status(400).json({ message: `Wrong Credentials` });
    }
    const userId = user._id;
    // console.log(userId);
    res.status(200).json({ message: `Login Success`, userId: userId });
  } catch (error) {
    res.status(500).json({ message: `Server Error` });
  }
};
export default Login;
