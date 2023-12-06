import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
        <Link to="/home">
            <div>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png" alt="sorry af" />
            </div>
            <div>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/error/131._TTD_.jpg" alt="bobby" />
            </div>
        </Link>
        
    </div>
  )
}

export default NotFound