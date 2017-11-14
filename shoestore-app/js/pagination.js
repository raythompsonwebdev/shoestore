  $(document).ready(function(){
  
  $('#results').before('<form id="pag_search" ><label>New Products</label> <select name="gender"><option value="Men">Men</option><option value="Women">Women</option>      <option value="Women">Children</option></select></form><nav id="pagination"></nav>');
  
  var rowsShown = 4;
  var rowsTotal = $('#results div').length;
  var numPages = Math.round(rowsTotal/rowsShown);
   
  
for(i = 0;i<numPages;i++) {
		var pageNum = i + 1;
		$('#pagination').append('<a href="#" rel="'+i+'">'+pageNum+'</a> ');
	}
      
    $('#results div').hide();
    $('#results div:first').show();
    $('#results div').slice(0, rowsShown).show();

    $('#pagination a:first').addClass('active');
    
       $('#pagination a').bind('click', function(){
    	$('#pagination a').removeClass('active');
    	$(this).addClass('active');
    	var currPage = $(this).attr('rel');
    	var startItem = currPage * rowsShown;
    	var endItem = startItem + rowsShown;
           
    $('#results div').css('opacity','0.0').hide().slice(startItem, endItem).css('display','block').animate({opacity:1}, 300, function (){
    	
    });

    });
  
  });
    
