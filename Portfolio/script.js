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

//Banner image annimation
$('#myDiv').animate({
      height: '500px',
      width: '715'
},800);


$(document).on('scroll', function(){
    $('.project-title h2').css("left", Math.max(400 - 0.40*window.scrollY, 100) + "px");
})
  
//parallax scroll banner
window.addEventListener("scroll",()=>{
  document.querySelector(".banner-right").style.backgroundSize = `${window.scrollY + 715 }px`
  document.querySelector(".banner-left h1").style.opacity = `${(-window.scrollY + 600) * .004}`
})


//parallax scroll project section
window.addEventListener("scroll",()=>{
  document.querySelector(".project").style.opacity = `${(-window.scrollY + 2500) * .004}`
})

});

