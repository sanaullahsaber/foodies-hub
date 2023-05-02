import React from 'react';

import HeaderBanner from "../Shared/HeaderBanner/HeaderBanner";
import PopularDishes from "../Shared/PopularDishes/PopularDishes";
import HomeFacility from "../Shared/HomeFacility/HomeFacility";

const Home = () => {
  return (
    <div>
      
      <HeaderBanner></HeaderBanner>
      <HomeFacility></HomeFacility>
      <PopularDishes></PopularDishes>
    </div>
  );
};

export default Home;