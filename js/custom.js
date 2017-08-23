
$(document).ready(function() {
    
        $('button#side-bar-toggle-btn').on('click', function(){
            
           		show_menu();
								
			});
	
            function show_menu(){
			
			$('#content #left_bar').toggle(500, function(){
			
				$(this).animate({'display' : 'block',left :'0.5em' });
				
			});
				
				
			
			}
	
	
	
        
        $('button#menu-toggle-btn').on('click', function(){
            
            $('nav ul#mobile-nav').slideToggle(500).css('display' , 'block');
            
        });
        
    
        
});



