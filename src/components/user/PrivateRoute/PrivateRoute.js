import React, { useContext } from "react";
import {
  Route,
  Redirect
} from "react-router-dom";
import { myContext } from "../../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const { userInfoState } = useContext(myContext);
  const [userInfo] = userInfoState;
    const { email } = userInfo;
    return (
      <Route
        {...rest}
        render={({ location }) =>
        email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;