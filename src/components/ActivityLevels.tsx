import React from "react";
import classes from "./ActivityLevels.module.scss";

type Props = {
  show: boolean;
  height: any;
};

const ActivityLevels: React.FC<Props> = ({ show, height }) => {
  return (
    <section className={`${classes.activityLevels}`} style={{ height: height }}>
      <h3 className="">Activity Levels</h3>
      <div className="">
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
  );
};

export default ActivityLevels;
