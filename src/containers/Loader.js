import React, { Component } from 'react';
import { Bounce, Expo, TimelineMax } from 'gsap/TweenMax';

import image from '../assets/images/eye_of_sauron.png';

class Home extends Component {
  componentDidMount() {
    const tl = new TimelineMax({ delay: 0.5 });

    tl.from('#logo', 1.15, {
      opacity: 0,
      // y: '-100vh',
      ease: Bounce.easeOut
    }).to('#logo', 0.90, {
      opacity: 1,
    }).to('#logo', 0.5, {
      opacity: 0,
      // y: '-100vh',
      ease: Bounce.easeOut
    }).to('#logo', 0.85, {
      opacity: 1,
      ease: Expo.easeIn
    }).to('#loader', 0.85, {
      display: 'none',
      opacity: 0,
      ease: Expo.easeIn
    });
;

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
