import React from 'react';
import Banner from './Banner';
import FindCar from './FindCar';
import HomeService from './HomeService';
import LooksCar from './LooksCar';
import PopulerCar from './PopulerCar';
import SpecialCar from './SpecialCar';
import CarOffer from './CarOffer';
import CatHead from './Categorious/CatHead';
const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <FindCar></FindCar>
           <HomeService></HomeService>
           <PopulerCar></PopulerCar>
           <LooksCar></LooksCar>
           <SpecialCar></SpecialCar>
           <CarOffer></CarOffer>
           <CatHead></CatHead>
        </div>
    );
};

export default Home;