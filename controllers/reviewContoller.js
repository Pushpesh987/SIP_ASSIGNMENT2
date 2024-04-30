const Review = require('../modals/review');

const ReviewController = {
  // Create a new review
  createReview: async (req, res) => {
    try {
      const { blogId, rating } = req.body;
      console.log("Hello created");
      // Assuming other fields like text, author, etc. are also included in the request body

      // Create a new review instance
      const review = new Review({
        blogId,
        rating,
        // Assuming other fields are also included here
      });

      // Save the review to the database
      const savedReview = await review.save();

      res.status(201).json(savedReview); // Respond with the saved review
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Get all reviews for a particular blog
  getReviewsByBlog: async (req, res) => {
    try {
      const { blogId } = req.params;

      // Find all reviews with the given blogId
      const reviews = await Review.find({ blogId });

      res.json(reviews);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Other methods like updating and deleting reviews can be added here
};

module.exports = ReviewController;
