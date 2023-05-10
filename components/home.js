import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useRef, useState } from "react";
import { Image } from "react";

import style from "../styles/components/home.module.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.homeMain}>
        <div className={style.homeText}>Hello Home page</div>
      </div>
    );
  }
}
