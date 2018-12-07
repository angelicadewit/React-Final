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

    const shipping20 = total + 7.05;
    const shipping40 = total + 12.85;

    return (
      <div className="cart">
        {cart.length === 0 ? (
          <h1>Cart is empty</h1>
        ) : (
          <div>


            {total > 20 && total < 40 ? (
              <div>
                <h2 className="cart-header">Cart</h2>
                {cart.map((item, index) => <CartItem key={index} item={item} remove={remove} />)}
                <h3>Subtotal: ${total.toFixed(2)}</h3>
                <h3>Shipping: $12.85</h3>
                <h3>Total: ${shipping40.toFixed(2)}</h3>
                <button className="payment"><a href="http://paypal.me/angelicadewit/" target="_blank">Proceed to Payment</a></button>
              </div>
            ) : total > 40 ? (
              <div>
                <h2 className="cart-header">Cart</h2>
                {cart.map((item, index) => <CartItem key={index} item={item} remove={remove} />)}
                <h3>Subtotal: ${total.toFixed(2)}</h3>
                <h3>Shipping: FREE</h3>
                <h3>Total: ${total.toFixed(2)}</h3>
                <button className="payment"><a href="http://paypal.me/angelicadewit/" target="_blank">Proceed to Payment</a></button>
              </div>
            ) : (
              <div>
                <h2 className="cart-header">Cart</h2>
                {cart.map((item, index) => <CartItem key={index} item={item} remove={remove} />)}
                <h3>Subtotal: ${total.toFixed(2)}</h3>
                <h3>Shipping: $7.05</h3>
                <h3>Total: ${shipping20.toFixed(2)}</h3>
                <button className="payment"><a href="http://paypal.me/angelicadewit/" target="_blank">Proceed to Payment</a></button>
              </div>
            )}
          </div>
        )}
      </div>
    );

    // return <h1>Nothing has been added</h1>
  }
}

Cart.propTypes = {
  cart: PropTypes.array,
  remove: PropTypes.func
};

export default Cart;
