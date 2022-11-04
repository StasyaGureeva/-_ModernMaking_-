import "./styles.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const ChoicePage = (props) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/expenses6`;
    navigate(path);
  };
  let [isExpanded, setExpanded] = React.useState(false);
  const [divExpanded, setDivExpanded] = React.useState(false);
  return (
    <div className="App">
      <div
        style={{
          display: "block",
          margin: "auto",
          height: "140px",
          width: "700px"
        }}
      >
        <div style={{ margin: "7%", marginBottom: "2%", fontSize: "28px" }}>
          День посещения ВДНХ
        </div>
        <div style={{ marginLeft: "200px" }}>
          <div
            style={{
              backgroundColor: divExpanded ? "#DDDDDD" : "#F7F993",
              float: "left",
              fontSize: "25px",
              margin: "1%",
              padding: "2%",
              paddingTop: "1%",
              paddingBottom: "1%",
              borderRadius: "2px"
            }}
          >
            Сегодня
          </div>
          <div>
            <div
              onClick={() => {
                if (!divExpanded) setDivExpanded(true);
              }}
              style={{
                float: "left",
                cursor: "pointer",
                fontSize: "25px",
                margin: "1%",
                padding: "2%",
                paddingTop: "1%",
                paddingBottom: "1%",
                backgroundColor: divExpanded ? "#F7F993" : "#DDDDDD",
                borderRadius: "2px",
                position: "relative"
              }}
            >
              Завтра
              {divExpanded ? (
                <div
                  onClick={() => {
                    if (divExpanded == false) setDivExpanded(true);
                    else setDivExpanded(false);
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      borderRadius: "7px",
                      border: "20px solid transparent",
                      borderBottom: "20px solid #F8D8D8",
                      borderLeft: "20px solid #F8D8D8",
                      left: "45%",
                      bottom: "-100%"
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-230px",
                      left: "40px",
                      width: "400px",
                      height: "200px"
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#F8D8D8",
                        width: "300px",
                        padding: "4px",
                        borderRadius: "4px",
                        paddingTop: "4%"
                      }}
                    >
                      <img
                        height="20"
                        src="https://pngimg.com/uploads/exclamation_mark/exclamation_mark_PNG70.png"
                      />
                      Завтра сильный ветер
                      <div
                        style={{
                          fontSize: "22px",
                          backgroundColor: "#F9FAB3",
                          margin: "3px",
                          padding: "1%",
                          borderRadius: "2px"
                        }}
                      >
                        Выбрать другой день
                      </div>
                      <div
                        style={{
                          fontSize: "22px",
                          backgroundColor: "#D9D9D9",
                          margin: "3px",
                          padding: "1%",
                          borderRadius: "2px"
                        }}
                      >
                        Учесть в маршруте
                        <div style={{ fontSize: "12px" }}>
                          {" "}
                          меньше проводить время на улице
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: "22px",
                          backgroundColor: "#D9D9D9",
                          margin: "3px",
                          padding: "1%",
                          borderRadius: "2px"
                        }}
                      >
                        Не важно
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div
            style={{
              float: "left",
              cursor: "pointer",
              fontSize: "17px",
              margin: "1%",
              paddingLeft: "5%",
              paddingRight: "5%",
              paddingTop: "1.5%",
              paddingBottom: "1.5%",
              backgroundColor: "#DDDDDD",
              borderRadius: "7px"
            }}
          >
            <input
              min="0"
              max="60"
              style={{
                margin: "0px",
                fontSize: "18px",
                backgroundColor: "#DDDDDD",
                border: "none"
              }}
              type="date"
            />
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            fontSize: "28px",
            display: "block",
            margin: "auto",
            height: "50px",
            width: "500px"
          }}
        >
          Длительность экскурсии
        </div>
        <div style={{ width: "40%", marginLeft: "700px" }}>
          <div
            style={{
              float: "left",
              padding: "0px",
              margin: "1%",
              width: "10%"
            }}
          >
            <input
              min="0"
              style={{
                width: "70%"
              }}
              type="number"
            />
            ч
          </div>
          <div
            style={{
              float: "left",
              padding: "0px",
              width: "12%",
              margin: "1%"
            }}
          >
            <input
              style={{ margin: "0px", width: "60%" }}
              type="number"
              min="0"
            />
            мин
          </div>
        </div>

        <div
          style={{
            marginTop: "6%",
            paddingBottom: "0px"
          }}
        >
          <div
            style={{
              fontSize: "28px",
              display: "block",
              margin: "auto",
              height: "50px",
              width: "500px",
              marginBottom: "0%"
            }}
          >
            Примерное время начала прогулки
          </div>
          <div style={{ width: "50%", marginLeft: "700px" }}>
            <div
              style={{
                float: "left",
                padding: "0px",
                margin: "1%",
                width: "10%"
              }}
            >
              <input
                min="0"
                max="23"
                style={{
                  width: "70%"
                }}
                type="number"
              />
              <div style={{ fontSize: "28px", float: "right" }}> :</div>
            </div>
            <div
              style={{
                float: "left",
                padding: "0px",
                width: "12%",
                margin: "1%"
              }}
            >
              <input
                min="0"
                max="60"
                style={{ margin: "0px", width: "60%" }}
                type="number"
              />
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "6%",
            paddingBottom: "0px"
          }}
        >
          <div
            style={{
              padding: "0px",
              fontSize: "28px",
              display: "block",
              margin: "auto",
              height: "50px",
              width: "500px",
              marginBottom: "0%"
            }}
          >
            Примерное время окончания прогулки
          </div>
          <div style={{ width: "50%", marginLeft: "700px" }}>
            <div
              style={{
                float: "left",
                padding: "0px",
                margin: "1%",
                width: "10%"
              }}
            >
              <input
                min="0"
                max="23"
                style={{
                  width: "70%"
                }}
                type="number"
              />
              <div style={{ fontSize: "28px", float: "right" }}> :</div>
            </div>
            <div
              style={{
                float: "left",
                padding: "0px",
                width: "12%",
                margin: "1%"
              }}
            >
              <input
                min="0"
                max="60"
                style={{ margin: "0px", width: "60%" }}
                type="number"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "100px",
          width: "800px",
          marginTop: "3%",
          marginLeft: "17%"
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
      </div>
    </div>
  );
};

export default ChoicePage;
