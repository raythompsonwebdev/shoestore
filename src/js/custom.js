
// $(document).ready(function() {

// 	var $mainmenu = $('button#side-bar-toggle-btn');
	
// 	$mainmenu.on('click', function(event){

// 		event.preventDefault();

// 		show_menu();

// 	});
	

// 	function show_menu(){

// 		// create menu variables
// 		var slideoutMenu = $('#content #left_bar');
// 		var slideoutMenuWidth = $('#content #left_bar').width();

// 		// toggle open class
// 		slideoutMenu.toggleClass("open");

// 		// slide menu
// 		if (slideoutMenu.hasClass("open")) {
// 			slideoutMenu.animate({
// 				left: "0px"
// 			});	
// 		} else {
// 			slideoutMenu.animate({
// 				left: -slideoutMenuWidth
// 			}, 500);	
// 		}
// 	}

// });



var menuToggle = document.getElementById('menu-toggle-btn');

menuToggle.addEventListener('click', function(event){

	event.preventDefault();

	// create menu variables
	var slideoutMenu = document.getElementById('#mobile-nav');

	var slideoutMenuHeight = slideoutMenu.offsetHeight;
	
	// toggle open class
	slideoutMenu.classList.toggle("open");

	slideoutMenu.style.transition = 'all 0.3s ease-in 0s';

	// slide menu
	if (slideoutMenu.classList.contains("open")) {

		slideoutMenu.style.top = "0px";
		

	} else {

		
		slideoutMenu.style.transition = 'all 0.3s ease-in 0s';
		slideoutMenu.style.top = -slideoutMenuHeight + 'px';
	}


});