$( document ).ready(function(){

 var bdy=$("body"),
 bdywidth=bdy.width(),
 rDivWidth=bdywidth*4/10,
 seenW=rDivWidth+10,
 zro=seenW-seenW,seencheck=-seenW,seencheck=seencheck+'px';
 
 $('.sn2').css({"width":rDivWidth,"right":-seenW});

$('.sn2').hover(function(){
if($('.sn2').css("right")==seencheck){  

	$('.sn2').animate({right:zro},1000) ;
};
 
});

 $('.sn2').mouseleave(function(){
 	$('.sn2').animate({right:-seenW},1000) ;
 });



/*$('.sn2').hover(function(){
if($('.sn2').css("right")=="-100px"){
	$('.sn2').animate({right:'+=100px'},1000) ;
};
 
});

 $('.sn2').mouseleave(function(){
 	$('.sn2').animate({right:'-100px'},1000) ;
 });*/
 $('.sn').hover(function(){
if($('.sn').css("left")=="-100px"){
	$('.sn').animate({left:'+=100px'},1000) ;
};
 
});

 $('.sn').mouseleave(function(){
 	$('.sn').animate({left:'-100px'},1000) ;
 });
 
 
 // for sn2 to be as big as 40% of body
 

 
 
 
 
 
 });