import React from 'react';
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import HeaderBanner from '../pages/Shared/HeaderBanner/HeaderBanner';
import PopularDishes from '../pages/Shared/PopularDishes/PopularDishes';
import HomeFacility from '../pages/Shared/HomeFacility/HomeFacility';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <HeaderBanner></HeaderBanner>
      <HomeFacility></HomeFacility>
      <PopularDishes></PopularDishes>
      <Footer></Footer>
    </div>
  );
};

export default Main;