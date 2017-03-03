
$(document).ready(function() {
    
        $('div#side-bar-toggle-btn').bind('click', function(){
            
            $('#content #left_bar').slideToggle(500);
            
        });
        
        $('div#menu-toggle-btn').bind('click', function(){
            
            $('nav ul#mobile-nav').slideToggle(500).css('display' , 'block');
            
        });
        
    
        
});



