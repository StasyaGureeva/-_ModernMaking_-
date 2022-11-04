import "./styles.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const ChoicePage5 = (props) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/expenses7`;
    navigate(path);
  };
  return (
    <div className="App">
      <div
        style={{
          display: "block",
          margin: "auto",
          marginTop: "13%",
          height: "140px",
          width: "300px",
          fontSize: "28px",
          lineHeight: "40px",
          marginBottom: "20%"
        }}
      >
        <div style={{ textAlign: "left" }}>Спасибо!</div>
        <div style={{ textAlign: "left" }}>
          Уже подбираем для вас оптимальный маршрут.
        </div>
        <div
          onClick={routeChange}
          style={{
            background: "#50F157",
            width: "150px",
            padding: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
            margin: "auto",
            fontSize: "24px",
            borderRadius: "2px",
            color: "#415C48",
            cursor: "pointer",
            marginTop: "16%"
          }}
        >
          Посмотреть→
        </div>
      </div>
    </div>
  );
};

export default ChoicePage5;
