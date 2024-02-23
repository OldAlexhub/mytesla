import mongoose, { mongo } from "mongoose";

const BatterySchema = new mongoose.Schema({
  date: { type: Date, default: new Date() },
  fullRangeCurrent: Number,
  degradationPercentage: Number,
  degradationMiles: Number,
  company: { type: Number, default: 358 },
  batteryLevel: Number,
});
const BatteryModel = mongoose.model("battery", BatterySchema);

export default BatteryModel;
