import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../components/Product';

// const Shop = ({ items, add }) => (
//   <div>
//     {items.map((item, index) => {
//       return <Product key={index} item={item} add={add} />;
//     })}
//   </div>
// );

class Shop extends Component {
  render() {
    const { items, add } = this.props;
    const shampoo = items.filter(item => item.category === 'shampoo')
    return (
      <div>
        {shampoo.map((item, index) => {
          return <Product key={index} item={item} add={add} />;
        })}
      </div>
    );
  }
}

Shop.propTypes = {
  items: PropTypes.array,
  add: PropTypes.func
};

export default Shop;
