import React, { useState } from "react";
import toast from "react-hot-toast";

const initialDummyReviews = [
  {
    user: { name: "Anjali Sharma" },
    createdAt: "2025-02-15T10:30:00Z",
    reviewText: "Explained everything very clearly and made me feel at ease.",
    rating: 5,
  },
  {
    user: { name: "Rahul Verma" },
    createdAt: "2025-01-10T15:45:00Z",
    reviewText: "Very professional and kind. Highly recommended!",
    rating: 3,
  },
  {
    user: { name: "Karan Singh" },
    createdAt: "2025-05-01T12:00:00Z",
    reviewText: "The doctor listened carefully and provided excellent advice.",
    rating: 2,
  },
];

const Feedback = ({ reviews = [], totalRating = 0, doctorId, refetch }) => {
  const [rating, setRating] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [localReviews, setLocalReviews] = useState([
    ...initialDummyReviews,
    ...reviews,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rating || !reviewText) {
      toast.error("Please fill out both rating and review.");
      return;
    }

    const newReview = {
      user: { name: "You" },
      createdAt: new Date().toISOString(),
      reviewText,
      rating: parseFloat(rating),
    };

    setLocalReviews([...localReviews, newReview]);
    toast.success("Review submitted successfully!");
    setRating("");
    setReviewText("");
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    return (
      <div className="text-blue-600 text-sm flex gap-0.5">
        {"★".repeat(fullStars)}
        {hasHalfStar ? "★" : ""}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto  w-full my-12 space-y-10">
      {/* Reviews */}
      <div className=" p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            All reviews ({localReviews.length})
          </h2>
        </div>

        <div className="space-y-6">
          {localReviews.map((review, index) => (
            <div
              key={index}
              className="flex justify-between items-start border-b pb-4 border-gray-200"
            >
              <div>
                <h4 className="text-sm font-semibold text-blue-800">
                  {review?.user?.name || "Anonymous"}
                </h4>
                <p className="text-xs text-gray-500">
                  {new Date(review?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <p className="mt-1 text-sm text-gray-800">
                  {review.reviewText}
                </p>
              </div>
              <div className="mt-1">{renderStars(review.rating)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Leave a Review
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Rating (1 to 5)
            </label>
            <input
              type="number"
              min="1"
              max="5"
              step="0.1"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Your Review
            </label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Write your experience here..."
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
