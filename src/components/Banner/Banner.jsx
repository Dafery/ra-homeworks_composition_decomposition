import React from 'react';

const bannerData = {
  src: 'https://www.fonstola.ru/pic/201504/800x600/fonstola.ru_175812.jpg',
  link: '#',
};

// Создаёт баннер рекламы

export const Banner = () => {
  return (
    <a className="banner-link" href={bannerData.link}>
      <img className="banner-img" src={bannerData.src} alt="" />
    </a>
  );
};
