
  new WOW().init();
        var typed = new Typed('.element', {
            strings: ["I'm Graphic Designer."],
        typeSpeed:50,
        backSpeed:50,
        loop:true,
        });

$('#banner').owlCarousel({
   	 loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    	autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 	  })