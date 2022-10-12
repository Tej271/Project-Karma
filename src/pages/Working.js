import React from "react";
import { Button } from "rsuite";
import WorkingPanel from "../components/WorkingPanel";
import { useNavigate } from "react-router-dom";

function Working() {
  const navigate = useNavigate();

  return (
    <div style={{}}>
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "5% 40% 5% 40%",
        }}
      >
        <h2>How it works</h2>
      </div>
      <div
        className="steps"
        style={{ fontSize: "24px", margin: "5%", textAlign: "center" }}
      >
        <WorkingPanel />
      </div>
      <div style={{ margin: "5%", textAlign: "center" }}>
        <Button
          type="submit"
          color="green"
          appearance="ghost"
          onClick={() => {
            navigate("/plans-and-pricing");
          }}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default Working;
