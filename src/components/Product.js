import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { Expo, TimelineMax } from 'gsap/TweenMax';


class Product extends Component {
  state = {disabled: false};

  animateTooltip(item){
    const tooltip = item.title.replace(/\s/g, '');
    this.props.add(item);
    this.setState({disabled: !this.state.disabled});
    
    const tl = new TimelineMax();
    tl.to(`#${tooltip}`, 0.5, {y: 0, opacity: 1, ease: Expo.easeOut}).to(`#${tooltip}`, 0.5, {
      y: `10vh`,
      opacity: 0,
      delay: 0.25, 
      ease: Expo.easeIn, 
      onComplete: () => { 
        this.setState({ disabled: !this.state.disabled});
    },
  });

  tl.play();
  }

  render() {
    const { disabled } = this.state;
    const { item, add } = this.props;
    // console.log("got item out of props", this.props);
    const tooltip = item.title.replace(/\s/g, '');
    
    return (
      <div className="product">
        <div className="media">
          <img src={item.img} alt={item.title} />
          <h3>${item.price.toFixed(2)}</h3>
        </div>
        <div className="content">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <button
            disabled={disabled}
            onClick={() => {
              this.animateTooltip(item);
              
            }}
          >
            Add To Cart
          </button>

          <div className="product-tooltip" id={tooltip}> {item.title} has been added to your cart!</div>
        </div>
      </div>
    );
  }
}

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
