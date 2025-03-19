import "./ProductionInPercentile.scss";
import { MdOutlineTrendingUp } from "react-icons/md";

function ProductionInPercentile() {
  return (
    <div className="production-in-percentile">
      <div className="ppercentile-details">
        <div className="icon-content-percentile">
          <div>
            <span id="productivity-icon" class="material-symbols-outlined">
              avg_time
            </span>
          </div>
          <div className="ppercentile-content">Productive</div>
        </div>
        <div
          style={{
            paddingTop: "25px",
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "100%",
            letterSpacing: "0px",
            color: "#FFAB00",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          30%
        </div>
        <div>
          <div
            style={{
              fontFamily: "Lexend",
              fontWeight: 300,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0px",
              paddingTop: "24px",
              color: "#252C58",
            }}
          >
            Lorem ipsum
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <div>
              <MdOutlineTrendingUp id="trend-arrow-up" />
            </div>
            <div
              className="ppercentile-content-1"
              style={{
                color: "#252C58",
                fontFamily: "Lexend",
                fontWeight: 300,
                fontSize: "12px",
                lineHeight: "100%",
                letterSpacing: "0px",
              }}
            >
              -10% Less than yesterday
            </div>
          </div>
        </div>
      </div>
      <div className="ppercentile-charts">Bar Chart Symbol</div>
    </div>
  );
}

export default ProductionInPercentile;
