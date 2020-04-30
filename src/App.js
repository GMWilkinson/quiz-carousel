import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


const items = [
  {
    src: '/images/1.png',
    altText: 'Slide 1'
  },
  {
    src: '/images/2.png',
    altText: 'Slide 2'
  },
  {
    src: '/images/3.png',
    altText: 'Slide 3'
  },
  {
    src: '/images/4.png',
    altText: 'Slide 4'
  },
  {
    src: '/images/5.png',
    altText: 'Slide 5'
  },
  {
    src: '/images/6.jpg',
    altText: 'Slide 6'
  },
  {
    src: '/images/7.png',
    altText: 'Slide 7'
  },
  {
    src: '/images/8.png',
    altText: 'Slide 8'
  },
  {
    src: '/images/9.jpg',
    altText: 'Slide 9'
  },
  {
    src: '/images/10.png',
    altText: 'Slide 10'
  },
  {
    src: '/images/11.png',
    altText: 'Slide 11'
  },
  {
    src: '/images/12.jpg',
    altText: 'Slide 12'
  },
  {
    src: '/images/13.png',
    altText: 'Slide 13'
  },
  {
    src: '/images/14.png',
    altText: 'Slide 14'
  },
  {
    src: '/images/15.png',
    altText: 'Slide 15'
  },
  {
    src: '/images/16.png',
    altText: 'Slide 16'
  },
  {
    src: '/images/17.jpg',
    altText: 'Slide 17'
  },
  {
    src: '/images/18.png',
    altText: 'Slide 18'
  },
  {
    src: '/images/19.png',
    altText: 'Slide 19'
  },
  {
    src: '/images/20.jpg',
    altText: 'Slide 2'
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img style={{maxHeight: '100vh'}} src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="App">
      <Carousel
          className="App-header"
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          interval={false}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    </div>
  );
}

export default App;
