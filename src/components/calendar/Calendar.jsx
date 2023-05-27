import { subDays } from "date-fns";
import { useEffect, useState } from "react";
// import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import Style from "./cal.module.css";

const Calendar = () => {
  // const [isShow, setShow] = useState(false);
  const [state] = useState([
    {
      startDate: subDays(new Date(), 6),
      endDate: new Date(),
      key: "selection"
    }
  ]);
  const [range, setRange] = useState("");

  useEffect(() => {
    setRange(
      `${format(state[0].startDate, "dd/MM/yyy")} - ${format(
        state[0].endDate,
        "dd/MM/yyy"
      )}`
    );
  }, [state]);


  return (
    <span className={Style.calendar}>
      <span
        className={Style.inputWithIcon}
      >
        <input type="text" value={range} readOnly className={Style.calInput} />
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-range" viewBox="0 0 16 16">
          <path d="M9 7a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1zM1 9h4a1 1 0 0 1 0 2H1V9z" />
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
        </svg>
        {/* https://icons.getbootstrap.com/icons/calendar-range/ */}
      </span>
    </span>
  );
};

export default Calendar;
