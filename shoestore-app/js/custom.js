
$(document).ready(function() {

	var $mainmenu = $('button#side-bar-toggle-btn');
	
	$mainmenu.on('click', function(event){

		event.preventDefault();

		show_menu();

});
	

function show_menu(){

	// create menu variables
	var slideoutMenu = $('#content #left_bar');
	var slideoutMenuWidth = $('#content #left_bar').width();

	// toggle open class
	slideoutMenu.toggleClass("open");

	// slide menu
	if (slideoutMenu.hasClass("open")) {
		slideoutMenu.animate({
			left: "0px"
		});	
	} else {
		slideoutMenu.animate({
			left: -slideoutMenuWidth
		}, 500);	
	}
}


//menu
$('button#menu-toggle-btn').on('click', function(event){

	event.preventDefault();

	$('nav ul#mobile-nav').slideToggle(500).css('display' , 'block');

});



});
