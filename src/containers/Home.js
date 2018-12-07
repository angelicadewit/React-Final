import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../components/Product';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends Component {
  

  render() {
    const { items, data, add } = this.props;
    console.log(data.h1)
    return (

      
      <div className="cart-item-home">
        <Link to="/shop">
          <div class="hero-image">
            <img src={data.heroImage} alt={data.productName}/>
          </div>
        </Link>

        <h2>{data.hot}</h2>  
        <div class="home-items">
          {items.map((item, index) => {
              if (item.special === "hot") return <Product key={index} item={item} add={add}/>;
              return false;
          })} 
        </div>

        <h2>{data.new}</h2>
        <div class="home-items">

          {items.map((item, index) => {
              if (item.special === "new") return <Product key={index} item={item} add={add}/>;
              return false;
          })} 
        </div>
      </div>
    );
  }
}



Home.propTypes = {
  items: PropTypes.array,
  data: PropTypes.object,
  add: PropTypes.func,
};

export default Home;
