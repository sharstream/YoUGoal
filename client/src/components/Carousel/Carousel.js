import React, { Component } from 'react'
import { Carousel, PageHeader } from "react-bootstrap"

export default class ParentCarousel extends Component {
  render() {
    return (
      <div className="row">
        <Carousel>
          <Carousel.Item>
            <img width={800} height={600} className="img-fluid" alt="Responsive image" src="http://www.gameoftrendz.com/wp-content/uploads/2018/06/irish-times-world-cup-bkg.jpg" />
            <Carousel.Caption>
              <h3>FIFA World Cup 2018</h3>
              <p>Final Games</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={800} height={600} className="img-fluid" alt="Responsive image" src="http://www.gameoftrendz.com/wp-content/uploads/2018/06/irish-times-world-cup-bkg.jpg" />
            <Carousel.Caption>
              <h3>World Leadership</h3>
              <p>Winner</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}