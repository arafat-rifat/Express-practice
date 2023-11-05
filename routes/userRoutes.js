const express = require('express');
const userController = require('./../Controller/userController');

const router = express.Router();

// Routes for users
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createNewUser);
// Route for user

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
