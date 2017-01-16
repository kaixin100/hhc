//微信
$(document).ready(function(){

	$('.navbar-fixed .navber-tck ul li').mousemove(function(){
		$(this).find('.dropdown-menu').css("display","block");
	});
	$('.navbar-fixed .navber-tck ul li').mouseleave(function(){
		$(this).find('.dropdown-menu').css("display","none");
	});
});

//d导航
//.navbar-fixed .navbar-nav ul li
//.nav-english
$(document).ready(function(){
	 $('.navbar-fixed .navbar-nav span').css('opacity', '0');
   	 $('.navbar-nav > ul > li').hover(function () {
        $(this).find('ul').show();
        $(this).find('span:first').stop(true).animate(
    		{
    		    top: -14,
    		    opacity: 100
    		}, 100
    	);
        $(this).addClass('active');
    }, function () {
        $(this).find('ul').hide();
        $(this).find('span:first').stop(true).animate(
    		{
    		    top: 0,
    		    opacity: 0
    		}, 100
    	);
        $(this).removeClass('active');
    });

});

//轮播内菜单
$(function () {
	var navLi=$(".bann-forbx .bann-nav li");
	$(this).find(".bandesl-rg").hide();
	navLi.mouseover(function () {
		$(this).find(".bandesl-rg").show();
	})
	navLi.mouseleave(function(){
		$(this).find(".bandesl-rg").hide();
	})
})

//电商系统效果
$(document).ready(function(){
	var $recunali1 = $(".ecomerce-box .ecomebox-desl .ecomerce-desl");//当前li
	$(".ecomdesl-cerb").hide();
	$recunali1.hover(function(){
		 
		$(this).find('.ecomdesl-cerb').stop(false,false).slideDown(500);;//给li增加class
		
	},function(){
		$(this).find('.ecomdesl-cerb').stop(false,false).slideUp(500);//给li增加class
		
	});		
});

//精品推荐效果
$(document).ready(function(){
	var $recomedli1 = $(".recommend-box .recommend-desl li");//当前li
	$(".recomd-txt").hide();
	$recomedli1.hover(function(){
		 
		$(this).find('.recomd-txt').stop(false,false).slideDown(200);;//给li增加class
		
	},function(){
		$(this).find('.recomd-txt').stop(false,false).slideUp(200);//给li增加class
		
	});		
});

// 搜索效果
$(document).ready(function() {

	$(document).ready(function() {
		$tea = $(".search .tea.active")
		$time = $(".search .time.active")
		$series= $(".search .series.active")
		
		$(".search .tea").click(function(e) {
			e.preventDefault();

			var $this = $(this);
			$tea.toggleClass("active");

			$tea = $this;
			$tea.toggleClass("active");

		});
		
		$(".search .time").click(function(e) {
			e.preventDefault();

			var $this = $(this);
			$time.toggleClass("active");

			$time = $this;
			$time.toggleClass("active");

		});
		
		$(".search .series").click(function(e) {
			e.preventDefault();

			var $this = $(this);
			$series.toggleClass("active");

			$series = $this;
			$series.toggleClass("active");

		});
		
		
		
	});

});
