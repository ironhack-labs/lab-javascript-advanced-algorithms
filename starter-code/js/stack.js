$(document).ready(function() {
  let newStack = new StackDataStructure(8)
  var numLi = $(".list-item-group").length;
  

  for(let i = 0; i < newStack.MAX_SIZE; i++) {

    $('<li>', {
      class: "list-group-item text-center",
      text: ""
    }).appendTo(".list-group")
  }

  $('#add-btn').click(function() {
    let txtValue = $('#add-to-stack').val();
    
    if($('.list-group-item').first().hasClass('full')) {
      $('<li>', {
        class: "list-group-item overflow text-center",
        text: "Stack Overflow!!"
      }).prependTo('.list-group')

    } else {
    $('.list-group-item').not('.full').last().addClass('full').text(txtValue)
    }
  })

  $('#take-btn').click(function() {
    
    
    $('.list-group-item').filter('.full').first().removeClass('full').empty();
  })

})


