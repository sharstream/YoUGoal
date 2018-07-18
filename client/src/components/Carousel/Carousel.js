import React, { Component } from 'react'
import { Carousel } from "react-responsive-carousel";


export default class ParentCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="http://www.gameoftrendz.com/wp-content/uploads/2018/06/irish-times-world-cup-bkg.jpg" alt="carousel" />
          <p className="legend">YouGoal FIFA World Cup 2018</p>
        </div>
        <div>
          <img src="http://www.gameoftrendz.com/wp-content/uploads/2018/06/irish-times-world-cup-bkg.jpg" alt="carousel" />
          <p className="legend">Player and Team Performance Rating Aggregator</p>
        </div>
        <div>
          <img src="http://www.gameoftrendz.com/wp-content/uploads/2018/06/irish-times-world-cup-bkg.jpg" alt="carousel" />
          <p className="legend">Georgia Tech Bootcamp</p>
        </div>
      </Carousel>
    );
  }
}