$(document).ready(function() {
 
 $(document).on("click",function(e){
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
 });

});