/* Import */
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
/* Component */
import Header from "./components/common/Header";
import View from "./components/page/View";
/* Css */
import "./css/App.scss";
/* Context */
import ContextWrap from "./store/option-context-wrap";

// const ScrollToTop = () => {
//   const location = useLocation();
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [location.pathname]);
//   return null;
// };

function App() {
  return (
    <ContextWrap>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Header />
                </>
              } 
            />
            <Route 
              path="/Preview" 
              element={
                <>
                </>
              } 
            />
          </Routes>
          <View />
        </div>
      </BrowserRouter>
    </ContextWrap>
  );
}

export default App;
