import React, { useState, useEffect } from "react";
import "./RightSide.css";

import ImageLayout from "../ImageLayout";
const RightSide = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [data]);

  const getData = () => {
    let jsondata = [
      {
        image:
          "https://scontent.flux1-1.fna.fbcdn.net/v/t1.6435-1/163642912_108109928033012_4168255610408574910_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=FAS20fcs1MUAX9fycZL&_nc_ht=scontent.flux1-1.fna&oh=00_AT_PBDGou3uTMSbbG6INWM4ZW5G3Vjo9kkz7Sq6_lPEx3w&oe=62619534",
        text: "Asım KILIÇ",
      },
      {
        image:
          "https://scontent.flux1-1.fna.fbcdn.net/v/t1.6435-1/163642912_108109928033012_4168255610408574910_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=FAS20fcs1MUAX9fycZL&_nc_ht=scontent.flux1-1.fna&oh=00_AT_PBDGou3uTMSbbG6INWM4ZW5G3Vjo9kkz7Sq6_lPEx3w&oe=62619534",
        text: "Mehmet Gültekin",
      },
      {
        image:
          "https://scontent.flux1-1.fna.fbcdn.net/v/t1.6435-1/163642912_108109928033012_4168255610408574910_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=FAS20fcs1MUAX9fycZL&_nc_ht=scontent.flux1-1.fna&oh=00_AT_PBDGou3uTMSbbG6INWM4ZW5G3Vjo9kkz7Sq6_lPEx3w&oe=62619534",
        text: "Hakan Kılıç",
      },

      {
        image:
          "https://scontent.flux1-1.fna.fbcdn.net/v/t1.6435-1/163642912_108109928033012_4168255610408574910_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=FAS20fcs1MUAX9fycZL&_nc_ht=scontent.flux1-1.fna&oh=00_AT_PBDGou3uTMSbbG6INWM4ZW5G3Vjo9kkz7Sq6_lPEx3w&oe=62619534",
        text: "Mustafa Lütfi",
      },
      {
        image:
          "https://scontent.flux1-1.fna.fbcdn.net/v/t1.6435-1/163642912_108109928033012_4168255610408574910_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=102&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=FAS20fcs1MUAX9fycZL&_nc_ht=scontent.flux1-1.fna&oh=00_AT_PBDGou3uTMSbbG6INWM4ZW5G3Vjo9kkz7Sq6_lPEx3w&oe=62619534",
        text: "Bülent Çakır",
      },
    ];
    setData(jsondata);
  };
  return (
    <div className="rightside__container">
      <div className="rightside__header">Contacts</div>
      <div className="rightside_content">
        <div>
          {data.map((item, index) => {
            return (
              <ImageLayout key={index} image={item.image} text={item.text} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
