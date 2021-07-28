import { useState } from "react";
import CalorieForm from "./CalorieForm";
import CalorieResults from "./CalorieResults";
import useInput from "../hooks/useInput";
import validate from "../validateForm";

const CalorieContainer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitDetails = () => {
    setIsSubmitted(true);
  };

  const { handleChangeNum, handleChangeString, handleSubmit, values, errors } =
    useInput(validate, submitDetails);

  console.log(isSubmitted);
  console.log(errors);

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
          errors={errors}
        />
      ) : (
        <CalorieResults values={values} setIsSubmitted={setIsSubmitted} />
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
