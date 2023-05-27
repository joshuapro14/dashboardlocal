import React from "react";
import { DoubleBarChart } from "../../../components/charts/DoubleBarChart";
import { format } from "date-fns";
import Style from "./revenue.module.css";

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

const RevenueChart = ({ revenue, totalRevenue }) => {
  const dataset1 = {
    label: `${totalRevenue.direct} Direct`,
    data: revenue.map((r) => r.direct),
    backgroundColor: "#38BDF8"
  };

  const dataset2 = {
    label: `${totalRevenue.indirect} Indirect`,
    data: revenue.map((r) => r.indirect),
    backgroundColor: "#6366F1"
  };

  const labels = revenue.map((r) => format(new Date(r.month), "MMM yy"));

  return (
    <div className={Style.chartBox}>
      <div className={Style.chartLegendBox}>
        <span className={Style.singleLegendBox}>
          <span className={Style.violetCircle}></span>
          <span className={Style.legendValue}>{totalRevenue.direct}</span>
          <span className={Style.legendCat}>Direct</span>
        </span>

        <span className={Style.singleLegendBox}>
          <span className={Style.blueCircle}></span>
          <span className={Style.legendValue}>{totalRevenue.indirect}</span>
          <span className={Style.legendCat}>Indirect</span>
        </span>
      </div>
      <DoubleBarChart
        dataset1={dataset1}
        dataset2={dataset2}
        labels={labels}
        options={DEFAULT_OPTION}
      />
    </div>
  );
};

export default RevenueChart;
