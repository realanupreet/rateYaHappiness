import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import Card from "./components/shared/Card";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    console.log("App, id", id);
  };

  return (
    <>
      <Header />
      <div className="container">
        {/* <h1>Your happiness</h1> */}
        <Card reverse={true}>
          Hey, there, the this app, the descendent of react the 18th, aims to
          help you understand and make sense of your internal feelings. You can
          write the activity and rate it accordingly to help you understand
          which activity actually drains your energy and which cheers ya up!{" "}
        </Card>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
