import React from 'react';
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import HeaderBanner from '../pages/Shared/HeaderBanner/HeaderBanner';
import PopularDishes from '../pages/Shared/PopularDishes/PopularDishes';

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <HeaderBanner></HeaderBanner>
      <PopularDishes></PopularDishes>
    </div>
  );
};

export default Main;