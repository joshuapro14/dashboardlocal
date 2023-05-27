import React from "react";
import Style from "./admin.module.css";

const SearchButton = () => {
  return (
    <span className={Style.roundButton}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
      {/* https://icons.getbootstrap.com/icons/search/ */}
    </span>
  );
};

const ChatButton = () => {
  return (
    <span className={Style.roundButton}>
      <span className={Style.indicator}></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-chat-fill"
        viewBox="0 0 16 16"
      >
        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
      </svg>
      {/* https://icons.getbootstrap.com/icons/chat-fill/ */}
    </span>
  );
};

const NotificationButton = () => {
  return (
    <span className={Style.roundButton}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-exclamation-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
      </svg>
      {/* https://icons.getbootstrap.com/icons/exclamation-circle-fill/ */}
    </span>
  );
};

const ProfileButton = () => {
  return (
    <span className={Style.squareButton}>
      <span className={Style.flexRowCenter}>
        <h4>Himanshu</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </span>
      {/* https://icons.getbootstrap.com/icons/chevron-down/ */}
    </span>
  );
};

const HeaderBar = () => {
  return (
    <span className={Style.headerBar}>
      <SearchButton />
      <ChatButton />
      <NotificationButton />

      <span>|</span>
      <ProfileButton />
    </span>
  );
};

export default HeaderBar;
