const Tour = require("../model/tourModel");
const APIFeatures = require('./apiFeatures')

const createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newTour,
      },
    });
  } catch (error) {
    res.json({
      status: "fail",
      message: "error in creating tour",
    });
  }
};

const readTour = async (req, res) => {
  try {
    const features = new APIFeatures(Tour.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .pagination(); // Correct spelling

    const read = await features.query;
    res.status(201).json({
      status: "success",
      data: {
        read,
      },
    });
  } catch (error) {
    console.error("Error:", error.message); // Log the actual error
    res.status(400).json({
      status: "fail",
      message:error.message,
    });
  }
};



const findTour = async (req, res) => {
  try {
    const newTour = await Tour.findById(req.params.id);
    res.status(201).json({
      status: "success",
      data: {
        newTour,
      },
    });
  } catch (error) {
    res.json({
      status: "fail",
      message: "error in creating tour",
    });
  }
};
const updateTour = async (req, res) => {
  try {
    const update = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      status: "success",
      data: {
        update,
      },
    });
  } catch (error) {
    res.json({
      status: "fail",
      message: "error in creating tour",
    });
  }
};
const deleteTour = async (req, res) => {
  try {
    const deleting = await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: {
        deleting,
      },
    });
  } catch (error) {
    res.json({
      status: "fail",
      message: "error in creating tour",
    });
  }
};

module.exports = { createTour, readTour, findTour, updateTour, deleteTour };
