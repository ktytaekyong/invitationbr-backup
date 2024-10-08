/* Import */
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* Component */
import Header from "./components/common/Header";
import View from "./components/page/View";
/* Css */
import "./css/App.scss";
/* Src */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <View />
        <Routes>
          <Route path="/" element={<></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
