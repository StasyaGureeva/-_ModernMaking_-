import "./styles.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const ChoicePage2 = (props) => {
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
          textAlign: "left",
          marginLeft: "30%",
          height: "140px",
          width: "700px"
        }}
      >
        <div style={{ margin: "7%", marginBottom: "2%", fontSize: "28px" }}>
          <div> Кто вы?</div>
          <div
            style={{
              textAlign: "center",
              border: "2px solid #A8A8A8",
              width: "20%",
              borderRadius: "3px",
              fontSize: "22px",
              marginTop: "2%",
              marginRight: "4%",
              float: "left",
              padding: "1%"
            }}
          >
            один человек
          </div>

          <div
            style={{
              textAlign: "center",
              border: "2px solid #A8A8A8",
              width: "20%",
              borderRadius: "3px",
              fontSize: "22px",
              marginTop: "2%",
              marginRight: "4%",
              float: "left",
              padding: "1%"
            }}
          >
            влюбленная пара
          </div>
          <div
            style={{
              textAlign: "center",
              border: "2px solid #A8A8A8",
              width: "20%",
              borderRadius: "3px",
              fontSize: "22px",
              marginTop: "2%",
              marginRight: "4%",
              float: "left",
              padding: "1%"
            }}
          >
            семья с детьми
          </div>

          <div
            style={{
              textAlign: "center",
              backgroundColor: "#F7F993",
              width: "25%",
              borderRadius: "3px",
              fontSize: "22px",
              marginTop: "2%",
              marginRight: "4%",
              float: "left",
              padding: "1%"
            }}
          >
            молодежная группа
          </div>
          <div
            style={{
              textAlign: "center",
              border: "2px solid #A8A8A8",
              width: "30%",
              borderRadius: "3px",
              fontSize: "22px",
              marginTop: "2%",
              marginRight: "4%",
              float: "left",
              padding: "1%"
            }}
          >
            разновозрастная компания
          </div>

          <div
            style={{
              textAlign: "center",
              border: "2px solid #A8A8A8",
              width: "17%",
              borderRadius: "3px",
              fontSize: "22px",
              marginTop: "2%",
              marginRight: "4%",
              float: "left",
              padding: "1%"
            }}
          >
            группа детей
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "60px",
          display: "block",
          width: "7%",
          float: "left",
          margin: "3%",
          fontSize: "28px",
          padding: "0px",
          marginLeft: "35%"
        }}
      >
        <input
          min="0"
          max="60"
          style={{ width: "50%", float: "left" }}
          type="number"
        />
        чел
      </div>

      <div
        style={{
          display: "block",
          width: "100%",
          margin: "3%",
          fontSize: "28px",
          marginLeft: "35%",
          marginTop: "12%",
          height: "50px"
        }}
      >
        <div style={{ float: "left" }}>Средний возраст в группе</div>
        <input
          min="0"
          max="60"
          style={{ width: "4%", float: "left" }}
          type="number"
        />
        <div style={{ float: "left" }}> лет</div>
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
          onClick={routeChange}
          style={{
            background: "#83D25D",
            width: "150px",
            padding: "12px",
            marginBottom: "30%",
            marginTop: "5%",
            float: "right",
            fontSize: "22px",
            borderRadius: "2px",
            color: "#415C48",
            cursor: "pointer"
          }}
        >
          Далее
        </div>

        <div
          onClick={routeChange}
          style={{
            background: "#D7D7D7",
            width: "150px",
            padding: "12px",
            marginTop: "1%",
            marginBottom: "30%",
            marginTop: "5%",
            float: "right",
            fontSize: "22px",
            borderRadius: "2px",
            color: "#415C48",
            cursor: "pointer"
          }}
        >
          Пропустить
        </div>
      </div>
    </div>
  );
};

export default ChoicePage2;
