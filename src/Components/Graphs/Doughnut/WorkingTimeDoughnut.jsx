import React, { memo } from "react";
import ReactApexChart from "react-apexcharts";
import "./WorkingGraph.scss";

 const TIME_DATA = {
  series: [75, 20, 5],
  labels: ["At Desk", "Idle", "Offline"],
  colors: ["#4F45B6", "#F8C140", "#F58869"],
  percentages: ["75%", "20%", "05%"],
};

const CHART_HEIGHT = {
  default: 150,
  mobile: 150,
};

const WorkingTimeDonut = () => {
  const chartConfig = {
    series: TIME_DATA.series,
    options: {
      chart: {
        type: "donut",
        height: CHART_HEIGHT.default,
        sparkline: { enabled: true },
      },
      colors: TIME_DATA.colors,
      labels: TIME_DATA.labels,
      plotOptions: {
        pie: {
          donut: {
            size: "70%",
            labels: {
              show: true,
              name: { show: false },
              value: { show: false },
              total: {
                show: true,
                label: "",
                fontSize: "20px",
                fontWeight: 600,
                color: "#333333",
                formatter: () => "100%",
              },
            },
          },
        },
      },
      dataLabels: { enabled: false },
      stroke: { width: 0 },
      legend: { show: false },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: { height: CHART_HEIGHT.mobile },
          },
        },
      ],
    },
  };

   const legendItems = TIME_DATA.labels.map((label, index) => ({
    label,
    value: TIME_DATA.percentages[index],
    className: label.toLowerCase().replace(" ", "-"),
    key: `legend-${index}`,
  }));

  return (
    <div className="working-time-card">
      <h3 className="card-title">Total Working Time</h3>
      <div className="chart-wrapper">
        <ReactApexChart
          options={chartConfig.options}
          series={chartConfig.series}
          type="donut"
          height={CHART_HEIGHT.default}
        />
      </div>
      <div className="legend-container" style={{ paddingTop: 45 }}>
        {legendItems.map(({ key, className, label, value }) => (
          <div key={key} className="legend-item">
            <div className={`legend-marker ${className}`} />
            <span className="legend-label">{label}</span>
            <span className="legend-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(WorkingTimeDonut);
