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
      {/* 3times */}

      {EffeciencyData.map((item) => (
        <div
          style={{
            width: "312px",
            height: "95px",
            padding: "10px",
            borderRadius: "16px",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "8px",
            }}
          >
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: "36px",
                    letterSpacing: "0%",
                    verticalAlign: "middle",
                    color: "#000000",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: "22px",
                    letterSpacing: "0%",
                    verticalAlign: "middle",
                  }}
                >
                  {item.percentage}
                </div>
              </span>
            </div>
            <div
              style={{
                width: "50%",
                color: `${item.progressBarColor}`,
              }}
            >
              Progressbar
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Effeciency;
