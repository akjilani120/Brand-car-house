import React from 'react';
import Banner from './Banner';
import FindCar from './FindCar';
import HomeService from './HomeService';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <FindCar></FindCar>
           <HomeService></HomeService>
        </div>
    );
};

export default Home;