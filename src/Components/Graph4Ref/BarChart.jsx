import "./BarChart.css";
import {
  Chart as ChartJS,
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  BarElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const productivityData = {
    labels: [
      "9AM",
      "10AM",
      "11AM",
      "12PM",
      "1PM",
      "2PM",
      "3PM",
      "4PM",
      "5PM",
      "6PM",
      "7PM",
      "8PM",
    ],
    datasets: [
      {
        label: "Productive",
        data: [95, 80, 75, 90, 85, 80, 75, 70, 70, 70, 65, 60],
        backgroundColor: "#F47B3E", // Orange
        stack: "Stack 0",
      },
      {
        label: "Unproductive",
        data: [5, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "#D32F2F", // Red
        stack: "Stack 0",
      },
      {
        label: "Idle",
        data: [0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "#FBC02D", // Yellow
        stack: "Stack 0",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`,
        },
        title: {
          display: true,
          text: "Percentage",
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
  };

  return (
    <div className="chart-container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2>Productivity Bar</h2>
        <ol
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            listStyle: "none",
          }}
        >
          <li>
            <span style={{ color: "#F47B3E" }}>●</span> Productive
          </li>
          <li>
            <span style={{ color: "#D32F2F" }}>●</span> Unproductive
          </li>
          <li>
            <span style={{ color: "#FBC02D" }}>●</span> Idle
          </li>
        </ol>
      </div>
      {/* Wrap Bar component in a div with custom dimensions */}
      <div style={{ width: "500px", height: "300px" }}>
        <Bar data={productivityData} options={options} />
      </div>
    </div>
  );
}

export default BarChart;
