import { useState } from "react";
import CalorieForm from "./CalorieForm";
import CalorieResults from "./CalorieResults";
import useInput from "../hooks/useInput";
import validate from "../validateForm";
import classes from "./CalorieContainer.module.scss";

const CalorieContainer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [height, setHeight] = useState<number | null | undefined>(null);
  console.log(height);

  const submitDetails = () => {
    setIsSubmitted(true);
  };

  const { handleChangeNum, handleChangeString, handleSubmit, values, errors } =
    useInput(validate, submitDetails);

  return (
    <>
      <header>
        <h1 className="">Calorie Estimator</h1>
      </header>

      {!isSubmitted && (
        <CalorieForm
          setIsSubmitted={setIsSubmitted}
          handleChangeNum={handleChangeNum}
          handleChangeString={handleChangeString}
          handleSubmit={handleSubmit}
          values={values}
          errors={errors}
          setHeight={setHeight}
        />
      )}

      {isSubmitted && (
        <CalorieResults
          values={values}
          setIsSubmitted={setIsSubmitted}
          height={height}
        />
      )}

      {!isSubmitted && (
        <button type="submit" form="calorieForm" onSubmit={handleSubmit}>
          Submit
        </button>
      )}

      {isSubmitted && (
        <button onClick={() => setIsSubmitted(false)}>Back</button>
      )}
    </>
  );
};

export default CalorieContainer;
