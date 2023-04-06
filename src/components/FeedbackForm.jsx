import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";

function FeedbackForm() {
  const [input, setInput] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (input === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (input !== "" && input.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Input should be more than 10 characters");
    }
    setInput(e.target.value);
  };

  return (
    <Card>
      <form action="">
        <h2>How are feeling today?</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="write your heart out"
            onChange={handleTextChange}
            value={input}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
