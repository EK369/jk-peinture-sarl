$(function() {
  "use strict";
  // $(".loder").fadeOut("slow");
  async function Isotope_filter() {
    /* ----- filter Start  ------ */
    let _creativeTotal = -1;
    // if(typeof getSingleBlogDatas === 'function')
    //   getSingleBlogDatas();
    if(typeof getImagesLength === 'function')
      _creativeTotal = await getImagesLength();
    var $container = $('.isotope').isotope({
      itemSelector: '.grid-item ,.blog-item',
      getSortData: {}
    });
    /* ----- filter End  ------ */
    if(typeof getImagesLength === 'function') {
      $('#portfolio-filter-ultop').on('click', 'li a', function() {
        $(this).parent().addClass('active').siblings().removeClass('active');
        let liIndex = 0;
        for (let i = 0; i < $('#portfolio-filter-ultop li a').length; i++) {
           if($('#portfolio-filter-ultop li').eq(i).hasClass("active")){
            liIndex = i;
            break;
           }
        }
        $('#portfolio-filter-ulbottom').children().eq(liIndex).addClass('active').siblings().removeClass('active');
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        $container.isotope({
          filter: filterValue
        });
      });
      $('#portfolio-filter-ulbottom').on('click', 'li a', function() {
        $(this).parent().addClass('active').siblings().removeClass('active');
        let liIndex = 0;
        for (let i = 0; i < $('#portfolio-filter-ulbottom li a').length; i++) {
           if($('#portfolio-filter-ulbottom li').eq(i).hasClass("active")){
            liIndex = i;
            break;
           }
        }
        $('#portfolio-filter-ultop').children().eq(liIndex).addClass('active').siblings().removeClass('active');
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        $container.isotope({
          filter: filterValue
        });
      });
    } else {
      $('.portfolio-filter').on('click', 'li a', function() {
        $(this).parent().addClass('active').siblings().removeClass('active');
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        $container.isotope({
          filter: filterValue
        });
      });
    }
    
    if(typeof getImagesLength === 'function' && _creativeTotal != 0) {
      let grid_item_div = document.querySelectorAll('.grid-item');
      const creative_four_col_work_div = document.getElementById('creative-four-col-work');
      let imagesOnRowSize = checkMediaQueryImagesSize();
      console.log(imagesOnRowSize)
      for (let i = CREATIVE_IMAGES_TO_BE_SHOWN; i < grid_item_div.length; i++) 
        grid_item_div[i].style.display = "none";

      let calculateHeight;
      if (CREATIVE_IMAGES_TO_BE_SHOWN % imagesOnRowSize != 0)
        calculateHeight =  parseInt(CREATIVE_IMAGES_TO_BE_SHOWN / imagesOnRowSize) * 195 + 195;
      else 
        calculateHeight =  parseInt((CREATIVE_IMAGES_TO_BE_SHOWN - 1) / imagesOnRowSize) * 195 + 195;
      creative_four_col_work_div.setAttribute("style", `position: relative; height: ${calculateHeight}px;`)
      window.addEventListener('resize', checkMediaQueryImagesSize);
    }

  }

  /* ===== Timer  =====   */
  function scrollfix() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $(".home2 #header").css({ "background": "rgba(0,0,0,0.9)" });
    } else {
      $(".home2 #header").css({ "background": "rgba(0,0,0,0)" });

    }
  }
  function re_size() {

    /* ----- filter Start  ------ */
    if ($(window).width() <= 991) {
      $('.nav li').on('click', function() {
        $('#menu ul').css({ "display": "none" });
      });
      $('#menu.collapse ').removeClass('pull-left');
      /* ------------bannre button margin ------------- */
      $('.cd-intro').children('button').removeClass('mt_50').addClass('mt_10');
    }
    if ($(window).width() > 991) {
      $('#menu.collapse ').addClass('pull-left');
      $('.home7 #menu.collapse ').removeClass('pull-left');
      /* ------------bannre button margin ------------- */
      $('.cd-intro').children('button').addClass('mt_50').removeClass('mt_10');
    }
    /* ----- filter End  ------ */
  }

  /*  =====  magnificPopup  =====  */
  function m_popup_select() {
    $('.grid,.post-img').magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }

    })
  }
  /*  =====  banner height  =====  */
  function bannerheight() {
    var bannerheight = $(".banner").height();
    $(".banner-detail").css('top', Math.round(bannerheight / 3.6) + 'px');
    var banner2height = $(".banner2").height();
    $(".banner-detail,.fnc-slide__content").css('top', Math.round(banner2height / 2.5) + 'px');
    var full_onescreen_banner_height = $("#container").height();
    $(".banner-detail").css('top', Math.round(full_onescreen_banner_height / 3) + 'px');
  }

  function owl_carousel() {
    /* ------------ OWL Slider Start  ------------- */

    /* ===== Related Product carousel =====   */
    $('.related-pro').owlCarousel({
      autoplay: false,
      responsiveClass: true,
      items: 4, //10 items above 1000px browser width
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 4,
          nav: false,
        }
      }

    });
    /* ===== Product Thumbnail =====   */
    $('#product-thumbnail').owlCarousel({
      loop: false,
      thumbs: true,
      autoplay: false,
      items: 5, //10 items above 1000px browser width
      nav: true,
    })

    /* ===== brand carousel =====   */
    $('.brand').owlCarousel({
      loop: true,
      autoplay: true,
      responsiveClass: true,
      items: 6, //10 items above 1000px browser width
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 3,
          nav: false
        },
        1000: {
          items: 6,
          nav: false,
          loop: true
        }
      }
    })

    /* ===== Testimonial carousel =====   */
    $('.client').owlCarousel({
      loop: true,
      autoplay: true,
      responsiveClass: true,
      items: 1, //10 items above 1000px browser width
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 1,
          nav: true
        },
        1000: {
          items: 1,
          nav: true,
          loop: true
        }
      }
    })
    /* ----- blog post Start  ------ */
    $('#blog-post').owlCarousel({
      loop: true,
      autoplay: false,
      responsiveClass: true,
      items: 3, //10 items above 1000px browser width
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false,
          loop: true
        }
      }
    })
    /* ----- blog post End  ------ */
    /* ===== Blog carousel =====   */
    const sliderPostOwl = async () => {
      if(typeof getSingleBlogDatas === 'function')
        await getSingleBlogDatas();
      $('.slider-post').owlCarousel({
        loop: true,
        autoplay: true,
        responsiveClass: true,
        items: 1, //10 items above 1000px browser width
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 1,
            nav: false
          },
          1000: {
            items: 1,
            nav: false,
            loop: true
          }
        }
      })
    }
    sliderPostOwl();
    /* ===== Team carousel =====   */
    $('.team3col').owlCarousel({
      autoplay: false,
      responsiveClass: true,
      items: 3, //10 items above 1000px browser width
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: true
        },
        1000: {
          items: 3,
          nav: true,
        }
      }

    });
    $('.team4col').owlCarousel({
      autoplay: false,
      responsiveClass: true,
      items: 4, //10 items above 1000px browser width
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: true
        },
        1000: {
          items: 4,
          nav: true,
        }
      }
    })
    $('#blog-post').owlCarousel({
      autoplay: false,
      responsiveClass: true,
      items: 3,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: true
        },
        1000: {
          items: 3,
          nav: true,
        }
      }
    })
    /* ------------ OWL Slider End  ------------- */
  }

  function ratingtop() {
    localStorage.setItem('display', 'list-view');
    $('.product-name:parent').each(function() {
      $(this).insertBefore($(this).prev('.rating'));
    });
  }

  function ratingbottom() {
    localStorage.setItem('display', 'grid-view');
    $('.rating:parent').each(function() {
      $(this).insertBefore($(this).prev('.product-name'));
    });
  }
  /* ===== Grid list View  =====   */
  function gl_view() {
    // Product List
    $('#list-view').on('click', function() {
      $('.product-layout > .clearfix').remove();
      $('.product-layout').attr('class', 'product-layout product-list col-xs-12');
      $('#column-left .product-layout').attr('class', 'product-layout mb_20');
      $('#column-right .product-layout').attr('class', 'product-layout mb_20');
      ratingtop()
    });
    // Product Grid
    $('.col_3 #grid-view').on('click', function() {
      $('.product-layout').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
      ratingbottom()
    });
    $('.col_3l #grid-view').on('click', function() {
      $('.product-layout').attr('class', 'product-layout product-grid col-lg-6 col-md-6 col-sm-6 col-xs-12');
      ratingbottom()

    });
    $('.col_3r #grid-view').on('click', function() {
      $('.product-layout').attr('class', 'product-layout product-grid col-lg-6 col-md-6 col-sm-6 col-xs-12');
      ratingbottom()
    });
    $('.col_4 #grid-view').on('click', function() {
      $('.product-layout').attr('class', 'product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12');
      ratingbottom()
    });

    $('.col_4l #grid-view').on('click', function() {
      $('.product-layout').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
      ratingbottom()
    });
    $('.col_4r #grid-view').on('click', function() {
      $('.product-layout').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
      ratingbottom()
    });
  }

  function glactive() {
    $('.btn-list-grid button').on('click', function() {
      if ($(this).hasClass('grid-view')) {
        $('.btn-list-grid button').addClass('active');
        $('.btn-list-grid button.list-view').removeClass('active');
      } else if ($(this).hasClass('list-view')) {
        $('.btn-list-grid button').addClass('active');
        $('.btn-list-grid button.grid-view').removeClass('active');
      }
    });

  }

  function wowanimations() {
    var wow = new WOW()
    wow = new WOW({
      boxClass: 'wow', // default
      animateClass: 'animated', // default
      offset: 0, // default
      mobile: true, // default
      live: true // default
    })
    wow.init();
  }

  function menu_scroll() {
    // Add scrollspy to <body>
    $('body').scrollspy({ target: '#menu' })
    $("#menu ul li a[href^='#'], .home-arrow-down a").on('click', function(e) {
      // prevent default anchor click behavior
      e.preventDefault();
      // store hash
      var hash = this.hash;
      // animate
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function() {
        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      });
    });
  }
  $(window).on("load", function() {
    
    Isotope_filter();
    re_size();
    glactive();
    bannerheight();
  });
  // $(document).ready(function() {
  //   $(".loder").fadeOut("slow");
  // });
  $(window).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    scrollfix();
    menu_scroll();
    owl_carousel();
    bannerheight();
    re_size();
    wowanimations();
    if(typeof getImagesLength != 'function')
      Isotope_filter();
  });
  $(window).on("resize", function() {
    re_size();
    bannerheight();
    glactive();
  });

  $(window).on("scroll", function() {
    scrollfix();
  });

})