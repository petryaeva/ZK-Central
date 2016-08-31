$(document).ready(function(){

	$(".baner").owlCarousel({
 
      navigation : true,
      slideSpeed : 800,
      rewindSpeed:	2000,
      paginationSpeed : 600,
      singleItem:true,
      items : 1, 
      itemsDesktop : 1,
      itemsDesktopSmall : 1,
      itemsTablet: 1,
      itemsMobile : 1,
      navigationText : false,
      autoPlay : true,
    	stopOnHover : true,
    	// autoplay: true,
      loop: true,
      responsive: true,
      responsiveRefreshRate : 100,
      responsiveBaseWidth: window
  });

  $(".stock-slider").owlCarousel({ 
      autoPlay: 3000, 
      loop: true, 
      items : 3, 
      itemsDesktop : [1086,2], 
      itemsDesktopSmall : [600,1], 
      itemsTablet: [300,1], 
      itemsMobile : false,
      responsive:{
        0:{
          items:1,
          nav:true
        },
        768:{
          items:2,
          nav:true
        },
        1124:{
          items:3,
          nav:true,
          loop:true
        }
      }

  });

  $(".owl-nav div").text("");

  $('.plan-map').maphilight();


  /* select */
  $('.select__current').click(function(){    
    var dropBlock = $(this).parent().find('.select__drop');
    
    if( dropBlock.is(':hidden') ) {
      dropBlock.slideDown();
      $(this).addClass('active');     
    } else {
      $(this).removeClass('active');
      dropBlock.slideUp();
    }
    
    return false;
  });
  
  $('.select__drop').find('li').click(function(){
      
      var selectResult = $(this).find('a').data('value');
      
      $(this).parent().parent().find('input').val(selectResult);
     
      $(this).parent().parent().find('.select__current').text($(this).text());
      $(this).parent().parent().find('.select__current').removeClass('active');
     
      $(this).parents('.select__drop').slideUp();
      $(this).parent().parent().find('input').change();
  });

  $(".select__link").click(function () {
    event.preventDefault();
  })


  //---fade label
    $('.fade input[type="text"]').val('');
    $('.fade label').click(function(){
        $(this).fadeOut(500);
    });
    
    $('.fade input[type="text"]').focus( function () {
        $(this).siblings('label').fadeOut(300);
    });

    /*  fancybox */        
    
    $('.lnk-fancybox').fancybox({
      wrapCSS: "fancy-popup",
      helpers: {
        overlay: {
          locked: false
        }
      }
    });

    $(".plan-floor").fancybox({
      wrapCSS: "plan-floor-popup",
      helpers: {
        overlay: {
          locked: false
        }
      }
    });

    $('.form-fancybox').fancybox({
      wrapCSS: "form-wrap-popup",
      helpers: {
        overlay: {
          locked: false
        }
      }
    });

    /*  input mask */

    $('input[name="phone"]').inputmask({"mask": "+7(999) 999-9999"}); 

    /* scroll menu */

    var $menu = $(".nav");
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200 && $menu.hasClass("nav--default")) {
            $menu.removeClass("nav--default").addClass("nav--fixed");
        } else if ($(this).scrollTop() <= 200 && $menu.hasClass("nav--fixed")) {
            $menu.removeClass("nav--fixed").addClass("nav--default");
        }
    });

    $('.menu-btn').click(function () {
      $('.nav-responsive').addClass('opened');
    });

    $('.menu-btn-close').click(function () {
      $('.nav-responsive').removeClass('opened');
    })

    // scrollspy
    $('.nav-list').ddscrollSpy({
        scrolltopoffset: -55
    });
    $('.nav-list a').click(function(){
        $('.nav-list').ddscrollSpy({
            scrolltopoffset: -55
        });
    });


    $('.plan-map__section').click(function () {
        var src = $(this).attr('data-plan');  
                
        if (src.length > 0) {      
          $.fancybox('<div class="popup-apart"><img src="'+src+'"></div>');           
        }
        return false;
    });
    

});