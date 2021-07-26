import { useState } from "react";
import CalorieForm from "./CalorieForm";
import CalorieResults from "./CalorieResults";
import useInput from "../hooks/useInput";
import validate from "../validateForm";

const CalorieContainer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  console.log(isSubmitted);

  const submitDetails = () => {
    setIsSubmitted((prevState) => !prevState);
  };

  const { handleChangeNum, handleChangeString, handleSubmit, values, errors } =
    useInput(validate, submitDetails);

  return (
    <>
      <header>
        <h1 className="">Calorie Estimator</h1>
      </header>
      {!isSubmitted ? (
        <CalorieForm
          setIsSubmitted={setIsSubmitted}
          handleChangeNum={handleChangeNum}
          handleChangeString={handleChangeString}
          handleSubmit={handleSubmit}
          values={values}
        />
      ) : (
        <CalorieResults values={values} setIsSubmitted={setIsSubmitted} />
      )}

      {/* <footer className="">
        {!isSubmitted ? (
          <button className="" type="submit" form="calorieForm">
            Submit
          </button>
        ) : (
          <button className="" onClick={() => setIsSubmitted(false)}>
            Back
          </button>
        )}
      </footer> */}
    </>
  );
};

export default CalorieContainer;
