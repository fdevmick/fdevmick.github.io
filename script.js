$(document).ready(function(){


$('.burger-btn').click(function(){
	$('.side-menu').addClass('active-menu');
})
  	
$('.close-btn').click(function(){
	$('.side-menu').removeClass('active-menu');
})



$('.project-1').hover(function(){
	$('.btn1').toggleClass('active');
})

$('.project-2').hover(function(){
	$('.btn2').toggleClass('active');
})

$('.project-3').hover(function(){
	$('.btn3').toggleClass('active');
})


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.line',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


});