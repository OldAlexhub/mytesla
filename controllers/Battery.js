import BatteryModel from "../models/Battery.js";

const Battery = async (req, res) => {
  try {
    const {
      fullRangeCurrent,
      degradationPercentage,
      batteryLevel,
      degradationMiles,
    } = req.body;
    const company = 358;

    const newData = await BatteryModel({
      fullRangeCurrent,
      degradationPercentage,
      batteryLevel,
      company,
      degradationMiles,
    });
    await newData.save();
    res.status(201).json({ message: `Success` });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default Battery;
