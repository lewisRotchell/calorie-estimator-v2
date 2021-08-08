import React, { useRef, useEffect } from "react";
import classes from "./CalorieForm.module.scss";

type Props = {
  setShowActivities: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  handleChangeNum: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: { [n: string]: number | string };
  errors: any;
  handleChangeString: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
  setHeight: any;
  isSubmitted: boolean;
};

const CalorieForm: React.FC<Props> = ({
  setShowActivities,
  handleChangeNum,
  handleChangeString,
  handleSubmit,
  values,
  errors,
  setHeight,
  isSubmitted,
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

  let tabIndex = isSubmitted ? -1 : 1;

  return (
    <div ref={div} className={classes.calorieForm}>
      <form className=" " id="calorieForm" onSubmit={handleSubmit}>
        <div className={classes.formControl}>
          <div className={classes.formControl__top}>
            <p className="">Height</p>
            <div className={classes.formInputs}>
              <label htmlFor="heightUnits">Units:</label>
              <div className={classes.select}>
                <select
                  className={classes.selectSmallest}
                  onChange={handleChangeString}
                  value={values.heightMetrics}
                  name="heightMetrics"
                  id="heightUnits"
                  tabIndex={tabIndex}
                >
                  <option className={classes.option} value="feetAndInches">
                    Feet/Inches
                  </option>
                  <option className={classes.option} value="cm">
                    cm
                  </option>
                </select>
              </div>
            </div>
          </div>

          {values.heightMetrics === "cm" ? (
            <div className={classes.formControl__bottom}>
              <div>
                <label>
                  <input
                    className={errors.cm && classes.error}
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
                    tabIndex={tabIndex}
                  />
                  cm
                </label>
              </div>
            </div>
          ) : (
            <div className={classes.formControl__bottom}>
              <label>
                <input
                  className={errors.foot && classes.error}
                  onChange={handleChangeNum}
                  value={values.foot || ""}
                  type="number"
                  id="foot"
                  placeholder="feet"
                  name="foot"
                  onKeyDown={(evt) =>
                    ["e", "E", "+", "-"].includes(evt.key) &&
                    evt.preventDefault()
                  }
                  tabIndex={tabIndex}
                />
                foot
              </label>

              <label>
                <input
                  onChange={handleChangeNum}
                  value={values.inch || ""}
                  type="number"
                  id="inches"
                  placeholder="inches"
                  name="inch"
                  onKeyDown={(evt) =>
                    ["e", "E", "+", "-"].includes(evt.key) &&
                    evt.preventDefault()
                  }
                  tabIndex={tabIndex}
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
            <div className={classes.formInputs}>
              <label htmlFor="weightUnits">Units:</label>
              <div className={classes.select}>
                <select
                  className=""
                  onChange={handleChangeString}
                  value={values.weightMetrics}
                  name="weightMetrics"
                  id="weightUnits"
                  tabIndex={tabIndex}
                >
                  <option value="stoneAndPounds">Stone/lbs</option>
                  <option value="kg">kg</option>
                </select>
              </div>
            </div>
          </div>

          {values.weightMetrics === "kg" ? (
            <div className={classes.formControl__bottom}>
              <label>
                <input
                  onChange={handleChangeNum}
                  value={values.kg || ""}
                  className={errors.kg && classes.error}
                  type="number"
                  id="weight"
                  placeholder="kg"
                  name="kg"
                  onKeyDown={(evt) =>
                    ["e", "E", "+", "-"].includes(evt.key) &&
                    evt.preventDefault()
                  }
                  tabIndex={tabIndex}
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
                  className={errors.stone && classes.error}
                  placeholder="stone"
                  type="number"
                  id="stone"
                  name="stone"
                  onKeyDown={(evt) =>
                    ["e", "E", "+", "-"].includes(evt.key) &&
                    evt.preventDefault()
                  }
                  tabIndex={tabIndex}
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
                  onKeyDown={(evt) =>
                    ["e", "E", "+", "-"].includes(evt.key) &&
                    evt.preventDefault()
                  }
                  tabIndex={tabIndex}
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
          <div className={classes.formInputs}>
            <input
              onChange={handleChangeNum}
              value={values.age || ""}
              className={errors.age && classes.error}
              type="number"
              id="age"
              placeholder="Years"
              name="age"
              onKeyDown={(evt) =>
                ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
              }
              tabIndex={tabIndex}
            />
          </div>
        </div>
        {/* sex */}
        <div className={classes.formControl}>
          <label className={classes.formSubtitle} htmlFor="sex">
            Sex
          </label>
          <div className={classes.formInputs}>
            <select
              onChange={handleChangeString}
              value={values.sex}
              name="sex"
              className={classes.sexSelect}
              id="sex"
              tabIndex={tabIndex}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        {/* activity level */}
        <div className={classes.formControl}>
          <label className={classes.activityLevel} htmlFor="activityLevel">
            Activity Level{" "}
            <button
              className={classes.activityButton}
              onClick={handleShowActivities}
              tabIndex={tabIndex}
            >
              ?
            </button>
          </label>

          <div className={classes.formInputs}>
            <div className={classes.select}>
              <select
                onChange={handleChangeString}
                value={values.activityLevel}
                name="activityLevel"
                className={classes.activitySelect}
                id="activityLevel"
                tabIndex={tabIndex}
              >
                <option value={1.2}>Sedentary</option>
                <option value={1.375}>Lightly Active</option>
                <option value={1.55}>Moderately Active</option>
                <option value={1.725}>Very Active</option>
                <option value={1.9}>Extra Active</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CalorieForm;
