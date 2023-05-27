import React, { memo } from "react";
import Style from "./valueBadge.module.css";

const OrangeBadge = memo(({ percent }) => {
  return (
    <span className={`${Style.percentBadge} ${Style.orangeBadge}`}>
      {Number(percent.toFixed(2))}%
    </span>
  );
});

const GreenBadge = memo(({ percent }) => {
  return (
    <span className={`${Style.percentBadge} ${Style.greenBadge}`}>
      +{Number(percent.toFixed(2))}%
    </span>
  );
});

const GreyBadge = memo(({ percent }) => {
  return (
    <span className={`${Style.percentBadge} ${Style.greyBadge}`}>
      {Number(percent.toFixed(2))}%
    </span>
  );
});

const PercentBadge = memo(({ percent }) => {
  if (percent > 0) {
    return <GreenBadge percent={percent} />;
  } else if (percent < 0) {
    return <OrangeBadge percent={percent} />;
  } else {
    return <GreyBadge percent={percent} />;
  }
});

export const ValueBadge = ({ value, percent }) => {
  return (
    <div className={Style.badgeBox}>
      <span className={Style.valBox}>{Number(value.toFixed(2))}</span>
      {percent && <PercentBadge percent={percent} />}
    </div>
  );
};
