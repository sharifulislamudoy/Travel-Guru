import React from 'react';
import HeroImg from '../assets/images/Rectangle 1.png'
const Home = () => {
    return (
        <div className='min-h-screen bg-cover bg-center pt-32 px-10 text-white' style={{ backgroundImage: `url(${HeroImg})` }}>
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div class="absolute inset-0  text-white text-xl font-bold">
                
            </div>
        </div>
    );
};

export default Home;