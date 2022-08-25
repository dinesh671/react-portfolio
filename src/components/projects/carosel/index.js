import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../card";
import './index.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import musicAppThambnail from "../../../assets/images/landing-pagemusic app.png"
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
        };
      return (
      <div className="size">
        <Slider {...settings}>
          <div>
            <Card thambnail='https://pngimg.com/uploads/amazon/amazon_PNG23.png'
            title="Amazon landing page clone"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"
            path="https://amazon-clone-628.pages.dev/"
            />
          </div>
          <div>
            <Card thambnail='https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/litdnhptrj3uurnnzj0m.jpg'
            title="Social Media Dash Board"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"
                path="https://fem-dash-board.pages.dev/"
            />
          </div>
          
          <div>
            <Card thambnail={musicAppThambnail}
            title="Music App"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"
            path="https://music-app-712.pages.dev/"
            />
          </div>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
        </Slider>
      </div>
    );
  }
}