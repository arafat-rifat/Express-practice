const express = require('express');
const tourController = require('./../Controller/tourController');
const router = express.Router();

// Router param middleware
// router.param('id', tourController.checkId);

//Create  a checkbody middleware
//Check if body contains the name and price property
//If not send back (400) bad request
//Add it to the post handaler stack

// ROUTES for tour
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createNewTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
