function init(){
	// tabs
  $('#tabs a').on('click', function(e) {
    if ($($(this).attr('href')).hasClass('hide')) {
      $($(this).attr('href')).toggleClass('hide');
      $($(this).siblings().attr('href')).toggleClass('hide');
      $('#tabs a').toggleClass('disabled');
    }
  });
};

$(document).ready(init);
