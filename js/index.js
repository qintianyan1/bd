$(function(){
	var sliderBox=$('.home-banner-wrapper');
	var slider=$('.home-banner-wrapper li');
	var homeBig=$('.home-big-banner-out');
	var left=$('.home-banner-dir-left');
	var right=$('.home-banner-dir-right');
	var sw=slider.width();
	var swl=slider.length;

	function move(){
		if(sliderBox[0].style.left==((-(swl-1)*sw)+"px")){
			sliderBox.animate({
			left:0
		})
		}
		else{
			sliderBox.animate({
			left:'-='+sw
		})
		}
		// console.log(sliderBox[0].style.left,(-(swl-1)*sw))
	}
	var t=setInterval(move,3000);
	homeBig.hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval(move,2000);
	})
	left.click(function(){
		sliderBox.stop(true);
		move();
		return false;
	})
	right.click(function(){
		sliderBox.stop(true,true);
		move();
		return false;
	})

	var arr=[];
	$('.goods-block').each(function(i,obj){
		arr.push($(this).offset().top)
	});
	$(window).scroll(function(){
		var h=$(window).scrollTop();
		$('.goods-block').each(function(i,obj){
			
			// console.log(h,arr[$(this).index()-2])
			if(h+100>arr[i]){
				$(this).find('.lazy').not('img[src]').lazyload({
					effect: "fadeIn"
				});
			}
		// $(this).find('img').lazyload({
		// 	effect:'fadeIn'
		// })
		
	})
})
})