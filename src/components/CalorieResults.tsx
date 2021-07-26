import React from "react";
type Props = {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

const CalorieResults: React.FC<Props> = ({ setIsSubmitted }) => {
  return (
    <div className="card-face card-back  ">
      <p>
        Your daily estimated maintenence calories are:{" "}
        {/* {values.maintenenceCalories} calories */}
      </p>
      <p>
        Your daily estimated calorie deficit is:{" "}
        {/* {values.maintenenceCalories - 500} calories */}
      </p>
      <button onClick={() => setIsSubmitted(false)}>Back</button>
    </div>
  );
};

export default CalorieResults;
