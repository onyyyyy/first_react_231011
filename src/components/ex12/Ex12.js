import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sub01 } from "./pages/Sub01";
import { Sub02 } from "./pages/Sub02";
import { NotFoundPage } from "./pages/NotFoundPage";

export const Ex12 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sub01" element={<Sub01 />} />
        <Route path="/Sub02" element={<Sub02 />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
