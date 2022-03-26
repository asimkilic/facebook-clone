import { Avatar, Paper } from '@mui/material';
import React from 'react'
import './UploadSection.css';
import live from "../../../images/video.png";
import image from "../../../images/image.png";
import feeling from "../../../images/feelings.png";

const UploadSection = () => {
  return (
    <div>
      <Paper className="upload__container">
        <div className="upload__top">
          <div>
            <Avatar
              className="upload__img"
              src="https://scontent.flux1-1.fna.fbcdn.net/v/t1.6435-1/163642912_108109928033012_4168255610408574910_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=FAS20fcs1MUAX9fycZL&_nc_ht=scontent.flux1-1.fna&oh=00_AT_PBDGou3uTMSbbG6INWM4ZW5G3Vjo9kkz7Sq6_lPEx3w&oe=62619534"
            />
          </div>
          <div>
            <input
              type="text"
              className="upload__box"
              placeholder="What's on your mind?"
            />
          </div>
        </div>
        <div className="upload__bottom">
            <div className="upload__tabs">
                <img src={live} alt="live" width="35px" />
                <div className="upload__text">Live Video</div>
            </div>
            <div className="upload__tabs">
                <img src={image} alt="image" width="35px" />
                <div className="upload__text">Photo/Video</div>
            </div>
            <div className="upload__tabs">
                <img src={feeling} alt="feeling" width="35px" />
                <div className="upload__text">Feeling/Activity</div>
            </div>
        </div>
      </Paper>
    </div>
  );
}

export default UploadSection