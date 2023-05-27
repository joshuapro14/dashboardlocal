import React from "react";
import { DoubleLineChart } from "../../../components/charts/DoubleLineChar";
import Style from "./sales.module.css";

const DEFAULT_OPTION = {
  responsive: true,
  /* layout: {
    padding: {
      left: -5
    }
  }, */
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
        display: false
      }
    },
    y: {
      grid: {
        display: false
      },
      ticks: {
        display: false
      }
    }
  }
};

const SalesChart = ({ currentWeek, lastWeek }) => {
  const dataset1 = {
    label: "Current Week",
    data: currentWeek,
    pointBorderColor: "transparent",
    pointBoderWidth: 1
  };

  const dataset2 = {
    label: "Last Week",
    data: lastWeek,
    pointBorderColor: "transparent",
    pointBoderWidth: 1,
    lineWidth: 0.5
  };

  const labels = [currentWeek, lastWeek].reduce((acc, d) => {
    while (acc.length < d.length) {
      acc.push("");
    }
    return acc;
  }, []);

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

export default SalesChart;
