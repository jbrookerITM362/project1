// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function myFunction() {
  var x = document.getElementById("intro");
  x.style.fontSize = "16px"; 
  x.style.color = "#334d4d"; 
}

/*button submit */
function mySubmission() {
  alert('Thank you, our newsletter will be sent to your email shortly. Save the whales!');
}
