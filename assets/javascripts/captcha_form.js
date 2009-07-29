$(document).ready(function(){

  $("a.new-captcha-link").live("click", function(){
    $.ajax({
      type    : "GET",
      url     : "/generate_new_captcha",
      success : function(data, stat) {
        $("li.captcha-item").replaceWith(data);
      }
    });

    return false;
  });

});
