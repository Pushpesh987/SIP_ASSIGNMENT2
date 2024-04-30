const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  blogId: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }],
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  // other review fields like text, author, etc.
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);


module.exports = Review;
