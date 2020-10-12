$(document).ready(function(){
 $('.header').height($(window).height()); // header on full screen
})

$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 })

 function seeMore()
{
	var elmnt = document.getElementById("about");
	elmnt.scrollIntoView({block: "center", behavior: "smooth"});
}

