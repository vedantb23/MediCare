import React, { useState } from "react";

// Static feedback data
const feedbacks = [
  {
    id: "f1",
    patientName: "Anjali Sharma",
    comment:
      "Dr. Mehra explained everything very clearly and made me feel at ease.",
    rating: 5,
    date: "2024-12-15",
  },
  {
    id: "f2",
    patientName: "Rahul Verma",
    comment: "Very professional and kind. Highly recommended!",
    rating: 4.5,
    date: "2025-01-10",
  },
  {
    id: "f3",
    patientName: "Sneha Patil",
    comment: "Great experience, punctual and friendly doctor.",
    rating: 4.8,
    date: "2025-03-03",
  },
];

const Feedback = () => {
  const [rating, setRating] = useState("");
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement backend submission
  };

  return (
    <div className="max-w-4xl mx-auto my-12 space-y-10">
      {/* Feedback Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Patient Feedback
        </h2>
        <div className="space-y-6">
          {feedbacks.map((fb) => (
            <div
              key={fb.id}
              className="p-4 border border-gray-200 rounded-md bg-gray-50"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  {fb.patientName}
                </h4>
                <span className="text-sm text-gray-500">
                  {new Date(fb.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700 mb-2">"{fb.comment}"</p>
              <p className="text-yellow-500 font-medium">
                Rating: {fb.rating} ⭐
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Review Form */}
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
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200" onClick={ handleSubmit}
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
