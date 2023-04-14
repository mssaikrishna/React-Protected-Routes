import React from "react";
import { Route,useNavigate } from "react-router-dom";

const ProtectedRoute = ({ auth, component: Element, ...rest }) => {
    const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth){
            return <Element {...props} />;
        } 
        else{
            navigate("/", { replace: true })
            return null;
        }
      }}
    />
  );
};

export default ProtectedRoute;
