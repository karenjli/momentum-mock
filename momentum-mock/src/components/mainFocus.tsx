import React, { useState } from "react";

const MainFocus = () => {
  const [inputFocus, setInputFocus] = useState("");
  const [mainFocus, setMainFocus] = useState("");
  const [hasFocusInput, setHasFocusInput] = useState(false);

  const onInputFocusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFocus(e.target.value);
  };

  const onInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      setMainFocus(inputFocus);
      setHasFocusInput(true);
    }
  };

  return (
    <div>
      {hasFocusInput ? (
        <section>
            <h4>TODAY</h4>
          <input type='checkbox'></input>
          <h4>{mainFocus}</h4>
        </section>
      ) : (
        <section>
          <h4>What is your main focus today?</h4>
          <input
            type='text'
            value={inputFocus}
            onChange={onInputFocusChange}
            onKeyDown={onInputSubmit}></input>
        </section>
      )}
    </div>
  );
};

export default MainFocus;
