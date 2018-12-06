import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../components/Product';

class Home extends Component {
  

  render() {
    const { items, data, add } = this.props;
    console.log(data.h1)
    return (

      
      <div className="cart-item">
          <h1>{data.h1}</h1>
          {items.map((item, index) => {
            if (item.special === "hot") return <Product key={index} item={item} add={add}/>;
            return false;
          })}
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
