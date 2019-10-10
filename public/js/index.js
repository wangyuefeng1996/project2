$(function(){
  // 第一次加载时
  if(window.innerWidth>1023){
    $("#content").css("margin-top","15px");
  }else{
    $("#content").css("margin-top","65px");
  }
  $.ajax({
    url:"http://localhost:5050/header.html",
    type:"get",
    success: function(result) {
      console.log(result);
      $(result).replaceAll("#header");
    }
  })
  $.ajax({
    url:"http://localhost:5050/footer.html",
    type:"get",
    success: function(result) {
      console.log(result);
      $(result).replaceAll("#footer");
    }
  })
  // 监听宽度
  window.addEventListener('resize', function() {
    if(window.innerWidth>1023){
      $("#content").css("margin-top","15px");
    }else{
      $("#content").css("margin-top","65px");
    }
  })
})