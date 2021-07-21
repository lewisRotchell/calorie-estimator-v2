import React, { useState } from "react";

const CalorieForm = () => {
  type FormState = {
    height: {
      cmValue: number | string;
      footValue: number | string;
      inchValue: number | string;
      metrics: string;
    };
    weight: {
      weightValue: number | string;
      metrics: string;
    };
    age: number | string;
    sex: string;
    activityLevel: number;
  };

  const [values, setValues] = useState<FormState>({
    height: {
      cmValue: "",
      footValue: "",
      inchValue: "",
      metrics: "feetAndInches",
    },
    weight: {
      weightValue: "",
      metrics: "stoneAndPounds",
    },
    age: "",
    sex: "male",
    activityLevel: 1.55,
  });

  const {
    age,
    sex,
    activityLevel,
    height: { cmValue, footValue, inchValue, metrics: heightMetrics },
    weight: { weightValue, metrics: weightMetrics },
  } = values;

  console.log(values);

  const convertToKg = () => {};

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // if(sex==='male'){

    // }
    console.log(values);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="height">Height</label>

        {heightMetrics === "cm" ? (
          <input
            onChange={(e) =>
              setValues((prev) => ({
                ...prev,
                height: { ...prev.height, cmValue: Number(e.target.value) },
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
          <option value="feetAndInches">Feet.Inches</option>
          <option value="cm">cm</option>
        </select>
      </div>
      {/* weight */}
      <div>
        <label htmlFor="weight">Weight</label>

        <input
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              weight: { ...prev.weight, weightValue: Number(e.target.value) },
            }))
          }
          type="number"
          id="weight"
        />
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
          <option value="stoneAndPounds">Stone.lbs</option>
          <option value="kg">KG</option>
        </select>
      </div>
      {/* Age */}
      <div>
        <label htmlFor="age">Age</label>
        <input
          onChange={(e) =>
            setValues((prev) => ({
              ...prev,
              age: e.target.value,
            }))
          }
          type="number"
          id="age"
        />
        <span>years</span>
      </div>
      {/* sex */}
      <div>
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
      <div>
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
      <button>Submit</button>
    </form>
  );
};

export default CalorieForm;
