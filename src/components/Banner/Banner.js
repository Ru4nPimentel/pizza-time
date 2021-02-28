import React from 'react';
import './Banner.scss';

const Banner = ({ srcBanner, customBanner = false, children }) => {
  const bgImg = {
    backgroundImage: 'url(' + srcBanner + ')',
  };

  return (
    <div
      className={customBanner ? 'customBannerFull' : 'banner_img'}
      style={bgImg}
    >
      {children}
    </div>
  );
};

export default Banner;
