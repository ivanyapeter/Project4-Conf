// Remove input field on submission of contact form
$(document).ready(function() {
  $('.contact-submit').on('click', function() {
    $('.contact-form').remove();
    $('.contact-status').html("We'll keep you updated!");
  });
});
