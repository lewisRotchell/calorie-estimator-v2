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

    console.log(tdee);
    console.log(roundedTdee);

    setMaintenenceCalories(roundedTdee);
  };

  return (
    <div className="card">
      <header>
        <h1 className="text-xl">Calorie Estimator</h1>
      </header>
      <div className={`card-inner rounded bg-red-500  ${isFlipped && "flip"}`}>
        <div className="card-face">
          <form className="p-4" id="calorieForm" onSubmit={handleFormSubmit}>
            <div className="form-control">
              <label className="" htmlFor="height">
                Height:
              </label>

              {heightMetrics === "cm" ? (
                <input
                  className=""
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
                />
              ) : (
                <>
                  <input
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
                  />
                  <label>foot</label>
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
                    type="number"
                    id="inches"
                  />
                  <label>inches</label>
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
                  type="number"
                  id="weight"
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
                    type="number"
                    id="stone"
                  />
                  <label htmlFor="stone">Stone</label>

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
                    type="number"
                    id="lbs"
                  />
                  <label htmlFor="lbs">Lbs</label>
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
                type="number"
                id="age"
              />
              <span>years</span>
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
        </div>

        <div className="card-face card-back p-4 ">
          <p>
            Your daily estimated maintenence calories are: {maintenenceCalories}
          </p>
          <p>
            Your daily estimated calorie deficit is: {maintenenceCalories - 500}
          </p>
        </div>
      </div>
      <footer className=" w-full text-center">
        <button onClick={submitButtonHandler} type="submit" form="calorieForm">
          Submit
        </button>
      </footer>
    </div>

    // Your daily estimated maintence calories are:

    //Your daily estimated claorie deficit is : (-500)
  );
};

export default CalorieForm;
