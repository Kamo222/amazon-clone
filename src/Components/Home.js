import React from 'react';
import './Home.css';
import Products from './Products';

const Home = () => {
  return (
    <div className="home">
        <div className="home-container">
            <img className="home-image" src="https://m.media-amazon.com/images/I/71j8damPo5L._SX3000_.jpg" alt="Ok its fine" />
            <Products />
        </div>
    </div>
  )
}

export default Home;
