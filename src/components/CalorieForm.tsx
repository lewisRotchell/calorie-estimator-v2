import React, { useState } from "react";
import useInput from "../hooks/useInput";
import validate from "../validateForm";

const CalorieForm = () => {
  const flipForm = () => {
    setIsFlipped((prevState) => !prevState);
  };

  const { handleChangeNum, handleChangeString, handleSubmit, values, errors } =
    useInput(validate, flipForm);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card ">
      <div
        className={`card-inner bg-white bg-opacity-50 rounded-3xl   ${
          isFlipped && "flip"
        }`}
      >
        <div className="card-face">
          <header>
            <h1 className="text-3xl text-center p-6">Calorie Estimator</h1>
          </header>

          <form
            className=" flex flex-col px-2 md:px-8 pb-8 text-base  xs:text-lg "
            id="calorieForm"
            onSubmit={handleSubmit}
          >
            <div className="form-control ">
              <label className="" htmlFor="height">
                Height:
              </label>

              {values.heightMetrics === "cm" ? (
                <>
                  <input
                    className="w-28 md:w-24 px-2"
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
                    className="w-20 md:w-24 px-2"
                    type="number"
                    id="foot"
                    placeholder="feet"
                    name="foot"
                  />

                  <input
                    onChange={handleChangeNum}
                    value={values.inch || ""}
                    className="w-20 md:w-24 px-2"
                    type="number"
                    id="inches"
                    placeholder="inches"
                    name="inch"
                  />
                </>
              )}

              <select
                className="text-xs md:text-base"
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
                  className="w-20 md:w-24 px-2"
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
                    className="w-20 md:w-24 px-2"
                    placeholder="stone"
                    type="number"
                    id="stone"
                    name="stone"
                  />

                  <input
                    onChange={handleChangeNum}
                    value={values.lbs || ""}
                    className="w-20 md:w-24 px-2"
                    type="number"
                    id="lbs"
                    placeholder="lbs"
                    name="lbs"
                  />
                </>
              )}
              <select
                className="text-xs md:text-base"
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
                className="w-20 md:w-24 px-2"
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
                className="text-xs md:text-base"
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
                className="text-xs md:text-base"
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
          <section className=" px-2 md:px-8 text-lg md:text-lg">
            <h3 className=" mb-2 text-2xl">Activity Levels</h3>
            <div className="  ">
              <p className="mb-2">Sedentary: little or no exercise, desk job</p>
              <p className="mb-2">
                Lightly Active: Light exercise or sports 1-3 days/week
              </p>
              <p className="mb-2">
                Moderately Active: Moderate exercise or sports 6-7 days/week
              </p>
              <p className="mb-2">
                Very Active: Hard exercise every day, or exercising 2 times/day
              </p>
              <p className="mb-2">
                Extra Active: Very hard exercise/sports and physical job or
                train twice daily
              </p>
            </div>
          </section>

          <footer className=" w-full text-center absolute bottom-7">
            <button
              className="bg-white py-2 px-20 rounded-2xl"
              type="submit"
              form="calorieForm"
            >
              Submit
            </button>
          </footer>
        </div>

        <div className="card-face card-back p-4 ">
          <header>
            <h1 className="text-3xl text-center p-6">Calorie Estimator</h1>
          </header>
          <p>
            Your daily estimated maintenence calories are:{" "}
            {values.maintenenceCalories} calories
          </p>
          <p>
            Your daily estimated calorie deficit is:{" "}
            {values.maintenenceCalories - 500} calories
          </p>
          <footer className=" w-full text-center absolute bottom-7">
            <button
              className="bg-white py-2 px-20 rounded-2xl"
              type="submit"
              form="calorieForm"
            >
              Back
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CalorieForm;
