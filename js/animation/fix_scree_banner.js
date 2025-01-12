(function() {

    var largeHeader ;

    // Main
    initHeader();

    function initHeader() {
        width = $( document ).width();
        height = window.innerHeight;
        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';
    }



    function resize() {
        width = $( document ).width();
        height = window.height;
        largeHeader.style.height = 100+'vh';
    }

$( window ).on("resize , load", function() {
    
	initHeader();
	resize();
  });


})();