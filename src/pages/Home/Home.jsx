import React, {Suspense, lazy} from 'react';
import Spinner from "react-bootstrap/Spinner";
import Lottie from "lottie-react";
import HeaderBanner from "../Shared/HeaderBanner/HeaderBanner";
import PopularDishes from "../Shared/PopularDishes/PopularDishes";
import HomeFacility from "../Shared/HomeFacility/HomeFacility";
// import Chefs from '../Shared/Chefs/Chefs';
import loading from '../../assets/7719-loading.json'
const Chefs = lazy(()=> import('../Shared/Chefs/Chefs'))
const Home = () => {
  return (
    <div>
      <HeaderBanner></HeaderBanner>
      <HomeFacility></HomeFacility>
      <PopularDishes></PopularDishes>
      <h1 className="text-center fw-bolder py-5">
        Our <span className="text-warning">Top</span> Chefs
      </h1>
      <Suspense
        fallback={
          <div className="text-center">
            <Lottie animationData={loading} loop={true}></Lottie>
          </div>
        }
      >
        <Chefs></Chefs>
      </Suspense>
    </div>
  );
};

export default Home;