import { useState } from "react";

const lights: Array<string> = ["black", "green", "yellow", "red"];

export const FunctionalTrafficLight = () => {
  const [light, switchLight] = useState(1);

  const changeLight: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (light === 3) switchLight(1);
    else switchLight(light + 1);
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${light === 3 ? lights[3] : lights[0]}`}></div>
        <div className={`circle ${light === 2 ? lights[2] : lights[0]}`}></div>
        <div className={`circle ${light === 1 ? lights[1] : lights[0]}`}></div>
      </div>
      <button className="next-state-button" onClick={changeLight}>
        Next State
      </button>
    </div>
  );
};
