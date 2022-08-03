$(function(){

  // //a태그 top방지
  // $("a").click(function(e){
  //   e.preventDefault();
  // });

  //header 
  $(window).scroll(function(){
    if($(this).scrollTop()>900){
      $("#main_header_wrap").addClass('sticky');
    }else{
      $("#main_header_wrap").removeClass('sticky');
    }
  });

  // reservation modal
  $("#main_header_wrap #reservation_btn").click(function(){
    $("#main_header_wrap").hide();
    $("#modal_wrap").fadeIn();
    $("#modal_wrap").css("z-index","100000");
    $("body").css("overflow","hidden");
    
  });
  $("#modal_wrap #close_btn button").click(function(){
    $("#modal_wrap").fadeOut();
    $("body").css({"overflox-x":"hidden","overflow-y":"auto"});
    $("#main_slide .slide .slide_btns").css("z-index","10");
    $("#main_header_wrap").show();
  })

  var a = 0;
  var b = 0;
  $(".date .day td").click(function(){
    a++;
    b = a % 2;
    if(b == 1){
      $(this).addClass("choice");
    }else{
      $(this).removeClass("choice");
    }
  });

  //menu
  $("#header_btns #menu_btn").click(function(){
    $("body").css("overflow","hidden");
    $("#menu").slideDown();
  });
  $("#menu #menu_up .close_btn").click(function(){
    $("body").css({"overflox-x":"hidden","overflow-y":"auto"});
    $("#menu").slideUp();
  });

  //slide

  $("#main_slide .bxslide").bxSlider({
    auto: true,
    pager: true,
    pagerType: 'short',
    touchEnabled : false,
  });

  $("#section2_slide").bxSlider({
    auto: true,
    pager: true,
    pagerType: 'short',
    touchEnabled: false
  })

  $("#section4_slide").bxSlider({
    auto: true,
    pager: true,
    pagerType: 'short',
    touchEnabled: false
  })

  

  //font animation
  // var $font_clone = $("#section2 h2").clone();
  // $("#section2 h2").animate({
  //   left:"100vw"
  // },{
  //   duration: Infinity,
  //   complete: function(){
  //     $("#section2 h2").append($font_clone);
  //   }
  // });

  // setInterval(function(){
  //   $("#section2 h2").append($font_clone);
  //   $("#section2 h2").css("transform","translateX(-600px)");
  // },2000);
  
});//document