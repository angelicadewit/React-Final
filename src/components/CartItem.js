import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const { item, remove } = this.props;
    const price = item.price * item.quantity;

    return (
      <div className="cart-item">
        <div className="media">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="content">
          <h1>
            {item.title} <span>x{item.quantity}</span>
          </h1>
          <h3>${price.toFixed(2)}</h3>
          <button
            onClick={() => {
              remove(item);
            }}
          >
            Remove Item
          </button>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    quantity: PropTypes.number
  }),
  remove: PropTypes.func
};

export default CartItem;
