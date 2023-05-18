import React, { useState } from "react";

function CharacterCounter() {
  const [text, setText] = useState("");
  const [remainingChars, setRemainingChars] = useState(100); // Số ký tự tối đa

  const handleTextChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    setRemainingChars(250 - inputText.length); // Cập nhật số ký tự còn lại
  };

  return (
    <div className="FormConten">
      <textarea value={text} onChange={handleTextChange} />
      <div>Số từ còn lại: {remainingChars}</div>
    </div>
  );
}

export default CharacterCounter;
