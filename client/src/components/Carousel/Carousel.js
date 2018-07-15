import React, { Component } from 'react'
import { Carousel } from "react-responsive-carousel";


export default class ParentCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="http://www.gameoftrendz.com/wp-content/uploads/2018/06/irish-times-world-cup-bkg.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="http://www.gameoftrendz.com/wp-content/uploads/2018/06/irish-times-world-cup-bkg.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="http://www.gameoftrendz.com/wp-content/uploads/2018/06/irish-times-world-cup-bkg.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}