$(document).ready(function() {


  $('.addstack').on('click', function() {

      $("#stack .list-group-item:last").addClass("active");
      $("#stack .list-group-item:last").removeClass("list-group-item");

  });

  $('.stackdel').on('click', function() {

  $("#stack .active:first").addClass('list-group-item');
  $("#stack .active:first").removeClass('active');

    });
  });
