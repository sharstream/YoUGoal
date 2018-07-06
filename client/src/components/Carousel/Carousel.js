import React from "react";

const Carousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/carousel.png" />
        <Carousel.Caption>
          <h3>FIFA World Cup 2018</h3>
          <p>Final Games</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/carousel.png" />
        <Carousel.Caption>
          <h3>Spanish Leagueships</h3>
          <p>Winner</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/carousel.png" />
        <Carousel.Caption>
          <h3>British Leagueships</h3>
          <p>Club and Games</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel;