import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      beginAtZero: true,
      ticks: {
        maxTicksLimit: 5,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Market Growth over 6 Years",
    },
    tooltip: {
      enabled: false,
    },
  },
};

export const MarketGrowthChart: React.FC<{ data: any, reloadChart:any }> = ({ data = {}, reloadChart }) => {
  const sortedData = useMemo(() => {
    return Object?.keys(data ?? {})?.sort(
      (a: any, b: any) => data[a].year - data[b].year
    );
  }, [data]);

  const chartData = useMemo(
    () => ({
      labels: sortedData.map((key) => data[key]?.year),
      datasets: [
        {
          label: "",
          data: sortedData.map((key) => data[key]?.amount),
          backgroundColor: "#9AE179",
          borderColor: "#9AE179",
          borderWidth: 1,
        },
      ],
    }),
    [data]
  );
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Bar className={`${reloadChart?"":""}`} data={chartData} options={options} />
    </div>
  );
};
