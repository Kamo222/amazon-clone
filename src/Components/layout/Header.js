import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
        <Link to="/">
            <img className="header-logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
        </Link>
        
        <div className="header-search">
            <input type="text" className="header-input" />
            <SearchIcon className="search-icon" />
        </div>
        <div className="header-nav">
            <Link to="/login">
                <div className="header-option">
                    <span className="header-optionOne">Hello Guest</span>
                    <span className="header-optionTwo">Sign In</span>
                </div>
            </Link>
            
            <div className="header-option">
                <span className="header-optionOne">Returns</span>
                <span className="header-optionTwo">Orders</span>
            </div>
            <div className="header-option">
                <span className="header-optionOne">Your Guest</span>
                <span className="header-optionTwo">Prime</span>
            </div>

            <div className="header-optionBasket">
                <ShoppingBasketIcon />
                <span className="header-optionTwo header-basketCount"></span>
            </div>
        </div>
    </header>
  )
}

export default Header