import React from "react";
import classes from "./ActivityLevels.module.scss";

type Props = {
  show: boolean;
  height: any;
};

const ActivityLevels: React.FC<Props> = ({ show, height }) => {
  return (
    <section className={`${classes.activityLevels}`} style={{ height: height }}>
      <h2 className="">Activity Levels</h2>
      <div className={classes.activityInfo}>
        <p className="">
          <span className={classes.activityLabel}>Sedentary</span> Little or no
          exercise, desk job.
        </p>
        <p className="">
          <span className={classes.activityLabel}>Lightly Active</span> Light
          exercise or sports 1-3 days/week.
        </p>
        <p className="">
          <span className={classes.activityLabel}>Moderately Active</span>{" "}
          Moderate exercise or sports 6-7 days/week.
        </p>
        <p className="">
          <span className={classes.activityLabel}> Very Active</span> Hard
          exercise every day, or exercising 2 times/day.
        </p>
        <p className="">
          <span className={classes.activityLabel}>Extra Active</span>
          Very hard exercise/sports and physical job or train twice daily.
        </p>
      </div>
    </section>
  );
};

export default ActivityLevels;
