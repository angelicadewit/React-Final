import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ item, add }) => (
  <div className="product">
    <div className="media">
      <img src={item.img} alt={item.title} />
      <h3>${item.price.toFixed(2)}</h3>
    </div>
    <div className="content">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <button
        onClick={() => {
          add(item);
        }}
      >
        Add To Cart
      </button>
    </div>
  </div>
);

Product.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    quantity: PropTypes.number
  }),
  add: PropTypes.func
};

export default Product;
