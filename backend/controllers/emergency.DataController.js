import emergencyModel from "../models/emergency.model.js";

export const emergencyDataController = async (req, res) => {
  console.log(req.body);
  const { fullName, phoneNumber, emergencyType, location, description } =
    req.body;
  try {
    if (
      !fullName ||
      !phoneNumber ||
      !emergencyType ||
      !location ||
      !description
    ) {
      return res.status(400).json({ message: "all fields are required" });
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      return res
        .status(400)
        .json({ message: "Phone number must be a valid 10-digit number" });
    }

    const newEmergency = new emergencyModel({
      fullName,
      phoneNumber,
      emergencyType,
      location,
      description,
    });

    await newEmergency.save();

    res
      .status(201)
      .json({
        message: "emergency data saved successfully",
        data: newEmergency,
      });
  } catch (error) {
    res.status(400).json({ message: error.message || "internal server error" });
  }
};

export const viewDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const emergency = await emergencyModel.findById(id);

    if (!emergency) {
      return res.status(400).json({ message: "Emergency Record not found" });
    }
    emergency.viewed = true;
    await emergency.save();
    res.status(200).json({ data: emergency });
  } catch (error) {
    res.status(500).json({ message: error.message || "Internal server error" });
  }
};

export const deleteDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteEmergency = await emergencyModel.findById(id);
    if (!deleteEmergency) {
      return res.status(404).json({ message: "no emergency records found" });
    }
  } catch (error) {
    return res.status(500).json("internal server error", error);
  }
};

export const updateDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const updateEmergency = await emergencyModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateEmergency) {
      return res.status(404).json({ message: "no emergency records found" });
    }
  } catch (error) {
    return res.status(500).json("internal server error", error);
  }
};

