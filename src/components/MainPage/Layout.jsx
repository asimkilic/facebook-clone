import { Grid } from "@mui/material";
import React from "react";
import LeftSide from "./LeftSidePanel/LeftSide";
import "./Mainpage.css";
import PostContainer from "./PostContainer/PostContainer";
import StatusBar from "./StatusBar/StatusBar";
import UploadSection from "./UploadSection/UploadSection";
const Layout = () => {
  return (
    <div className="mainpage__container">
      <Grid container>
        <Grid item xs={3}>
          <LeftSide />
        </Grid>
        <Grid item xs={6} className="middleContainer">
          <StatusBar />
          <UploadSection />
          <PostContainer />
        </Grid>
        <Grid item xs={3}>
          RIGHT
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
