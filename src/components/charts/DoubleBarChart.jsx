import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      align: "start",
      labels: {
        usePointStyle: true,
        boxWidth: 6,
        padding: 10,
        textAlign: "center"
      }
    }
  }
};

const DEFAULT_OPTIONS = {
  responsive: false
};

const DATASET1_OPTION = {
  backgroundColor: "#38BDF8"
};

const DATASET2_OPTION = {
  borderColor: "#6366F1"
};

export const DoubleBarChart = ({
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

  console.log("datasets[0]", datasets[0]);
  console.log("datasets[1]", datasets[1]);

  const charData = {
    labels,
    datasets
  };

  return <Bar options={options || DEFAULT_OPTIONS} data={charData} />;
};
