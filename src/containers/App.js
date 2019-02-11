import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { connect } from 'react-redux';
import { removeItem, addItem } from '../actions';

import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Loader from './Loader';

const App = ({ data, items, cart, add, remove, itemCount }) => (
  <main>
    <Router basename={'/'}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="Duke Cannon" />
        </header>
        <nav className="App-nav">
          <ul>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/shop`}>Shop</Link>
            </li>
            <li>
              <Link to={`${process.env.PUBLIC_URL}/cart`}>Cart</Link> ( { itemCount } )
            </li>
          </ul>
        </nav>
          <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => <Home items={items} data={data} add={add} />} />
          <Route path={`${process.env.PUBLIC_URL}/shop`} render={() => <Shop items={items} add={add} />} />
          <Route path={`${process.env.PUBLIC_URL}/cart`} render={() => <Cart cart={cart} remove={remove} />} />
      </div>
    </Router>
    <Loader />
  </main>
);

const mapStateToProps = state => ({
  data: state.configuration.data,
  cart: state.configuration.cart,
  items: state.configuration.items,
  itemCount: state.configuration.itemCount,
});

const mapDispatchToProps = (dispatch, props) => ({
  add: item => dispatch(addItem(item)),
  remove: item => dispatch(removeItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
