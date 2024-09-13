const {
  createTour,
  readTour,
  findTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourControllers");

const express = require('express')
const route = express.Router()

route.get("/api/v1/tours", readTour);
route.get("/api/v1/tours/:id", findTour);
route.post("/api/v1/tours", createTour);
route.patch("/api/v1/tours/:id", updateTour);
route.delete("/api/v1/tours/:id", deleteTour);








module.exports = route;