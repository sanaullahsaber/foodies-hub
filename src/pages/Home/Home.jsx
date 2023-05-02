import React from 'react';

import HeaderBanner from "../Shared/HeaderBanner/HeaderBanner";
import PopularDishes from "../Shared/PopularDishes/PopularDishes";
import HomeFacility from "../Shared/HomeFacility/HomeFacility";
import Chefs from '../Shared/Chefs/Chefs';

const Home = () => {
  return (
    <div>
      <HeaderBanner></HeaderBanner>
      <HomeFacility></HomeFacility>
      <PopularDishes></PopularDishes>
      <Chefs></Chefs>
    </div>
  );
};

export default Home;