import React, { useState, useEffect } from "react";
import ImageLayout from "../ImageLayout";
import "./LeftSide.css";

import covid from "../../../images/covid.png";
import groups from "../../../images/groups.png";
import memories from "../../../images/memories.png";
import messengerKids from "../../../images/messengerkids.png";
import ads from "../../../images/ads.png";
import adsmanager from "../../../images/admanager.png";
import blood from "../../../images/blood.png";
import business from "../../../images/business.png";

const LeftSide = () => {
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
        image: covid,
        text: "COVID-19 Information Centre",
      },
      {
        image: groups,
        text: "Friends",
      },
      {
        image: memories,
        text: "Memories",
      },
      {
        image: messengerKids,
        text: "Messenger Kids",
      },
      {
        image: ads,
        text: "Ad Center",
      },
      {
        image: adsmanager,
        text: "Ads Manager",
      },
      {
        image: blood,
        text: "Blood Donations",
      },
      {
        image: business,
        text: "Business Manager",
      },
    ];
    setData(jsondata);
  };

  return (
    <div>
      {data.map((item, index) => {
        return <ImageLayout key={index} image={item.image} text={item.text} />;
      })}
    </div>
  );
};

export default LeftSide;
