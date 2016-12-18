$( document ).ready(function(){
$('.sn2').hover(function(){
if($('.sn2').css("right")=="-100px"){
	$('.sn2').animate({right:'+=100px'},1000) ;
};
 
});

 $('.sn2').mouseleave(function(){
 	$('.sn2').animate({right:'-100px'},1000) ;
 });
 $('.sn').hover(function(){
if($('.sn').css("left")=="-100px"){
	$('.sn').animate({left:'+=100px'},1000) ;
};
 
});

 $('.sn').mouseleave(function(){
 	$('.sn').animate({left:'-100px'},1000) ;
 });
 });