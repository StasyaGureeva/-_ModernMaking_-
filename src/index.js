import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChoicePage from "./ChoicePage";
import ChoicePage2 from "./ChoicePage2";
import ChoicePage5 from "./ChoicePage5";
import ChoicePage6 from "./ChoicePage6";
import ChoicePage7 from "./ChoicePage7";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<ChoicePage />} />
      <Route path="expenses2" element={<ChoicePage2 />} />
      <Route path="expenses5" element={<ChoicePage5 />} />
      <Route path="expenses6" element={<ChoicePage6 />} />
      <Route path="expenses7" element={<ChoicePage7 />} />
    </Routes>
  </BrowserRouter>
);
