$(document).ready(function(){

	//counter.js

	$('.counte').counterUp({
		delay: 10,
		time: 1000
	});
	//hero active
	$('.slide-active').slick({
		dots: false,
		accessibility:true,
		autoplay:true,
		autoplaySpeed:5000,
		infinite: true,
		arrows:true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow:'<button type="button" class="slick-prev"><div class="arrows"><i class="fa fa-long-arrow-left" aria-hidden="true"></i><p>previous_slider</p></div></button>',
		nextArrow:'<button type="button" class="slick-next"><div class="arrows"><i class="fa fa-long-arrow-right" aria-hidden="true"></i><p>next slider</p></div></button>',
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
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
		]
	  });
	  
	//  
	var mixer = mixitup('.tab-showed');
 
	//protfolio-active
	$('.protfolio-active').slick({
		dots: false,
		autoplay:false,
		autoplaySpeed:5000,
		infinite: true,
		arrows:false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});


	//hero active
	$('.testimonials-active').slick({
		dots: false,
		accessibility:true,
		autoplay:true,
		autoplaySpeed:2000,
		infinite: true,
		arrows:false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	  });
		




	//contact-loging
	$("#submit").click(function(e){
        var inValid = true;

        $("input[type='email']#requered").each(function(){
            if($(this).val()==''){
                inValid = false;
                $(this).css({
                    "border":"1px solid #d9485b",
                    "background":'gray'
                });
            }else{
                $(this).css({
                    "border":"",
                    "background":''
                });
            }
        });

        if(inValid == false){
            e.preventDefault();
        }else{
            clear();
            document.getElementById("reply") .innerHTML = "";
            return false;
        }
    });

    //costomar function

    function clear(){
        $('#myaction :input[type="email"]').each(function(){
            $(this).val('');
        });
    }


	//one_page_nav
 
	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: true,
		scrollSpeed: 800,
		scrollThreshold: .6,
		filter: '',
		easing: 'swing',
		begin: function() {
			//I get fired when the animation is starting
		},
		end: function() {
			//I get fired when the animation is ending
		},
		scrollChange: function($currentListItem) {
			//I get fired when you enter a section and I pass the list item of the section
		}
	});

    // scroll-top
	$(window).scroll(function(){
		if($(this).scrollTop() > 200 ) {
			$('.scroll-top-area').addClass('fixed-bottom');

		} else {
			$('.scroll-top-area').removeClass('fixed-bottom');
		}
	});

	$('.scroll').click(function(){
		$('html, body').animate({
			scrollTop:0
		},300);
	});



	//menu-stacky

	$(window).on('scroll', function(){
		if($(window).scrollTop() > 300){
			$('.main-header').addClass('fixed-top');
		}
		else{
			$('.main-header').removeClass('fixed-top');
		}
	})



});

//preload-active
$(window).on('load', function(){
	$('.preload-area').fadeOut()
});


	
