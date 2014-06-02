// Foundation 5 Activate! 
$(document).foundation();

// On page load, do this
$(document).ready(function(){
  
  // Your Scripts
$(document.body).on("open.fndtn.clearing", function(event) {
  console.info("About to open thumbnail with src ", $('img', event.target).attr('src'));
});

});



 	