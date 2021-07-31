import React from "react";
import classes from "./CalorieResults.module.scss";
type Props = {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  values: any;
  height: any;
};

const CalorieResults: React.FC<Props> = ({
  setIsSubmitted,
  values,
  height,
}) => {
  return (
    <div className={classes.calorieResults} style={{ height: height }}>
      <p>
        Your daily estimated maintenence calories are:{" "}
        {values.maintenenceCalories} calories
      </p>
      <p>
        Your daily estimated calorie deficit is:{" "}
        {values.maintenenceCalories - 500} calories
      </p>
      {/* <button onClick={() => setIsSubmitted(false)}>Back</button> */}
    </div>
  );
};

export default CalorieResults;
