$(document).ready(function(){
  
  $('.accordion > li').hover(function(){
    $('.accordion .drop').removeClass('active');
    $(this).find('.drop').addClass('active');
  }, function(){
    
    $('.accordion .drop').removeClass('active');
  });
  
//   $('body').on('click', '#wrapper', function() {
//     $('.drop').removeClass('active');
//   });
  
$('body').on('click', '.accordion__content .colors-list li', function() {
    	$('.accordion__content .colors-list li').removeClass('active');
    	$(this).addClass('active');
      let v = $(this).data('value');
      $('.scent-tab-item-content').removeClass('active');
      $(`div[data-value="${v}"]`).addClass('active');
    });
  
$(window).on('load', function() {
    productAddToCart();
  
   $(document).on('change', '#w3-product-accessories .accessories-left input[type="checkbox"]', function() {
      const checkedCount = $('#w3-product-accessories .accessories-left input[type="checkbox"]:checked').length;
      $('.btn-fbt-add').toggleClass('active', checkedCount > 0);
    });
})

function productAddToCart() {
    $('body').on('click', '.btn-fbt-add.active', function(e) {
        var $productItem = $(this).closest('#w3-product-accessories .accessories-left input[type="checkbox"]:checked');
        var isSubscriptionProduct = $productItem.find('.bold-ro__product').length > 0 ? true: false;
        if (isSubscriptionProduct) {
            var target = $productItem.data('url');
            e.preventDefault();
            window.location = target;
        } else {
            $(this).closest('.product').find('.buy-buttons .button--xl').trigger('click');
        }
    })
}

   $('.shop-scent-featured-blocks').slick({
    slidesToShow: 4,
     slidesToScroll: 1,    
    dots: true,
    arrows: false,
    autoplay: false,
    infinite:false,
    loop: false,
    speed: 500,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '20%',
          infinite: false
        }
      }
     
    ]
});


	
      
      $('.weekspicks').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.3,
              slidesToScroll: 1,
              centerMode: false,
              centerPadding: '20%',
              infinite: false
            }
          }
         
        ]
      });

      $('.blog-categories-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: ".slick-prev",
        nextArrow: ".slick-next",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '100px',
                    initialSlide: 1,
                    dots: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    
    
    $('.blog .nav .dropdown-toggler').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.nav').find('.nav-menu').fadeToggle();
    });

    $('.toggle').click(function(e) {
      e.preventDefault();
    
      var $this = $(this);
    
      if ($this.next().hasClass('show')) {
          $this.next().removeClass('show');
          $this.next().slideUp(350);
          $this.parent().find('a.toggle').toggleClass('arrow-down');
      } else {
          $this.parent().parent().find('li .inner').removeClass('show');
          $this.parent().parent().find('li .inner').slideUp(350);
          $this.next().toggleClass('show');
          $this.next().slideToggle(350);
          $this.parent().find('a.toggle').toggleClass('arrow-down');
      }
  });





$("#fourstep-desktop .video1").hover(function(){
    var imgurl = $(this).data("hoverimage");
    $(this).css("background-image", "url(//cdn.shopify.com/s/files/1/2283/7011/files/Step-1-GIF.gif?v=1591207023)")
}, function(){
  var pimgurl = $(this).data("pimage");
  $(this).css("background-image", "url(" + pimgurl + ")")
});

$("#fourstep-desktop .video2").hover(function(){
  var imgurl = $(this).data("hoverimage");
  $(this).css("background-image", "url(//cdn.shopify.com/s/files/1/2283/7011/files/Step-2-GIF.gif?v=1591207038)")
}, function(){
var pimgurl = $(this).data("pimage");
$(this).css("background-image", "url(" + pimgurl + ")")
});

$("#fourstep-desktop .video3").hover(function(){
  var imgurl = $(this).data("hoverimage");
  $(this).css("background-image", "url(https://cdn.shopify.com/s/files/1/2283/7011/files/Step-3-GIF.gif?v=1591207148)")
}, function(){
var pimgurl = $(this).data("pimage");
$(this).css("background-image", "url(" + pimgurl + ")")
});


$("#fourstep-desktop .video4").hover(function(){
  var imgurl = $(this).data("hoverimage");
  $(this).css("background-image", "url(https://cdn.shopify.com/s/files/1/2283/7011/files/Step-4-GIF.gif?v=1591207184)")
}, function(){
var pimgurl = $(this).data("pimage");
$(this).css("background-image", "url(" + pimgurl + ")")
});

$('.article__content--copy').find('h3.hypervisual__text_line_one.hypervisual__text-medium:first').addClass('first-letter');

});


/*nav*/
$(document).ready(function(){   

   $(document).click(function(event) {
    if ($('body').hasClass('nav-active')) {
      if ($(event.target).is('.mobile-menu') || $(event.target).is('.nav-opener') || $(event.target).is('.mobile-menu *')) {
      } else {
        $('.nav-opener').trigger('click');
      }
    }
  });
  
  $('.dropdown-scent .dropHeader').html($('.scent-wrapper input:checked').next('div').find('label').html());
  $('.dropdown-scent .swatch-element').on('click', function(){
    let labelInner = $(this).find('label').html();
    $('.dropHeader').html(labelInner);
    $('#drop-1').prop( "checked", false );
  });
  if( window.innerWidth < 767 ){
    $('.pdp-reviews-slider').slick({
      dots: true,
      arrows: false,
      autoplay: false,
      infinite: true,
      speed: 500,
      autoplaySpeed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
  

});
