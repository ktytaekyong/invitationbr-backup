/* Import */
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* Component */
import Header from "./components/common/Header";
/* Css */
import "./css/App.css";
/* Src */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
