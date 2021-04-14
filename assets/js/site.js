// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

/*button submit */
function mySubmission() {
  alert('Thank you for signing this petition, share with your friends to help save the whales!');
}
