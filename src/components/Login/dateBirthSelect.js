import React from "react";
import { useMediaQuery } from "react-responsive";

const DateBirthSelect = ({ ...props }) => {
  const view1 = useMediaQuery({
    query: "(min-width: 539px)",
  });
  const view2 = useMediaQuery({
    query: "(min-width: 850px)",
  });
  const view3 = useMediaQuery({
    query: "(min-width: 1170px)",
  });
  return (
    <div
      className="reg_grid"
      style={{ marginBottom: `${props.dateError && !view3 ? "90px" : "0px"}` }}
    >
      <select name="bDay">
        {props.days.map((day, index) => (
          <option key={index}>{day}</option>
        ))}
      </select>
      <select
        name="bMonth"
        value={props.bMonth}
        onChange={props.handleRegisterChange}
      >
        {props.months.map((month, index) => (
          <option key={index}>{month}</option>
        ))}
      </select>
      <select
        name="bYear"
        value={props.bYear}
        onChange={props.handleRegisterChange}
      >
        {props.years.map((year, index) => (
          <option key={index}>{year}</option>
        ))}
      </select>
      {props.dateError && (
        <div
          className={
            !view3 ? "input_error" : "input_error input_error_select_large"
          }
        >
          <div
            className={!view3 ? "error_arrow_bottom" : "error_arrow_left"}
          ></div>
          {props.dateError}
        </div>
      )}
    </div>
  );
};

export default DateBirthSelect;
