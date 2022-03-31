import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./PostContainer.css";
import post_img from '../../../images/post.jpeg';

const PostContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let json = [
      {
        post__ID: 1,
        user_id: 12345678,
        user_img: "url...",
        user_name: "Asım KILIÇ",
        description: "What goes around comes around.",
        post_img: post_img,
        like: "25",
      },
      {
        post__ID: 2,
        user_id: 12345678,
        user_img: "url...",
        user_name: "Asım KILIÇ",
        description: "What goes around comes around 2.",
        post_img: "",
        like: "125",
      },
    ];
    setData(json);
  };

  return (
    <div>
      {data.map((item) => (
        <Post object={item} />
      ))}
    </div>
  );
};

export default PostContainer;
