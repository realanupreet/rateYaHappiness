import React from "react";
import FeedbackItem from "./FeedbackItem";
function FeedbackList({ feedback, handleDelete }) {
  // console.log("feedback in feedback item", feedback);
  if (!feedback || feedback.length === 0) {
    return (
      <>
        <p>We havent got any data yet</p>
      </>
    );
  }
  return (
    <>
      <div className="feedback-list">
        {feedback.map((feed) => (
          <FeedbackItem key={feed.id} item={feed} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
}

export default FeedbackList;
