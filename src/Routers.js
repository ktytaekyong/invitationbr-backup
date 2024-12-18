/* Import */
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
/* Component */
import Header from "./components/common/Header";
import HeaderPreview from "./components/common/HeaderPreview";
import View from "./components/page/View";
import Main from "./components/main/Main";
import Management from "./components/page/Management";
import SubHeader from "./components/sub/SubHeader";

const Routers = () => {
  const location = useLocation();

  return (
    <Routes>
      {/* Main Route */}
      <Route path="/" element={<Navigate to="/Produce" replace />} />

      {/* Produce Route */}
      <Route
        path="/Produce"
        element={
          <>
            {location.pathname === "/Produce/Preview" ? (
              <HeaderPreview />
            ) : (
              <Header />
            )}
            <View />
          </>
        }
      >
        <Route 
          path="Preview" 
          element={
            <>
              <View />
            </>
          } 
        />
      </Route>
      <Route
        path="/Manager"
        element={
          <>
            <SubHeader />
            <Management />
          </>
        }
      ></Route>
    </Routes>
  );
};

export default Routers;
