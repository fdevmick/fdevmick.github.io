 	
$('.sidebarBtn').click(function(){
	$('.sidebar').addClass('active');
	$('.filter').addClass('filteractive');

})

		  	
$('.sidebarClose').click(function(){
	$('.sidebar').removeClass('active');
	$('.filter').removeClass('filteractive');
})


$('.big-banner').slick({
	arrows: false,
	autoplay: true,
	infinite: true,
	speed: 1000,
	autoplaySpeed: 6000
});	

		