
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


$("#results").before('<nav id="pagination"></nav>');

    var rowsShown = 4;
    var rowsTotal = $("#results div").length;
    var numPages = Math.round(rowsTotal / rowsShown);

    for (let i = 0; i < numPages; i++) {
      var pageNum = i + 1;
      $("#pagination").append(
        '<a href="#" rel="' + i + '">' + pageNum + "</a> "
      );
    }

    $("#results div").hide();
    $("#results div:first").show();
    $("#results div").slice(0, rowsShown).show();

    $("#pagination a:first").addClass("active");

    $("#pagination a").bind("click", function () {
      $("#pagination a").removeClass("active");
      $(this).addClass("active");
      var currPage = $(this).attr("rel");
      var startItem = currPage * rowsShown;
      var endItem = startItem + rowsShown;

      $("#results div")
        .css("opacity", "0.0")
        .hide()
        .slice(startItem, endItem)
        .css("display", "block")
        .animate({ opacity: 1 }, 300, function () {});
    });