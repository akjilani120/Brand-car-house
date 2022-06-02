import React from 'react';
import Banner from './Banner';
import FindCar from './FindCar';
import HomeService from './HomeService';
import LooksCar from './LooksCar';
import PopulerCar from './PopulerCar';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <FindCar></FindCar>
           <HomeService></HomeService>
           <PopulerCar></PopulerCar>
           <LooksCar></LooksCar>
        </div>
    );
};

export default Home;