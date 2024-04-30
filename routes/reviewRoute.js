const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/reviewContoller');

// Route for creating a new review
router.post('/create', ReviewController.createReview);

// Route for getting all reviews for a particular blog
router.get('/blog/:blogId', ReviewController.getReviewsByBlog);

// Other routes for updating and deleting reviews can be added here

module.exports = router;
