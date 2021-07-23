import React, { useState } from "react";

const CalorieForm = () => {
  type FormState = {
    height: {
      cmValue: number;
      footValue: number;
      inchValue: number;
      metrics: string;
    };
    weight: {
      kgValue: number;
      stoneValue: number;
      lbsValue: number;
      metrics: string;
    };
    age: number;
    sex: string;
    activityLevel: number;
  };

  const [values, setValues] = useState<FormState>({
    height: {
      cmValue: 0,
      footValue: 0,
      inchValue: 0,
      metrics: "feetAndInches",
    },
    weight: {
      kgValue: 0,
      stoneValue: 0,
      lbsValue: 0,
      metrics: "stoneAndPounds",
    },
    age: 0,
    sex: "male",
    activityLevel: 1.55,
  });
  const [isFlipped, setIsFlipped] = useState(false);
  const [maintenenceCalories, setMaintenenceCalories] = useState(0);

  const submitButtonHandler = () => {
    setIsFlipped((prevState) => !prevState);
  };

  const {
    age,
    sex,
    activityLevel,
    height: { cmValue, footValue, inchValue, metrics: heightMetrics },
    weight: { kgValue, stoneValue, lbsValue, metrics: weightMetrics },
  } = values;

  const convertToCm = (feet: number, inches: number) => {
    const convertedToCm: number = feet * 30.48 + inches * 2.54;
    return convertedToCm;
  };

  const convertToKg = (stone: number, lbs: number) => {
    const convertedToKg: number = stone * 6.35029 + lbs * 0.45359237;
    return convertedToKg;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let heightVal: number;
    let weightVal: number;
    let bmr: number;
    let tdee: number;
    let roundedTdee: number;

    if (heightMetrics === "feetAndInches") {
      heightVal = convertToCm(footValue, inchValue);
    } else {
      heightVal = cmValue;
    }

    if (weightMetrics === "stoneAndPounds") {
      weightVal = convertToKg(stoneValue, lbsValue);
    } else {
      weightVal = kgValue;
    }

    if (sex === "male") {
      bmr = 10 * weightVal + 6.25 * heightVal - 5 * age + 5;
    } else {
      bmr = 10 * weightVal + 6.25 * heightVal - 5 * age - 161;
    }

    tdee = bmr * activityLevel;
    roundedTdee = Math.round(tdee);

    setMaintenenceCalories(roundedTdee);
  };

  return (
    <div className="card">
      <div className={`card-inner rounded bg-red-500  ${isFlipped && "flip"}`}>
        <div className="card-face ">
          <header>
            <h1 className="text-3xl text-center p-6">Calorie Estimator</h1>
          </header>
          <form
            className=" flex flex-col px-8 pb-8 "
            id="calorieForm"
            onSubmit={handleFormSubmit}
          >
            <div className="form-control ">
              <label className="" htmlFor="height">
                Height:
              </label>

              {heightMetrics === "cm" ? (
                <>
                  <input
                    className="w-40 px-2"
                    onKeyDown={(evt) =>
                      ["e", "E", "+", "-"].includes(evt.key) &&
                      evt.preventDefault()
                    }
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        height: {
                          ...prev.height,
                          cmValue: Number(e.target.value),
                        },
                      }))
                    }
                    value={values.height.cmValue || ""}
                    type="number"
                    id="height"
                    placeholder="centimetres"
                  />
                </>
              ) : (
                <>
                  <input
                    className="w-24 px-2"
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        height: {
                          ...prev.height,
                          footValue: Number(e.target.value),
                        },
                      }))
                    }
                    value={values.height.footValue || ""}
                    type="number"
                    id="foot"
                    placeholder="feet"
                  />

                  <input
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        height: {
                          ...prev.height,
                          inchValue: Number(e.target.value),
                        },
                      }))
                    }
                    value={values.height.inchValue || ""}
                    className="w-24 px-2"
                    type="number"
                    id="inches"
                    placeholder="inches"
                  />
                </>
              )}

              <select
                value={values.height.metrics}
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    height: { ...prev.height, metrics: e.target.value },
                  }))
                }
                name=""
                id=""
              >
                <option value="feetAndInches">Feet/Inches</option>
                <option value="cm">cm</option>
              </select>
            </div>
            {/* weight */}
            <div className="form-control">
              <label htmlFor="weight">Weight</label>

              {weightMetrics === "kg" ? (
                <input
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      weight: {
                        ...prev.weight,
                        kgValue: Number(e.target.value),
                      },
                    }))
                  }
                  className="w-40 px-2"
                  type="number"
                  id="weight"
                  placeholder="kg"
                />
              ) : (
                <>
                  <input
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        weight: {
                          ...prev.weight,
                          stoneValue: Number(e.target.value),
                        },
                      }))
                    }
                    className="w-24 px-2"
                    placeholder="stone"
                    type="number"
                    id="stone"
                  />

                  <input
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        weight: {
                          ...prev.weight,
                          lbsValue: Number(e.target.value),
                        },
                      }))
                    }
                    className="w-24 px-2"
                    type="number"
                    id="lbs"
                    placeholder="lbs"
                  />
                </>
              )}
              <select
                value={values.weight.metrics}
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    weight: { ...prev.weight, metrics: e.target.value },
                  }))
                }
                name=""
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
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    age: Number(e.target.value),
                  }))
                }
                className="w-24 px-2"
                type="number"
                id="age"
                placeholder="Years"
              />
            </div>
            {/* sex */}
            <div className="form-control">
              <label htmlFor="sex">Sex</label>
              <select
                value={values.sex}
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    sex: e.target.value,
                  }))
                }
                name="sex"
                id="sex"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            {/* activity level */}
            <div className="form-control">
              <label htmlFor="activityLevel">Activity Level</label>
              <select
                value={values.activityLevel}
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    activityLevel: Number(e.target.value),
                  }))
                }
                name=""
                id=""
              >
                <option value={1.2}>Sedentry</option>
                <option value={1.375}>Lightly Active</option>
                <option value={1.55}>Moderatly Active</option>
                <option value={1.725}>Very Active</option>
                <option value={1.9}>Extra Active</option>
              </select>
            </div>
          </form>
          <section className="px-8">
            <h3 className=" mb-2">Activity Levels</h3>
            <div className=" text-base">
              <p className="mb-2">Sedentary: little or no exercise, desk job</p>
              <p className="mb-2">
                Lightly Active: light exercise or sports 1-3 days/week
              </p>
              <p className="mb-2">
                Moderatly Active: moderate exercise or sports 6-7 days/week
              </p>
              <p className="mb-2">
                Very Active: hard exercise every day, or exercising 2 times/day
              </p>
              <p className="mb-2">Sedentary: little or no exercise, desk job</p>
            </div>
          </section>

          <footer className=" w-full text-center absolute bottom-0">
            <button
              onClick={submitButtonHandler}
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
            Your daily estimated maintenence calories are: {maintenenceCalories}
          </p>
          <p>
            Your daily estimated calorie deficit is: {maintenenceCalories - 500}
          </p>
          <footer className=" w-full text-center absolute bottom-0">
            <button
              onClick={submitButtonHandler}
              type="submit"
              form="calorieForm"
            >
              Submit
            </button>
          </footer>
        </div>
      </div>
      {/* <footer className=" w-full text-center absolute bottom-0">
        <button onClick={submitButtonHandler} type="submit" form="calorieForm">
          Submit
        </button>
      </footer> */}
    </div>
  );
};

export default CalorieForm;
