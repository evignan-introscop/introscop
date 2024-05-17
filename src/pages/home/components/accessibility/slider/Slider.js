import React from "react";
import s from "./slider.module.scss";
import "./slider.css";
import Slider from "react-slick";
import backDotIcon from "../../../../../assets/images/home/arrow-back.svg";
import nextDotIcon from "../../../../../assets/images/home/arrow-next.svg";

import image1 from "../../../../../assets/images/gallery/Galerie-1.png";
import image1__webp from "../../../../../assets/images/gallery/Galerie-1.webp";
import image2 from "../../../../../assets/images/gallery/Galerie-2.png";
import image2__webp from "../../../../../assets/images/gallery/Galerie-2.webp";
import image3 from "../../../../../assets/images/gallery/Galerie-3_auto_x1.jpeg";
import image3__webp from "../../../../../assets/images/gallery/Galerie-3_auto_x1.webp";
import image4 from "../../../../../assets/images/gallery/Galerie-5_auto_x1.jpeg";
import image4__webp from "../../../../../assets/images/gallery/Galerie-5_auto_x1.webp";
import image5 from "../../../../../assets/images/gallery/Galerie-6_auto_x1.jpeg";
import image5__webp from "../../../../../assets/images/gallery/Galerie-6_auto_x1.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const gallery__images = [
  { id: 1, image: image1, image__webp: image1__webp },
  { id: 2, image: image2, image__webp: image2__webp },
  { id: 3, image: image3, image__webp: image3__webp },
  { id: 4, image: image4, image__webp: image4__webp },
  { id: 5, image: image5, image__webp: image5__webp },
];

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "36px",
        width: "42px",
        right: "-80px",
        top: "50%",
        breakpoint: 376,
        settings: {},
      }}
      onClick={onClick}
    >
      <span
        style={{
          background: "#168EDC",
          height: "100%",
          width: "100%",
          display: "inline-block",
          position: "absolute",
          left: -10,
          zIndex: 5,
        }}
      >
        <img
          style={{
            display: "inline-block",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 5,
          }}
          src={nextDotIcon}
          alt=""
        />
      </span>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "36px",
        width: "42px",
        left: "-60px",
        top: "50%",
        breakpoint: 376,
        settings: {},
      }}
      onClick={onClick}
    >
      <span
        style={{
          background: "#168EDC",
          height: "100%",
          width: "100%",
          display: "inline-block",
          position: "absolute",
          left: -10,
          zIndex: 5,
        }}
      >
        <img
          style={{
            display: "inline-block",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 5,
          }}
          src={backDotIcon}
          alt=""
        />
      </span>
    </div>
  );
}

function MultipleSlider(props) {
  const settings = {
    adaptiveHeight: true,
    height: 260,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          display: "none",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          autoplay: true,
          arrows: false,
          prevArrow: false,
          nextArrow: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                display: "block",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <ul style={{ marginTop: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: function (i) {
            return <div className="dot"></div>;
          },
          dotsClass: "slick-dots slick-thumb",
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          appendDots: (dots) => (
            <div
              style={{
                display: "block",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className={s.carousel}>
      <Slider {...settings}>
        {gallery__images.map((img, idx) => (
          <div className={s.carousel__item_wrapper} key={idx}>
            <div className={s.carousel__item}>
              <img
                style={{
                  display: "inline-block",
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  objectFit: "cover",
                  top: "0",
                  left: 0,
                  margin: "1px",
                  padding: 0,
                }}
                src={img.image}
                srcSet={img.image__webp}
                alt="introscop images by introscop"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default MultipleSlider;
