import BatteryModel from "../models/Battery.js";

const ShowBattery = async (req, res) => {
  try {
    const show = await BatteryModel.find();

    res.status(200).json({ message: `Good`, show });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
export default ShowBattery;
