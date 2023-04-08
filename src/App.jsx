import { useState, useEffect } from "react";
import FeedbackData from "./data/FeedbackData";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Card from "./components/shared/Card";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  useEffect(() => {
    // Define the 'otpless' function
    window.otpless = (otplessUser) => {
      // Retrieve the user's details after successful login
      const waName = otplessUser.waName;
      const waNumber = otplessUser.waNumber;

      // Handle the signup/signin process
      // ...
    };
  }, []);
  const deleteFeedback = (id) => {
    console.log("App, id", id);
    if (window.confirm("Are you sure enough to delete the feel?")) {
      const newFeedback = feedback.filter((feed) => feed.id !== id);
      setFeedback(newFeedback);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        {/* <h1>Your happiness</h1> */}
        <Card reverse={true}>
          Hey, there, this app, the descendent of react the 18th, aims to help
          you understand and make sense of your internal feelings. You can write
          the activity and rate it accordingly to help you understand which
          activity actually drains your energy and which cheers ya up!{" "}
        </Card>
        {/* <!-- WhatsApp Login Button --> */}
        <div id="otpless"></div>
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />

        <Card reverse={true}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              Developed and managed by{" "}
              <a
                href="https://github.com/realanupreet"
                style={{ color: "#ff6a95" }}
              >
                Anupreet Singh
              </a>
              {"  "}
            </div>
            <img
              src="https://em-content.zobj.net/source/microsoft-teams/337/face-in-clouds_1f636-200d-1f32b-fe0f.png"
              width={"40px"}
            />
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;
