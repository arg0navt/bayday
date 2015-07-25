$(document).ready(function(){
	/////////////////////////////////////////////////////////////////////////////////////
    // Установка значения комбо
    $(".combo ul li").click(function () {
        $(this).parents(".combo").find(".current").html($(this).html());
        $(this).parents(".combo").find("input").val($(this).data('id')).trigger('change');
        $(this).parents(".combo").find('ul').css('display', 'none');
 
    }); 
    $(".combo > .current, .combo > .arrow").click(function () {
        var ul = $(this).parent().find('ul');
        if(ul.is(':visible')) {
            ul.hide().parent().removeClass('active');
        } else {
            ul.show().parent().addClass('active');
        }
    });
    
    
    $('html').click(function(e){
       var currentCombo = $('.combo.active');
       if(currentCombo.length && undefined != e.pageX) {
            var offset= currentCombo.offset();
            if(!(e.pageX >= offset.left && e.pageX <= offset.left+currentCombo.width() && e.pageY>=offset.top && e.pageY<=offset.top+currentCombo.height())) {
                currentCombo.find('ul').hide().parent().removeClass('active');
            }
       } 
    });
    /////////////////////////////////////////////////////////////////////////////////////
    
    $( window ).resize(function() {
        $(".block1 .bx-controls").css("width", $(".limit").width());  
        $(".block1 .bx-controls").css("margin-left", -$(".limit").width()/2); 
    });
    
    var slider = $('.bxslider1').bxSlider({
      mode: 'fade',
      auto: true,
      pause:3000,
      pager:false,
      onSliderLoad: function(){
        $(".block1 .bx-controls").css("width", $(".limit").width());  
        $(".block1 .bx-controls").css("margin-left", -$(".limit").width()/2); 
      }
    });
    $('.bxslider2').bxSlider({
        mode: 'fade',
        controls:false,
        auto: true,
        pagerCustom: '#bx-pager2'
    });
    $('.bxslider3').bxSlider({
        mode: 'fade',
        controls:false,
        auto: true,
        pagerCustom: '#bx-pager3'
    });
    $('.bxslider4').bxSlider({
        mode: 'fade',
        controls:false,
        auto: true,
        pagerCustom: '#bx-pager4'
    });
    $('.bxslider5').bxSlider({
        controls:true,
        pager:false
    });
    $('.bxslider6').bxSlider({
        controls:true,
        pager:false,
        minSlides: 1,
        maxSlides: 2,
        slideWidth: 405,
        slideMargin: 30
    });
    
    
    $('.block1 .arrow_text.right_side').click(function(){
      slider.goToNextSlide();
      return false;
    });
    $('.block1 .arrow_text.left_side').click(function(){
      slider.goToPrevSlide();
      return false;
    });
    
    
    
    
    $(".service_block .heart").click(function () {
		$(this).toggleClass('active');
	});
    
    
    
    $(".scroll_link").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 700
        });
        return false;
    }); 
    
    	
    
    
    $(".menu_ico").click(function () {
		$(".adaptive_menu").css("display", "block");
	});	
    $(".adaptive_menu .close_menu, .adaptive_menu a").click(function () {
		$(".adaptive_menu").css("display", "none");
	});	
    
    
    
	
    $( window ).scroll(function(e) {  
      var h = parseInt($(".fixed_header").height()) + parseInt($(".fixed_header").css("padding-top")) + parseInt($(".fixed_header").css("padding-bottom"));
      if ($(window).scrollTop()>100){
         $(".fixed_header").stop().animate({
                                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                                    top: "0px"                            
                                  }, 300 );
      }  
      if ($(window).scrollTop()<=100){
        $(".fixed_header").stop().animate({
                                    backgroundColor: "rgba(0, 0, 0, 0.0)",
options:"0"									
                                  }, 100 );
      }         
    });  
    
    
    
    
    $('.effect').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 10
    });
    
});
$(document).ready(function(){
$('#int-3-show').click(function(e){
$('#int-3>ul').show();
$(".internal_menu>.limit>ul").animate({left:"-250px"},200);
$("#int-3>ul").animate({left:"250px"},200);
});
});
$(document).ready(function(){
$('#int-1-show').click(function(e){
$('#int-1>ul').show();
$(".internal_menu>.limit>ul").animate({left:"-250px"},200);
$("#int-1>ul").animate({left:"250px"},200);
});
});
$(document).ready(function(){
$('#int-2-show').click(function(e){
$('#int-2>ul').show();
$(".internal_menu>.limit>ul").animate({left:"-250px"},200);
$("#int-2>ul").animate({left:"250px"},200);
});
});
$(document).ready(function(){
$('#int-4-show').click(function(e){
$('#int-4>ul').show();
$(".internal_menu>.limit>ul").animate({left:"-250px"},200);
$("#int-4>ul").animate({left:"250px"},200);
});
});
$(document).ready(function(){
$('#int-5-show').click(function(e){
$('#int-5>ul').show();
$(".internal_menu>.limit>ul").animate({left:"-250px"},200);
$("#int-5>ul").animate({left:"250px"},200);
});
});
$(document).ready(function(){
$('#int-6-show').click(function(e){
$('#int-6>ul').show();
$(".internal_menu>.limit>ul").animate({left:"-250px"},200);
$("#int-6>ul").animate({left:"250px"},200);
});
});
$(document).ready(function(){
$('#int-7-show').click(function(e){
$('#int-7>ul').show();
$(".internal_menu>.limit>ul").animate({left:"-250px"},200);
$("#int-7>ul").animate({left:"250px"},200);
});
});
$(document).ready(function(){
$('#int-8-show').click(function(e){
$('#int-8>ul').show();
$(".internal_menu>.limit>ul").animate({left:"-250px"},200);
$("#int-8>ul").animate({left:"250px"},200);
});
});
$(document).ready(function(){
$('#int-9-show').click(function(e){
$('#int-9>ul').show();
$(".internal_menu>.limit>ul").animate({left:"-250px"},200);
$("#int-9>ul").animate({left:"250px"},200);
});
});
$(document).ready(function(){
$('#int-10-show').click(function(e){
$('#int-10>ul').show();
$(".internal_menu>.limit>ul").animate({left:"-250px"},200);
$("#int-10>ul").animate({left:"250px"},200);
});
});
$(document).ready(function(){
$('#int-11-show').click(function(e){
$('#int-11>ul').show();
$(".internal_menu>.limit>ul").animate({left:"-250px"},200);
$("#int-11>ul").animate({left:"250px"},200);
});
});
$(document).ready(function(){
$('.int_hide').click(function(e){
$(".internal_menu>.limit>ul").animate({left:"0px"},200);
$('.internal_menu>.limit>ul>li>ul').hide()
});
});
$(document).ready(function(){
$('.show').click(function(e){
$('.internal_menu>.limit').show();
$('.show2').show();
$(".show2").animate({left:"250px"},500);
$(".internal_menu>.limit").animate({left:"0px"},300);
});
});
$(document).ready(function(){
$('.show2').click(function(e){
$(".internal_menu>.limit").animate({left:"-250px"},300);
$(".show2").animate({left:"-250px"},500);
});
});