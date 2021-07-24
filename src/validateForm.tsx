export default function validateForm(values: { [n: string]: number | string }) {
  const { cm, foot, kg, stone, heightMetrics, weightMetrics, age, sex } =
    values;

  let errors: { [n: string]: string } = {};
  //Feet
  if (heightMetrics === "feetAndInches" && foot <= 0) {
    errors.foot = "Required";
  }
  //cm
  if (heightMetrics === "cm" && cm <= 0) {
    errors.cm = "Required";
  }
  //stone
  if (weightMetrics === "stoneAndPounds" && stone <= 0) {
    errors.stone = "Required";
  }
  //kg
  if (weightMetrics === "kg" && kg <= 0) {
    errors.kg = "Required";
  }
  //age
  if (age <= 0) {
    errors.age = "Required";
  }
  //sex
  if (sex <= 0) {
    errors.sex = "Required";
  }

  return errors;
}
