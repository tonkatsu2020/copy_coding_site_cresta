$(function(){

  //ハンバーガーボタン
  const Navbar = $('.navbar');
  const NavItems = $('.nav_item');
  const Toggler = $('#toggler');
  const HeaderLayer = $('#header_layer');
  Toggler.on("click",function(){
    $(this).toggleClass('show');
    Navbar.toggleClass('show');
    HeaderLayer.toggleClass('show');
    jQuery('.navbar').children().each(function(i) {
      jQuery(this).delay(100*i).queue(function(next) {
      jQuery(this).toggleClass('show');
        next();
      });
    });
  });
  
  // 背景をクリック
  const hide = () => {
    Navbar.removeClass('show');
    Toggler.removeClass('show');
    HeaderLayer.removeClass('show');
    NavItems.removeClass('show');
  };
  $('#header_layer,.link').on('click', function() {
      hide();
    });

  //スクロール後にヘッダー表示 
  $(window).on('load scroll', function(){
    const header = jQuery("header");
    if($(this).scrollTop() > 100 &&  header.hasClass('fixed') == false ) {
      header.css('top','-100px');
      header.animate({"top":0},600);
      header.addClass('fixed');
    } else if($(this).scrollTop() < 100 && header.hasClass('fixed') == true){
      header.removeClass('fixed');
    }
  });

});