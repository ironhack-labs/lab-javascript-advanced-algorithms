function disable(e) {
  $(e).prop('disabled', true);
}
function enable(e) {
  $(e).prop('disabled', false);
}

$(document).ready(function() {
  $('#tabs a').on('click', function(e) {
    if ($($(this).attr('href')).hasClass('hide')) {
      $($(this).attr('href')).toggleClass('hide');
      $($(this).siblings().attr('href')).toggleClass('hide');
      $('#tabs a').toggleClass('disabled');
    }
  });
});
