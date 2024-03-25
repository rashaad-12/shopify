import React from 'react';
import { NavigationBar } from '../../components/common/NavigationBar';

import backgroundImage from './assests/images/background-image.jpg';

import { Carousel, AccessorySummaryPops } from './components';

import '../../css/home-page.css'

export const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <div className="pt-5"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Carousel />
        <AccessorySummaryPops />
      </div>

    </>
  );
};

