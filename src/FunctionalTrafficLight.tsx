import { useState } from "react";

type Color = "red" | "yellow" | "green" | "black";

export const FunctionalTrafficLight = () => {
  const [light, setLight] = useState(1);

  const switchLight: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (light === 3) setLight(1);
    else setLight(light + 1);
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div
          className={`circle ${
            (light === 3 ? "red" : "black") satisfies Color
          }`}
        ></div>
        <div
          className={`circle ${
            (light === 2 ? "yellow" : "black") satisfies Color
          }`}
        ></div>
        <div
          className={`circle ${
            (light === 1 ? "green" : "black") satisfies Color
          }`}
        ></div>
      </div>
      <button className="next-state-button" onClick={switchLight}>
        Next State
      </button>
    </div>
  );
};
