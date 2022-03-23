import { Avatar, Grid } from "@mui/material";
import React from "react";
import "./NavBar.css";
import fblogo from "../../images/logo.png";
import home from "../../images/home.svg";
import page from "../../images/pages.svg";
import watch from "../../images/watch.svg";
import market from "../../images/market.svg";
import group from "../../images/groups.svg";

const NavBar = () => {
  return (
    <div>
      <Grid container className="navbar__main">
        <Grid item xs={3}>
          <div className="navbar__leftbar">
            <img
              className="navbar__logo"
              width="40px"
              src={fblogo}
              alt="logo"
            />
            <input
              className="navbar__search"
              type="text"
              placeholder="Search Facebook"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="navbar__container">
            <div className="navbar__tabs active">
              <img src={home} height="35px" width="35px" />
            </div>
            <div className="navbar__tabs">
              <img src={page} height="35px" width="35px" />
            </div>
            <div className="navbar__tabs">
              <img src={watch} height="35px" width="35px" />
            </div>
            <div className="navbar__tabs">
              <img src={market} height="35px" width="35px" />
            </div>
            <div className="navbar__tabs">
              <img src={group} height="35px" width="35px" />
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="navbar__right">
            <div className="navbar__righttab">
              <Avatar className="navbar__rightimg" src="https://scontent.flux1-1.fna.fbcdn.net/v/t1.6435-1/163642912_108109928033012_4168255610408574910_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=FAS20fcs1MUAX9fycZL&_nc_ht=scontent.flux1-1.fna&oh=00_AT_BXPNIr9yPSl6ivl0jHRaj0029x26g-pC-YefldCO_cQ&oe=62619534" />
              <div className="navbar__profilname">Asım</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NavBar;
