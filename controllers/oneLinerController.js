import OneLiner from "../models/OneLiner.js";

// Create
export const createOneLiner = async (req, res) => {
  try {
    const data = await OneLiner.create(req.body);

    res.status(201).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get by type
export const getOneLiners = async (req, res) => {
  try {
    const { type, topic } = req.query;

    const data = await OneLiner.find({ type, topic }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Topics by type
export const getTopics = async (req, res) => {
  try {
    const { type } = req.query;

    const topics = await OneLiner.distinct("topic", { type });

    res.status(200).json({
      success: true,
      topics,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
