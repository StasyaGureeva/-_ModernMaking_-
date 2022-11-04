import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChoicePage from "./ChoicePage";
import { useNavigate } from "react-router-dom";

const App = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `expenses`;
    navigate(path);
  };
  return (
    <div className="App">
      <div
        style={{
          display: "block",
          margin: "auto",
          height: "300px",
          width: "700px"
        }}
      >
        <div
          style={{
            background: "#F9F9F9",
            borderRadius: "4px",
            boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.15)",
            width: "37%",
            padding: "5%",
            marginRight: "0%",
            float: "left",
            fontSize: "24px",
            lineHeight: "38px",
            marginTop: "10%"
          }}
        >
          Выбрать из существующих экскурсий
          <input
            type="checkbox"
            style={{
              width: "35px",
              height: "35px",
              clipPath: "circle(46% at 50% 50%)",
              backgroundColor: "#D9D9D9",
              float: "right"
            }}
          />
        </div>
        <div
          style={{
            background: "#F9F9F9",
            borderRadius: "4px",
            boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.15)",
            width: "37%",
            padding: "5%",
            marginLeft: "0%",
            float: "right",
            fontSize: "24px",
            lineHeight: "38px",
            marginTop: "10%"
          }}
        >
          Создать индивидуальный маршрут
          <input
            type="checkbox"
            style={{
              width: "35px",
              height: "35px",
              clipPath: "circle(46% at 50% 50%)",
              backgroundColor: "#D9D9D9",
              float: "right"
            }}
          />
        </div>
      </div>
      <div
        style={{
          width: "50%",
          height: "80px",
          marginLeft: "42%"
        }}
      >
        <div class="container">
          <div
            class="checkbox"
            style={{
              float: "left",

              padding: "0px",
              width: "40%"
            }}
          >
            <input type="checkbox" id="checkbox" name="" value="" />
            <label for="checkbox">
              <span>Бесплатный</span>
            </label>
          </div>
        </div>
        <div class="container">
          <div
            class="checkbox"
            style={{
              float: "left",
              padding: "0px",
              width: "40%"
            }}
          >
            <input type="checkbox" id="checkbox2" name="" value="" />
            <label for="checkbox2">
              <span>Платный (возможно посещение платных павильонов)</span>
            </label>
          </div>
        </div>
      </div>
      <div
        onClick={routeChange}
        style={{
          background: "#83D25D",
          width: "170px",
          padding: "1%",
          paddingTop: "1%",
          paddingBottom: "1%",
          margin: "12%",
          marginTop: "3%",
          float: "right",
          fontSize: "28px",
          borderRadius: "2px",
          color: "#159650",
          cursor: "pointer"
        }}
      >
        Далее
      </div>
    </div>
  );
};

export default App;
