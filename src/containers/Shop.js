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
  state = {
    items: this.props.items,
  };

  filterCategory(category) {
    const { items } = this.props;
    const filteredCategory =
      category === 'All' ? items : items.filter(item => item.category === category);
    this.setState({ items: filteredCategory });
  }

  render() {
    const { items } = this.state;
    const { add } = this.props;

    return (
      <section>
        <nav>
          <span className="category-link" onClick={() => this.filterCategory('All')}>
            ALL
          </span>{' '}
          |{' '}
          <span className="category-link" onClick={() => this.filterCategory('Pins')}>
            Pins
          </span>{' '}
          |{' '}
          <span className="category-link" onClick={() => this.filterCategory('board-games')}>
            Board Games
          </span>{' '}
          |{' '}
          <span className="category-link" onClick={() => this.filterCategory('diy-tech')}>
            DIY tech
          </span>{' '}
          |{' '}
          <span className="category-link" onClick={() => this.filterCategory('graphic-novel')}>
            Graphic Novels
          </span>
        </nav>
        <div>
          {items.map((item, index) => {
            return <Product key={index} item={item} add={add} />;
          })}
        </div>
      </section>
    );
  }
}

Shop.propTypes = {
  items: PropTypes.array,
  add: PropTypes.func
};

export default Shop;
