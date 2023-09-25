$(document).ready(function(){


//arrow down annimation
$('.btn').hover(function(){
  $('.arrow').toggleClass('bounce');
})

//scroll to projects
$(".btn").click(function() {
     $('html, body').animate({
         scrollTop: $(".project").offset().top
     }, 1000);
 });

//Banner parallax
$(document).on('scroll', function(){
    $('.banner-left').css("top", Math.max(0 - 0.15*window.scrollY) + "px");
})
  
window.addEventListener("scroll",()=>{
  document.querySelector(".banner").style.opacity = `${(-window.scrollY + 600) * .004}`
 
})

//parallax scroll project section
$(document).on('scroll', function(){
    $('.project-title h2').css("left", Math.max(400 - 0.35*window.scrollY, 100) + "px");
})

window.addEventListener("scroll",()=>{
  document.querySelector(".project").style.opacity = `${(-window.scrollY + 2500) * .004}`
})

//project Hover
$('.project-card').hover(function(){
  $('.project-description').toggleClass('show-description');
})



});

