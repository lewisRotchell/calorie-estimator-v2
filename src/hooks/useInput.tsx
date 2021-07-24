import React, { useEffect, useState } from "react";

const useInput = (
  validate: (values: { [n: string]: number | string }) => {},
  flipForm: () => void
) => {
  let hasError = true;

  type FormState = {
    cm: number;
    foot: number;
    inch: number;

    kg: number;
    stone: number;
    lbs: number;
    heightMetrics: string;
    weightMetrics: string;

    age: number;
    sex: string;
    activityLevel: number;
  };

  const [values, setValues] = useState<FormState>({
    cm: 0,
    foot: 0,
    inch: 0,
    heightMetrics: "feetAndInches",

    kg: 0,
    stone: 0,
    lbs: 0,
    weightMetrics: "stoneAndPounds",

    age: 0,
    sex: "male",
    activityLevel: 1.55,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChangeNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const handleChangeString = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      flipForm();
    }
  }, [errors, isSubmitting]);

  console.log(hasError);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return { handleChangeNum, handleChangeString, handleSubmit, values, errors };
};

export default useInput;
