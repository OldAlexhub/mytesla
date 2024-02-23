import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: { type: String, default: "Mgad" },
  password: { type: String, default: "Mayo2016" },
});
const UserModel = mongoose.model("user", UserSchema);

export default UserModel;
