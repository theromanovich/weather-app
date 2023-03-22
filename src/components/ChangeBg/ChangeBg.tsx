import React from "react";
import { useState, useEffect } from "react";

enum Bg {
  blue = "blue-bg",
  orange = "orange-bg",
  green = "green-bg",
  pink = "pink-bg",
}

const getBgFromLocalStorage = (): string => {
  let bg = Bg.blue;
  if (localStorage.getItem("bg")) {
    bg = localStorage.getItem("bg") as Bg;
  }
  return bg;
};
const ChangeBg: React.FC = () => {
  const [bg, setBg] = useState<string>(getBgFromLocalStorage());

  useEffect(() => {
    document.documentElement.className = bg;
    localStorage.setItem("bg", bg);
  }, [bg]);

  const setBlueBg = (): void => {
    setBg("blue-bg");
  };
  const setOrangeBg = (): void => {
    setBg("orange-bg");
  };
  const setGreenBg = (): void => {
    setBg("green-bg");
  };
  const setPinkBg = (): void => {
    setBg("pink-bg");
  };

  return (
    <div className="bg-buttons">
      <button onClick={setBlueBg}>Blue background</button>
      <button onClick={setOrangeBg}>Orange background</button>
      <button onClick={setGreenBg}>Turquoise background</button>
      <button onClick={setPinkBg}>Pink background</button>
    </div>
  );
};
export default ChangeBg;
