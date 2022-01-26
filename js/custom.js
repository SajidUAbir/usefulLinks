$(function(){

    // change color of navbar
    $(window).scroll(function(){

    var scrolling = $(this).scrollTop();
  
    if (scrolling > 1) {
      $('.nav_bg').addClass('nav_1');
  
    } else {
      $('.nav_bg').removeClass('nav_1');
    }

    });

    // banner slider
    $('.banner_slider').slick({
        prevArrow: '.ban_prev',
        prevArrow: '.ban_prev',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });


    // type js
    $(".typed").typed({
		strings: ["Front-end Developer"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 40,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 50,
		// time before backspacing
		backDelay: 2000,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});

  // animate - wowjs
  new WOW().init();

});