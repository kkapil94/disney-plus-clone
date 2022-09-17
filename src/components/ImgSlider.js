import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'

export default function ImgSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };

  return (
  <>
    <Carousel {...settings}>
    <Wrap>
    <img src="./images/slider-badag.jpg"  />
    </Wrap>
    <Wrap>
    <img src="./images/slider-badging.jpg"/>
    </Wrap>
    <Wrap>
    <img src="./images/slider-scale.jpg"/>
    </Wrap>
    <Wrap>
    <img src="./images/slider-scales.jpg"/>
    </Wrap>
  </Carousel>
  </>
  )
}
const Carousel = styled(Slider)`
margin-top:20px;
.slick-list{
  overflow:visible;
}
.slick-dots li button:before{
  color:white;
}
button{
  z-index:1;
}
`
const Wrap = styled.div`
cursor:pointer;
img{
border:4px solid transparent;
height:100%;
width:100%;
border-radius:5px;
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition-duration:300ms;
}
img:hover{ 
  border:4px solid rgba(249, 249, 249);
}
`

