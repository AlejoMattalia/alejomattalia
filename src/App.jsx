import "./style/App.scss";
import { Home } from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HistoryContainer } from "./components/history/HistoryContainer.jsx";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history/:id" element={<HistoryContainer />} />
          <Route path="*" element={<h1>404 found</h1>} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
