import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardPage from "./pages/CardPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/card/:id" element={<CardPage />} />
      </Routes>
    </div>
  );
}

export default App;
