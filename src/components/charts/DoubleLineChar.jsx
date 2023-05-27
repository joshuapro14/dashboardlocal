import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
  // Title,
  // Tooltip,
  // Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
  // Title,
  // Tooltip,
  // Legend
);

const DATASET1_OPTION = {
  backgroundColor: "rgba(59, 130, 246, 0.08)",
  borderColor: "#6366F1",
  fill: true,
  tension: 0,
  pointStyle: "line"
};

const DATASET2_OPTION = {
  borderColor: "#CBD5E1",
  backgroundColor: "transparent",
  fill: false,
  tension: 0,
  pointStyle: "line"
};

const DEFAULT_OPTIONS = {
  responsive: false
};
//

export const DoubleLineChart = ({
  dataset1,
  dataset2,
  labels = [],
  options
}) => {
  if (dataset1 == null && dataset2 == null) return;
  const datasets = [dataset1, dataset2].filter((ds) => ds != null);

  datasets[0] = {
    ...DATASET1_OPTION,
    ...datasets[0]
  };

  if (datasets[1] != null) {
    datasets[1] = {
      ...DATASET2_OPTION,
      ...datasets[1]
    };
  }

  const charData = {
    labels,
    datasets
  };

  return <Line options={options || DEFAULT_OPTIONS} data={charData} />;
};
