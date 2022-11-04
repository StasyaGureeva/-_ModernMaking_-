import { useState } from "react";
import { toppings } from "./utils/toppings";
import { useNavigate } from "react-router-dom";

import "./styles.css";

const ChoicePage7 = (props) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/expenses5`;
    navigate(path);
  };
  return (
    <div className="App">
      <h3>Вы ранее были на ВДНХ (отметьте для всех участников)?</h3>
      <ul className="toppings-list">
        {toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input type="checkbox" name={name} value={name} />
                  <label>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <h3>Максимальные затраты на экскурсию (на одного человека в среднем)</h3>
      <input type="number" name="cost" /> рублей
      <h3>Наши интересы</h3>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body text-center">
            <label class="check">
              <input type="checkbox" />
              <span>Техника/IT</span>
            </label>
            <label class="check">
              <input type="checkbox" />
              <span>Наука</span>
            </label>

            <label class="check">
              <input type="checkbox" />
              <span>Музыка</span>
            </label>

            <label class="check">
              <input type="checkbox" />
              <span>Москва</span>
            </label>

            <label class="check">
              <input type="checkbox" />
              <span>Искусство</span>
            </label>

            <label class="check">
              <input type="checkbox" />
              <span>Спорт</span>
            </label>
          </div>
        </div>
      </div>
      <div class="button-group">
        <button type="button" class="btn btn-secondary" onClick={routeChange}>
          Пропустить
        </button>
        <button type="button" class="btn btn-success" onClick={routeChange}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default ChoicePage7;
