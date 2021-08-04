import React from "react";
import classes from "./CalorieResults.module.scss";
type Props = {
  values: any;
  height: any;
  isSubmitted: boolean;
};

const CalorieResults: React.FC<Props> = ({ values, height, isSubmitted }) => {
  return (
    <div
      className={`${classes.calorieResults} ${
        isSubmitted ? classes.active : ""
      }`}
      style={{ height: height + 12 }}
    >
      <p>
        Your daily estimated maintenence calories are:{" "}
        {values.maintenenceCalories} calories
      </p>
      <p>
        Your daily estimated calorie deficit is:{" "}
        {values.maintenenceCalories - 500} calories
      </p>
    </div>
  );
};

export default CalorieResults;
