import React, { useRef, useEffect, useState } from "react";
import classes from "./CalorieForm.module.scss";

type Props = {
  setShowActivities: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  handleChangeNum: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: { [n: string]: number | string };
  errors: {};
  handleChangeString: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
  setHeight: any;
};

const CalorieForm: React.FC<Props> = ({
  setShowActivities,
  handleChangeNum,
  handleChangeString,
  handleSubmit,
  values,
  errors,
  setHeight,
}) => {
  console.log(errors);

  const div = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const height = div.current?.offsetHeight;
    setHeight(height);
  });

  const handleShowActivities = (e: any) => {
    e.preventDefault();
    setShowActivities(true);
  };

  return (
    <div ref={div} className={classes.calorieForm}>
      <form className=" " id="calorieForm" onSubmit={handleSubmit}>
        <div className={classes.formControl}>
          <div className={classes.formControl__top}>
            <p className="">Height</p>
            <label htmlFor="heightUnits">Units:</label>
            <select
              // tabIndex={-1}
              className={classes.selectSmallest}
              onChange={handleChangeString}
              value={values.heightMetrics}
              name="heightMetrics"
              id="heightUnits"
            >
              <option value="feetAndInches">Feet/Inches</option>
              <option value="cm">cm</option>
            </select>
          </div>

          {values.heightMetrics === "cm" ? (
            <div className={classes.formControl__bottom}>
              <label>
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
                  placeholder="cm"
                  name="cm"
                />
                cm
              </label>
            </div>
          ) : (
            <div className={classes.formControl__bottom}>
              <label>
                <input
                  onChange={handleChangeNum}
                  value={values.foot || ""}
                  type="number"
                  id="foot"
                  placeholder="feet"
                  name="foot"
                />
                foot
              </label>

              <label>
                <input
                  onChange={handleChangeNum}
                  value={values.inch || ""}
                  className=""
                  type="number"
                  id="inches"
                  placeholder="inches"
                  name="inch"
                />
                inches
              </label>
            </div>
          )}
        </div>
        {/* weight */}
        <div className={classes.formControl}>
          <div className={classes.formControl__top}>
            <p>Weight</p>
            <label htmlFor="weightUnits">Units:</label>
            <select
              className=""
              onChange={handleChangeString}
              value={values.weightMetrics}
              name="weightMetrics"
              id="weightUnits"
            >
              <option value="stoneAndPounds">Stone/lbs</option>
              <option value="kg">kg</option>
            </select>
          </div>

          {values.weightMetrics === "kg" ? (
            <div className={classes.formControl__bottom}>
              <label>
                <input
                  onChange={handleChangeNum}
                  value={values.kg || ""}
                  className=""
                  type="number"
                  id="weight"
                  placeholder="kg"
                  name="kg"
                />
                kg
              </label>
            </div>
          ) : (
            <div className={classes.formControl__bottom}>
              <label>
                <input
                  onChange={handleChangeNum}
                  value={values.stone || ""}
                  className=""
                  placeholder="stone"
                  type="number"
                  id="stone"
                  name="stone"
                />
                stone
              </label>

              <label>
                <input
                  onChange={handleChangeNum}
                  value={values.lbs || ""}
                  className=""
                  type="number"
                  id="lbs"
                  placeholder="lbs"
                  name="lbs"
                />
                lbs
              </label>
            </div>
          )}
        </div>
        {/* Age */}
        <div className={classes.formControl}>
          <label className={classes.formSubtitle} htmlFor="age">
            Age
          </label>
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
        <div className={classes.formControl}>
          <label className={classes.formSubtitle} htmlFor="sex">
            Sex
          </label>
          <select
            onChange={handleChangeString}
            value={values.sex}
            name="sex"
            className={classes.sexSelect}
            id="sex"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        {/* activity level */}
        <div className={classes.formControl}>
          <label className={classes.activityLevel} htmlFor="activityLevel">
            Activity Level <button onClick={handleShowActivities}>?</button>
          </label>

          <select
            onChange={handleChangeString}
            value={values.activityLevel}
            name="activityLevel"
            className={classes.activitySelect}
            id="activityLevel"
          >
            <option value={1.2}>Sedentary</option>
            <option value={1.375}>Lightly Active</option>
            <option value={1.55}>Moderately Active</option>
            <option value={1.725}>Very Active</option>
            <option value={1.9}>Extra Active</option>
          </select>
        </div>
      </form>

      {/* <button className="" type="submit" form="calorieForm">
        Submit
      </button> */}
    </div>
  );
};

export default CalorieForm;
