$(function(){
  $(".list.footer-nav-list").click(function(){
    $(this).toggleClass("active");
    if($(this).is(".active")){
      $(this).siblings().removeClass("active");
    }
  })
})