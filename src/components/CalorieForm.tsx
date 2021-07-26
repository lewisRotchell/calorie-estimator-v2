import React, { useState } from "react";
import useInput from "../hooks/useInput";
import validate from "../validateForm";

type Props = {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  handleChangeNum: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: { [n: string]: number | string };
  handleChangeString: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
};

const CalorieForm: React.FC<Props> = ({
  setIsSubmitted,
  handleChangeNum,
  handleChangeString,
  handleSubmit,
  values,
}) => {
  const submitDetails = () => {
    setIsSubmitted((prevState) => !prevState);
  };

  console.log(values);

  const { errors } = useInput(validate, submitDetails);
  return (
    <div className="card ">
      <div className="card-face">
        <form className=" " id="calorieForm" onSubmit={handleSubmit}>
          <div className="form-control ">
            <label className="" htmlFor="height">
              Height:
            </label>

            {values.heightMetrics === "cm" ? (
              <>
                <input
                  className=""
                  onKeyDown={(evt) =>
                    ["e", "E", "+", "-"].includes(evt.key) &&
                    evt.preventDefault()
                  }
                  onChange={handleChangeNum}
                  value={values.cm || ""}
                  type="number"
                  id="height"
                  placeholder="centimetres"
                  name="cm"
                />
              </>
            ) : (
              <>
                <input
                  onChange={handleChangeNum}
                  value={values.foot || ""}
                  className=""
                  type="number"
                  id="foot"
                  placeholder="feet"
                  name="foot"
                />

                <input
                  onChange={handleChangeNum}
                  value={values.inch || ""}
                  className=""
                  type="number"
                  id="inches"
                  placeholder="inches"
                  name="inch"
                />
              </>
            )}

            <select
              className=""
              onChange={handleChangeString}
              value={values.heightMetrics}
              name="heightMetrics"
              id=""
            >
              <option value="feetAndInches">Feet/Inches</option>
              <option value="cm">cm</option>
            </select>
          </div>
          {/* weight */}
          <div className="form-control">
            <label htmlFor="weight">Weight</label>

            {values.weightMetrics === "kg" ? (
              <input
                onChange={handleChangeNum}
                value={values.kg || ""}
                className=""
                type="number"
                id="weight"
                placeholder="kg"
                name="kg"
              />
            ) : (
              <>
                <input
                  onChange={handleChangeNum}
                  value={values.stone || ""}
                  className=""
                  placeholder="stone"
                  type="number"
                  id="stone"
                  name="stone"
                />

                <input
                  onChange={handleChangeNum}
                  value={values.lbs || ""}
                  className=""
                  type="number"
                  id="lbs"
                  placeholder="lbs"
                  name="lbs"
                />
              </>
            )}
            <select
              className=""
              onChange={handleChangeString}
              value={values.weightMetrics}
              name="weightMetrics"
              id=""
            >
              <option value="stoneAndPounds">Stone/lbs</option>
              <option value="kg">kg</option>
            </select>
          </div>
          {/* Age */}
          <div className="form-control">
            <label htmlFor="age">Age</label>
            <input
              onChange={handleChangeNum}
              value={values.age || ""}
              className=""
              type="number"
              id="age"
              placeholder="Years"
              name="age"
            />
          </div>
          {/* sex */}
          <div className="form-control">
            <label htmlFor="sex">Sex</label>
            <select
              onChange={handleChangeString}
              value={values.sex}
              name="sex"
              className=""
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {/* activity level */}
          <div className="form-control">
            <label htmlFor="activityLevel">Activity Level</label>
            <select
              onChange={handleChangeString}
              value={values.activityLevel}
              name="activityLevel"
              className=""
              id=""
            >
              <option value={1.2}>Sedentary</option>
              <option value={1.375}>Lightly Active</option>
              <option value={1.55}>Moderately Active</option>
              <option value={1.725}>Very Active</option>
              <option value={1.9}>Extra Active</option>
            </select>
          </div>
        </form>
        <section className=" ">
          <h3 className=" ">Activity Levels</h3>
          <div className="  ">
            <p className="">Sedentary: little or no exercise, desk job</p>
            <p className="">
              Lightly Active: Light exercise or sports 1-3 days/week
            </p>
            <p className="">
              Moderately Active: Moderate exercise or sports 6-7 days/week
            </p>
            <p className="">
              Very Active: Hard exercise every day, or exercising 2 times/day
            </p>
            <p className="">
              Extra Active: Very hard exercise/sports and physical job or train
              twice daily
            </p>
          </div>
        </section>
      </div>
      <button className="" type="submit" form="calorieForm">
        Submit
      </button>
    </div>
  );
};

export default CalorieForm;
