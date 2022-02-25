import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import DrawerComponent from "./DrawerComponent";


const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
    display: "flex",
    alignItems: "center",
  },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
    alignItems: "center",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    color: "black",
  },
  link: {
    textDecoration: "none",
    color: "#000",
    fontSize: "17px",
    marginLeft: "10px",
    marginRight: theme.spacing(3),
    "&:hover": {
      color: "red",
      transition: "all 0.5s ease",
    },

  },
  imagestyle: {},
 [theme.breakpoints.up("sm")]:{
   link:{
     fontSize:"13px",
    
   }
  },
  [theme.breakpoints.down("md")]:{
link:{
  fontSize:"14px",
  marginLeft: "1px",
}
  },
  [theme.breakpoints.up("md")]:{
    link:{
      fontSize:"18px",
      marginLeft:"30px"
    }
  }

}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <AppBar position="static" elevation={0} className={classes.appbar}>
      <CssBaseline />
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <img src="https://static.wixstatic.com/media/78eca0_db1801071b2e475aaea6f7e37e463628~mv2.png/v1/fill/w_125,h_89,al_c,q_85/LogoF.webp"
          alt="logo"
          style={{ width: 100, marginRight: "auto" }}
        />
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <a href="#whatwedo" className={classes.link}>
              WHAT WE DO
            </a>
            <a href="#whyus" className={classes.link}>
              WHY US
            </a>

            <a href="#howitworks" className={classes.link}>
              HOW IT WORKS
            </a>

            <a href="#testimonials" className={classes.link}>
              TESTIMONIALS
            </a>

            <a href="#contact" className={classes.link}>
              CONTACT
            </a>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;