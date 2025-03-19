import React from "react";

function Effeciency() {
  const EffeciencyData = [
    {
      id: 1,
      title: "Effeciency",
      percentage: "92.4%",
      progressBarColor: "#252C58",
    },
    {
      id: 2,
      title: "Activity",
      percentage: "94.7%",
      progressBarColor: "#FFAB00",
    },
    {
      id: 3,
      title: "Total Working",
      percentage: "94.7%",
      progressBarColor: "#00A76F",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {" "}
      {EffeciencyData.map((item) => (
        <div
          style={{
            width: "312px",
            height: "95px",
            padding: "10px",
            borderRadius: "16px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "100px",
          }}
        >
          <div
            style={{
              width: "92px",
              height: "58px",
              top: "18px",
              left: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "3px",
              marginLeft: "16px",
            }}
          >
            <span
              style={{
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "18px",
                letterSpacing: "0%",
                verticalAlign: "middle",
              }}
            >
              {item.title}
            </span>
            <span
              style={{
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "22px",
                letterSpacing: "0%",
                verticalAlign: "middle",
              }}
            >
              {item.percentage}
            </span>
          </div>
          <div
            style={{
              width: "86px",
              height: "87px",
              top: "3px",
              left: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color:  `${item.progressBarColor}`,
            }}
          >
            Circle
          </div>
        </div>
      ))}
    </div>
  );
}

export default Effeciency;
