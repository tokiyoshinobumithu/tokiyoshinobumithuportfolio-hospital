$(function(){
    $(window).on('load',function(){
      $('.three-quarter-spinner').delay(500).fadeOut(500);
      $('.spinner-box').delay(800).fadeOut(900);
  });
});
$(function (){
    setTimeout(function(){
        $('.slider').slick ({
            arrows: false,
            fdots: true,
            vertical: true,
            autoplay: true,
            autoplaySpeed:4000,
            speed: 2000,
            pauseOnFocus: false,
            pauseOnHover: false
        });
    }, 3500);
});
$(function (){
    var width = $(window).width();
    $('.news-list-item > .title, .open-btn').on('click',function (){
        var parentElem = $(this).parent();
        $(parentElem).toggleClass('active');
        $(parentElem).children('.has-chiled').stop().slideToggle(400);
        return false;
    });
});

$(function () {
    $('.navi-btn').on('click',function () {
        $('.navi-btn, .menu-open').toggleClass('open');
    });
});

$(function () {
    $('.page_top-btn').click(function (){
        $('body, html').animate( {
            scrollTop:0
        },500
        );
    });
});

$(function () {
    $('.down-menu-name').on('mouseover',function () {
        $('.down-menu').addClass('slide-down');
    });
});
