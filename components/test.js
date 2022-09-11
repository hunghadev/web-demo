import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useRef, useState } from "react";
import { Image } from "react";
import Blur from "react-blur";

import style from "../styles/components/test.module.css";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.homeMain}>
        <div className={style.homeParent}>
          <div className={style.homeMainContent}>
            <div className={style.homeMainContentLine}></div>
            <div className={style.homeSubContent}>
              <div className={style.nftInfo}>
                <img
                  src="https://www.nestle.com/sites/default/files/styles/da_vinci_header_hero_desktop/public/2022-02/sustainability-nature-forest-river-article-header-fw.jpg?h=a612ed85&itok=1mqqgg1L"
                  className={style.nftCollectionImage}
                ></img>
                <div className={style.nftTitle}>VeeFriends Series 2</div>
              </div>

              <div className={style.nftImageParent}>
                <img
                  src="https://media.voguebusiness.com/photos/61b8dfb99ba90ab572dea0bd/3:4/w_1998,h_2664,c_limit/adidas-nft-voguebus-adidas-nft-dec-21-story.jpg"
                  className={style.nftImage}
                  alt=""
                ></img>
                <div className={style.nftImageBottom}>
                  <div className={style.nftImageBottomTitle}>
                    The current FP NFT:
                  </div>
                  <div className={style.nftImageBottomDes}>
                    Mutant Ape Yacht Club #8662
                  </div>
                </div>
              </div>

              <div className={style.nftPrice}>
                {/* <div className={style.nftPriceInfo}>
                  <div className={style.nftPriceInfoDes}>Old Floor Price</div>
                  <div className={style.nftPriceInfoText_old}>12.25 ETH</div>
                </div>
                <div className={style.nftPriceInfo}>
                  <div className={style.nftPriceInfoDes}>
                    Current Floor Price
                  </div>
                  <div className={style.nftPriceInfoText_current}>
                    12.35 ETH
                  </div>
                </div> */}
              </div>
              <div className={style.nftChange}>
                <div className={style.nftChangeTitle}>% FP Change</div>
                <div className={style.nftChangeValue}>100%</div>
              </div>
            </div>
          </div>
          <div className={style.a1}>
            <div className={style.dWHOmz}>Community</div>
          </div>
          <div className={style.imageParentTest}>
            <img
              src="https://pngimage.net/wp-content/uploads/2018/06/nature-wallpaper-png-3a.png"
              className={style.imageTest}
              alt=""
            ></img>
          </div>
          <div>test</div>
          <div className={style.bView}>
          <img
              src="https://pngimage.net/wp-content/uploads/2018/06/nature-wallpaper-png-3.png"
              className={style.imageTest}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
