import React, { useContext } from "react";
import {
  Route,
  Redirect
} from "react-router-dom";
import { myContext } from "../../../App";

const PrivateAdminRoute = ({ children, ...rest }) => {
  const { isAdminState } = useContext(myContext);
  const [isAdmin] = isAdminState;
    return (
      <Route
        {...rest}
        render={({ location }) =>
        isAdmin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateAdminRoute;