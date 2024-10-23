/* Import */
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* Component */
import Header from "./components/common/Header";
import View from "./components/page/View";
/* Css */
import "./css/App.scss";
/* Context */
import ContextWrap from "./store/option-context-wrap";

function App() {
  return (
    <ContextWrap>
      <BrowserRouter>
        <div className="App">
          <Header />
          <View />
          <Routes>
            <Route path="/" element={<></>} />
          </Routes>
        </div>
      </BrowserRouter>
    </ContextWrap>
  );
}

export default App;
