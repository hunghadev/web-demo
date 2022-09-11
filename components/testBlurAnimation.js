import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useRef, useState } from "react";
import Blur from "react-blur";

import style from "../styles/components/testBlurAnimation.module.css";

export default class TestBlurAnimation extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    function filerAction() {
      console.log("Filter action")
    }
    const myImages = [
      "https://pngimage.net/wp-content/uploads/2018/06/nature-wallpaper-png-3.png",
      "https://images.pexels.com/photos/15286/pexels-photo.jpg",
      "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];
    return (
      <div>
        <div>Demo</div>
        <div className={style.blurParennt}>
        <div className={style.imgParent}>
          <img src={myImages[0]} className={style.img} alt=""></img>
        </div>
        <div className={style.imgParent}>
          <img src={myImages[1]} className={style.img} alt=""></img>
        </div>
        <div className={style.imgParent}>
          <img src={myImages[2]} className={style.img} alt=""></img>
        </div>
        <div className={style.imgParent}>
          <img src={myImages[3]} className={style.img} alt=""></img>
        </div>
      </div>
      <div className={style.click} onClick={()=>filerAction()}>Click</div>
      </div>
    );
  }
}


