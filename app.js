$(".slider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    lazyLoad: "ondemand",

    responsive: [{
 
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
   
      }, {
   
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
   
      }, {
   
        breakpoint: 375,
        settings: "unslick" // destroys slick
   
      }]
});