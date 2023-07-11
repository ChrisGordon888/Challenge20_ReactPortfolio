import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AboutMePage.css';
import image1 from './pictures/1.jpg';
import image2 from './pictures/2.jpg';
import image3 from './pictures/3.jpg';

const AboutMePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h2>About Me</h2>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="image-1" className="avatar" />
        </div>
        <div>
          <img src={image2} alt="image-2" className="avatar" />
        </div>
        <div>
          <img src={image3} alt="image-3" className="avatar" />
        </div>
        {/* Add more image slides as needed */}
      </Slider>
      <p className="bio">As a freshly minted FullStack web weaver, I embark on a harmonious journey where technology's tapestry intertwines with the ethereal realms of music and mindful practices. From the symphony of code, like intricate notes on a celestial staff, I reveal the hidden melodies within the lines of JavaScript. With Cosmic Creators Collective as my muse, I delve into uncharted realms of tech, weaving a spellbinding fusion with the dynamic world of music production, the brushstrokes of art's boundless creativity, and the serenity invoked by yoga and meditation. My ambition extends beyond crafting mere applications; it's an orchestration of a cosmic symphony in code, resonating with the beating hearts of creatives, harmonizing innovation's cadence, and embodying the melodious essence of spiritual consciousness.</p>
    </div>
  );
};

export default AboutMePage;