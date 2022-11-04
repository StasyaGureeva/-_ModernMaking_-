import "./styles.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const ChoicePage6 = (props) => {
  return (
    <div className="App">
      <div
        style={{
          display: "block",
          margin: "auto",
          height: "100px",
          width: "700px"
        }}
      >
        <div style={{ margin: "7%", marginBottom: "2%", fontSize: "28px" }}>
          Откуда начать маршрут
        </div>
        <div>
          {" "}
          <div
            style={{
              margin: "3%",
              marginTop: "1%",
              fontSize: "28px",
              backgroundColor: "#DDDDDD",
              float: "left",
              padding: "10px"
            }}
          >
            Центральный вход
          </div>
          <div
            style={{
              margin: "3%",
              marginTop: "1%",
              fontSize: "28px",
              float: "left",
              backgroundColor: "#F7F993",
              padding: "10px"
            }}
          >
            С учетом транспорта
          </div>{" "}
        </div>
        <div
          style={{
            margin: "7%",
            marginBottom: "2%",
            fontSize: "28px"
          }}
        >
          <div> Способ передвижения по ВДНХ</div>

          <div
            style={{
              textAlign: "left",
              fontSize: "20px",
              width: "400px",
              lineHeight: "50px"
            }}
          >
            <input type="radio" />
            Пешком
          </div>
          <div style={{ textAlign: "left", fontSize: "20px", float: "left" }}>
            <input type="radio" />
            Велосипед
            <div
              style={{
                backgroundColor: "#1D2ECD",
                fontSize: "16px",
                float: "right",
                padding: "2px",
                paddingLeft: "7px",
                paddingRight: "7px",
                color: "white",
                borderRadius: "2px"
              }}
            >
              АРЕНДОВАТЬ
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "block",
          width: "100%",
          margin: "3%",
          fontSize: "28px",
          marginLeft: "35%",
          marginTop: "12%",
          height: "10px"
        }}
      >
        <div style={{ float: "left" }}>Максимальная длина маршрута</div>
        <input
          min="0"
          max="60"
          style={{ width: "4%", float: "left" }}
          type="number"
        />
        <div style={{ float: "left" }}> км</div>
      </div>

      <div
        style={{
          display: "block",
          width: "100%",
          margin: "3%",
          fontSize: "28px",
          marginLeft: "35%",
          marginTop: "5%",
          height: "50px"
        }}
      >
        <div style={{ float: "left" }}>Минимальная длина маршрута</div>
        <input
          min="0"
          max="60"
          style={{ width: "4%", float: "left" }}
          type="number"
        />
        <div style={{ float: "left" }}> км</div>
      </div>

      <div
        style={{
          display: "block",
          width: "100%",
          margin: "3%",
          fontSize: "28px",
          marginLeft: "35%",
          marginTop: "2%",
          height: "50px"
        }}
      >
        <div style={{ float: "left" }}>Темп прогулки</div>
        <input
          min="0"
          max="60"
          style={{ width: "4%", float: "left" }}
          type="number"
        />
        <div style={{ float: "left" }}> км/мин</div>
      </div>
      <div
        style={{
          height: "100px",
          width: "800px",
          marginTop: "3%",
          marginLeft: "20%"
        }}
      >
        <div
          style={{
            background: "#83D25D",
            width: "150px",
            padding: "12px",
            marginBottom: "30%",
            marginTop: "0%",
            float: "right",
            fontSize: "22px",
            borderRadius: "2px",
            color: "#415C48",
            cursor: "pointer"
          }}
        >
          Далее
        </div>
      </div>
    </div>
  );
};

export default ChoicePage6;
