import React, { Component } from 'react';
import CartItem from '../components/CartItem';
import PropTypes from 'prop-types';

class Cart extends Component {
  render() {
    const { cart, remove } = this.props;
    let total = 0;
    cart.map(item => {
      const price = item.price * item.quantity;
      total += price;
      return total;
    });

    return (
      <div className="cart">
        {cart.map((item, index) => {
          return <CartItem key={index} item={item} remove={remove} />;
        })}
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.array,
  remove: PropTypes.func
};

export default Cart;
