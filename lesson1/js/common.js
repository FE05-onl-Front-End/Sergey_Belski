$(document).ready(function() {

    $("[data-link]").click(function() {
        window.location.href = $(this).attr("data-link");
        return false;
    });

	$('#technologies_slider').owlCarousel({
		loop:false,
    	margin:0,
    	dots: false,
    	nav: true,
    	navText: ["<i class='arrow-left'></i>","<i class='arrow-right'></i>"],
    	responsive:{
        	0:{
            	items:1
        	},	
        	480:{
            	items:2
        	},
        	768:{
        		items:3
        	},
       		992:{
            	items:5
        	},
       		1200:{
            	items:6
        	}
    	}
	});

	$('#clients_slider').owlCarousel({
		loop:false,
    	margin:0,
    	dots: false,
    	nav: true,
    	navText: ["<i class='arrow-left'></i>","<i class='arrow-right'></i>"],
    	responsive:{
        	0:{
            	items:1
        	},	
        	480:{
            	items:2
        	},
        	768:{
        		items:3
        	},
       		992:{
            	items:5
        	},
       		1200:{
            	items:6
        	}
    	}
	});

    $('#marka_auto_slider').owlCarousel({
        loop:false,
        margin:0,
        dots: false,
        nav: true,
        navText: ["<i class='arrow-left'></i>","<i class='arrow-right'></i>"],
        responsive:{
            0:{
                items:1
            },  
            480:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });

    $('#other_services_slider').owlCarousel({
        loop:true,
        margin:5,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        responsive:{
            0:{
                items:1
            },  
            768:{
                items:2,
                margin:20
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

	$('.cb_txt_descr').matchHeight();
    $('.sb_height').matchHeight();
    $('.wrap_sbs_h3_text_ul').matchHeight();
    $('.ul_sb_text').matchHeight({
         byRow: 0
    });
   
    $('.wrap_li_square_numb .wkbb_info').matchHeight();
    $('.wrap_os_slider .sb_text').matchHeight();
    $('.wrap_os_slider .sb_text p').matchHeight();
	$('.white_circle').matchHeight();
    $('.ttb_text').matchHeight();
    $('.title_square_white').matchHeight();
    
});