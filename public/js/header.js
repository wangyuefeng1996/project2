$(function(){
  // 消费者业务网站按钮
  $(".header-gblnav-dflink").click(function(){
    $(".header-gblnav-container").toggleClass("clicked");
    if(window.innerWidth<1024){
      $(".header-gblnav-container").css("height",`${window.innerHeight-65}px`)
    }
    $(this).children("I").toggleClass("active");
  })
  // 1023px下的头
  $(".app-nav-icon").click(function(){
    $(this).toggleClass("clicked");
    $("#header-v3").toggleClass("clicked").css("height",`${window.innerHeight-65+40}px`);
    $(".header-gblnav").toggleClass("clicked");
    $(".header-gblnav-default").toggleClass("clicked");
    $(".header-wrap").toggleClass("clicked").css("height",`${window.innerHeight-65}px`);
    $(".nav-wrap").toggleClass("clicked");
    $(".borbot").toggleClass("bot");
  })
  //导航栏中的
  $(".clearfix.nav-cnt").on("click","LI",function(){
    $(this).toggleClass("current").siblings().removeClass("current");
  })
  //登录(存在问题)
  $(".login-but").click(function(){
    if(window.innerWidth>1023){
      $(".login-wrap").toggleClass("clicked");
    }else{
      $(".app-login-icon").toggleClass("clicked","active");
    }
  })
  $(".app-login-icon").click(function(){
    $(this).toggleClass("active clicked");
  })
})