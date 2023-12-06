import React from 'react';
// import { Link } from 'react-router-dom';
import './Products.css';
import Product from './Product';

function Products() {
  return (
    <div className="products-row">
        <Product id="1" image="https://m.media-amazon.com/images/I/61Jtkzywa3L._AC_SX679_.jpg" title="Fender Jimi Hendrix Stratocaster Electric Guitar, with 2-Year Warranty, Olympic White, Maple Fingerboard" rating="4" price="$59.99" />
        <Product id="2" image="https://m.media-amazon.com/images/I/71wXxN9SQnS._AC_SL1500_.jpg" title="Fender Frontman 10G Guitar Combo Amplifier - Midnight Blue Bundle with Instrument Cable and Picks" rating="4" price="$119.99" />
        <Product id="3" image="https://m.media-amazon.com/images/I/71n53VVee0L._AC_SL1500_.jpg" title="Donner Multi Effects Pedal, Arena 2000 Multieffects Processors Guitar Pedals with 278 Effects, 100 IRs, Looper, Drum Machine, Amp Modeling, Support XLR, MIDI IN" rating="4" price="$269.99" />
    </div>
  )
}

export default Products