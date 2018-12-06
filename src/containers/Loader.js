import React, { Component } from 'react';
import { Bounce, Expo, TimelineMax } from 'gsap/TweenMax';

import image from '../assets/images/robot.png';

class Home extends Component {
  componentDidMount() {
    const tl = new TimelineMax({ delay: 0.5 });

    tl.from('#logo', 1.15, {
      y: '-100vh',
      ease: Bounce.easeOut
    }).to('#loader', 0.85, {
      delay: 1.2,
      display: 'none',
      opacity: 0,
      ease: Expo.easeIn
    });

    tl.play();
  }

  render() {
    return (
      <div id="loader" className="loader">
        <img id="logo" src={image} alt="Gingerbread" />
      </div>
    );
  }
}

export default Home;
