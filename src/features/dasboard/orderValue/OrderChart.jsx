import React from "react";
import { DoubleLineChart } from "../../../components/charts/DoubleLineChar";
import { subDays, format } from "date-fns";
import Style from "./orderValue.module.css";

const DEFAULT_OPTION = {
  responsive: true,

  plugins: {
    legend: false,
    customCanvasBackgroundColor: {
      color: "#F8FAFC"
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        display: true
      }
    },
    y: {
      grid: {
        display: true
      },
      ticks: {
        display: true
      }
    }
  }
};

const OrderChart = ({ current, previous }) => {
  const dataset1 = {
    label: "Current",
    data: current,
    pointBorderColor: "transparent",
    pointBoderWidth: 1
  };

  const dataset2 = {
    label: "Previous",
    data: previous,
    pointBorderColor: "transparent",
    pointBoderWidth: 1,
    lineWidth: 0.5
  };

  const labels = [current, previous].reduce((acc, d) => {
    if (d == null) return acc;
    while (acc.length < d.length) {
      acc.push("");
    }
    return acc;
  }, []);

  labels[0] = format(subDays(new Date(), 6), "do MMM");
  labels[labels.length - 1] = "TODAY";

  return (
    <div className={Style.chartBox}>
      <DoubleLineChart
        dataset1={dataset1}
        dataset2={dataset2}
        labels={labels}
        options={DEFAULT_OPTION}
      />
    </div>
  );
};

export default OrderChart;
