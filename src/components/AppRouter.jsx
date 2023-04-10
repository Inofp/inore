import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader/>
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
     
    </Routes>
  ) : (
    <Routes>  
      {publicRoutes.map((route) => (
        <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
         navigate("/login");
      </Routes>
  );
};

export default AppRouter;

//<Route path="/error" element={<Error />} />
