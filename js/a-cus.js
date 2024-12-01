// JavaScript Document
	$('#banner').owlCarousel({
   	 loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    	autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
	  })

$('#poster').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:4000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('#brand-identify').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:4000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('#catalogue').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:4000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },	
        1000:{
            items:3
        }
    }
})

$('#gifts').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:4000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },	
        1000:{
            items:3
        }
    }
})
$('#tes').owlCarousel({
    loop:true,
    margin:100,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
