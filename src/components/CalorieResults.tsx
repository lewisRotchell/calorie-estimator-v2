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
      <h2>Results</h2>
      <div className={classes.info}>
        <p>Your daily estimated maintenence calories are:</p>
        <p className={classes.resultNum}>
          <span> {values.maintenenceCalories} calories</span>
        </p>
        <p>Your daily estimated calorie deficit is:</p>
        <p className={classes.resultNum}>
          <span> {values.maintenenceCalories - 500} calories</span>
        </p>
      </div>
    </div>
  );
};

export default CalorieResults;
