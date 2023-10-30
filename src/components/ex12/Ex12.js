import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Header } from "./components/Header";
import { Sub } from "./pages/Sub";

export const Ex12 = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sub/:id" element={<Sub />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
