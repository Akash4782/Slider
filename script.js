var splide = new Splide( '.splide', {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    autoplay: 'true',
    interval:3000,
    speed:5000,
    gap    : '3rem',
    drag: 'free',
    breakpoints: {
      640: {
        perPage: 2,
        gap    : '.7rem',
      },
      1000: {
        perPage: 3,
        gap    : '.7rem',
      },
      480: {
        perPage: 1,
        gap    : '.7rem',
      },
    },
  } );
  
  splide.mount();


// new Splide( '.splide', {
//   type    : 'loop',
//   autoplay: 'pause',
//   perPage : 3,
// } );