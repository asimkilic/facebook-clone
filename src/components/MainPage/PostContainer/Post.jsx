import { Avatar, Paper } from "@mui/material";
import React from "react";
import "./PostContainer.css";
import post from "../../../images/post.jpeg";
import like from "../../../images/like.png";

const Post = () => {
  return (
    <div>
      <Paper className="post__container">
        {/* //NOTE: Header */}
        <div className="post__header">
          <div className="post__header__img">
            <Avatar
              className="post_img"
              src="https://scontent.flux1-1.fna.fbcdn.net/v/t1.6435-1/163642912_108109928033012_4168255610408574910_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=FAS20fcs1MUAX9fycZL&_nc_ht=scontent.flux1-1.fna&oh=00_AT_PBDGou3uTMSbbG6INWM4ZW5G3Vjo9kkz7Sq6_lPEx3w&oe=62619534"
            />
          </div>
          <div className="post__header__text">Asım KILIÇ</div>
        </div>
        {/* //NOTE: Description */}
        <div className="post__description">
            What goes around comes around.
        </div>
        {/* //NOTE: Image */}
        <div className="post_image">
            <img src={post} width="600px" alt="" />
        </div>
        {/* //NOTE:Like Count */}
        <div className="post_likeCountContainer">
            <div className="post__like">
                <img className="post__img" src={like} alt="" />
            </div>
            <div className="post__likecount">25</div>
        </div>
        {/* //NOTE: Like Share Box */}
        <div></div>
        {/* //NOTE:Comment Box */}
        <div></div>
      </Paper>
    </div>
  );
};

export default Post;
