import React, { useEffect, useState } from "react";

const useInput = (
  validate: (values: { [n: string]: number | string }) => {},
  submitDetails: () => void
) => {
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
    maintenenceCalories: number;
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
    maintenenceCalories: 0,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getCalories = () => {
    const convertToCm = (foot: number, inche: number) => {
      const convertedToCm: number = foot * 30.48 + inche * 2.54;
      return convertedToCm;
    };

    const convertToKg = (stone: number, lbs: number) => {
      const convertedToKg: number = stone * 6.35029 + lbs * 0.45359237;
      return convertedToKg;
    };

    let heightVal: number;
    let weightVal: number;
    let bmr: number;
    let tdee: number;
    let roundedTdee: number;

    if (values.heightMetrics === "feetAndInches") {
      heightVal = convertToCm(values.foot, values.inch);
    } else {
      heightVal = values.cm;
    }

    if (values.weightMetrics === "stoneAndPounds") {
      weightVal = convertToKg(values.stone, values.lbs);
    } else {
      weightVal = values.kg;
    }

    if (values.sex === "male") {
      bmr = 10 * weightVal + 6.25 * heightVal - 5 * values.age + 5;
    } else {
      bmr = 10 * weightVal + 6.25 * heightVal - 5 * values.age - 161;
    }

    tdee = bmr * values.activityLevel;
    roundedTdee = Math.round(tdee);

    setValues((prev) => ({
      ...prev,
      maintenenceCalories: Number(roundedTdee),
    }));
  };

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
      submitDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    getCalories();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return { handleChangeNum, handleChangeString, handleSubmit, values, errors };
};

export default useInput;
