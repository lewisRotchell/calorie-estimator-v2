import { useState } from "react";
import CalorieForm from "./CalorieForm";
import CalorieResults from "./CalorieResults";
import useInput from "../hooks/useInput";
import validate from "../validateForm";
import classes from "./CalorieContainer.module.scss";
import ActivityLevels from "./ActivityLevels";

const CalorieContainer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showActivities, setShowActivities] = useState(false);
  const [height, setHeight] = useState<number | null | undefined>(null);

  const submitDetails = () => {
    setIsSubmitted(true);
  };

  const { handleChangeNum, handleChangeString, handleSubmit, values, errors } =
    useInput(validate, submitDetails);

  return (
    <div className={classes.calorieContainer}>
      <header>
        <h1 className="">Calorie Estimator</h1>
      </header>
      <div className={classes.divider}></div>
      <div className={classes.calorieSubContainer}>
        {!showActivities && (
          <CalorieForm
            setShowActivities={setShowActivities}
            setIsSubmitted={setIsSubmitted}
            isSubmitted={isSubmitted}
            handleChangeNum={handleChangeNum}
            handleChangeString={handleChangeString}
            handleSubmit={handleSubmit}
            values={values}
            errors={errors}
            setHeight={setHeight}
          />
        )}

        <CalorieResults
          values={values}
          height={height}
          isSubmitted={isSubmitted}
        />
        {showActivities && (
          <ActivityLevels show={showActivities} height={height} />
        )}

        {!isSubmitted && !showActivities && (
          <button
            className={classes.button}
            type="submit"
            form="calorieForm"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        )}

        {isSubmitted && !showActivities && (
          <button
            className={classes.button}
            onClick={() => setIsSubmitted(false)}
          >
            Back
          </button>
        )}

        {showActivities && (
          <button
            className={`${classes.showActivityBtn} ${classes.button}`}
            onClick={() => setShowActivities(false)}
          >
            Back
          </button>
        )}
      </div>
    </div>
  );
};

export default CalorieContainer;
