import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import * as Style from "./style";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "./../Redux/actions/user";

const useStyles = makeStyles({
  logo: {
    maxWidth: 50,
  },
});

function Header() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoggedin(auth.isAuthenticated);
  }, [auth.isAuthenticated]);

  const handleMenuButtonClick = (e) => {
    const id = e.currentTarget.id;
    switch (id) {
      case "logout":
        setIsLoggedin(false);
        dispatch(logOutUser());
        break;
      default:
        window.location.href = `/${id}`;
    }
  };

  return (
    <Style.AppBarRoot position="static">
      <Toolbar>
        <img
          alt="logo"
          className={classes.logo}
          src="https://media-exp1.licdn.com/dms/image/C4E0BAQGW7EBSXhsu7A/company-logo_200_200/0/1606160431673?e=1629331200&v=beta&t=902CZhEab-JGT5Ap0B2mG5J8AHnHrUegW0PeLF01DL4"
        />
        <Typography variant="h6" style={{ flex: 1 }}>
          Welcome to Moovex
        </Typography>
        {isLoggedin ? (
          <Style.AppHeaderNav>
            <Button id="logout" color="inherit" onClick={handleMenuButtonClick}>
              Logout
            </Button>
          </Style.AppHeaderNav>
        ) : (
          <>
            <Button id="" color="inherit" onClick={handleMenuButtonClick}>
              Register
            </Button>
            <Button id="login" color="inherit" onClick={handleMenuButtonClick}>
              Login
            </Button>
          </>
        )}
      </Toolbar>
    </Style.AppBarRoot>
  );
}

export default Header;
