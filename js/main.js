
/*Tabs*/
$('#ourSkills').tabs();
$('.products_crsl').slick({
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
         responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: false,
                nextArrow: false
              }
            } 
          ]
});

/* fade anchor scroll */

$(document).ready(function(){
	$("#menu").on("click","a", function (event) {                		
		var id  = $(this).attr('href');
                var top = $(id).offset().top-70;               
                
                if( id != '#langswitch') {
                    event.preventDefault();
                }
                
                if( id == '#whatWeCan') {
                    top = $("#ourSkills").offset().top-70;  
                    $("#ourSkills").tabs("option", "active", 0 ); 
                }
                if (id == '#whatWeKnow') {
                    top = $("#ourSkills").offset().top-70;                  
                    $("#ourSkills").tabs("option", "active", 1); 
                }
		$('body,html').animate({scrollTop: top}, 1500);
                $('#navbarSupportedContent').addClass('collapse');
                $('#navbarSupportedContent').removeClass('show');
                
                
                
                
               
                
	});
        
        $("#aboutCompany").on("click","a", function (event) {
                event.preventDefault();
                var id  = $(this).attr('href'),
                top = $(id).offset().top-70;
                $('body,html').animate({scrollTop: top}, 1500);
        });
        
        $("#fadeLink1").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
          top = $(id).offset().top-70;
          $('body,html').animate({scrollTop: top}, 1500);
        });
        
        $("#fadeLink2").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
          top = $(id).offset().top-70;
          $('body,html').animate({scrollTop: top}, 1500);
        });
});    

$(window).scroll(function (event) {
        var y = $(this).scrollTop(); //set position from top when to change style in pixels
        if (y >= 300) {
            $('#menu').addClass('resized');
        } else {
            $('#menu').removeClass('resized');
        }
    });
/*
(function($){
	$('taba').onclick(
			function(){
				$('taba_content').show();
			}
		);
})(jQuery);
*/

$( window ).resize(function(){
    imgset($);
});
$( window ).load(imgset($));

function imgset($){
   var top_sufix;
   var bottom_sufix;
   if( $(document).width() > 1600 ) {
       top_sufix = '-1300х420.jpg';
       bottom_sufix = '-1300x420.jpg';
   } else if ($(document).width() > 1270) {
       top_sufix = '-800х420.jpg';
       bottom_sufix = '-800x420.jpg';
   } else if ($(document).width() > 992) {
       top_sufix = '-600х510.jpg';
       bottom_sufix = '-600x480.jpg';
   } else if ($(document).width() > 767) {
       top_sufix = '-470х480.jpg';
       bottom_sufix = '-460x600.jpg';
   } else {
        top_sufix = '-767x500.jpg';
        bottom_sufix = '-767x420.jpg';
   }
   $('#carouselHeader .carousel-item img:first-of-type').each(function(){       
        $(this).attr('src', $(this).attr('data-src') + top_sufix);
   });
   
   $('#carouselFooter .carousel-item img:first-of-type').each(function(){       
        $(this).attr('src', $(this).attr('data-src') + bottom_sufix);
   });
}