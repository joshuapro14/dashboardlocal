import React from "react";
import Style from "./actionInfoBar.module.css";
import Calendar from "../../../components/calendar/Calendar";
import Avatars from "./Avatars";

const ActionInfoBar = () => {
  return (
    <div className={Style.bar}>
      <span className={Style.avatars}>
        <Avatars />
      </span>
      <span className={Style.actionBox}>
        <span className={Style.filterButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-filter"
            viewBox="0 0 16 16"
          >
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
          {/* https://icons.getbootstrap.com/icons/filter/ */}
        </span>
        <Calendar />
      </span>
    </div>
  );
};

export default ActionInfoBar;
