import React from "react";
import Style from "./greetingBar.module.css";

const GreetingsBar = () => {
  return (
    <div className={Style.bar}>
      <span className={Style.greetingsBox}>
        <span className={Style.greetingsTitle}>
          Good afternoon, Himashu{" "}
          <span role="img" aria-label="">
            👋
          </span>
        </span>
        <span className={Style.greetingsSubTitle}>
          Here is what’s happening today
        </span>
      </span>
    </div>
  );
};

export default GreetingsBar;
