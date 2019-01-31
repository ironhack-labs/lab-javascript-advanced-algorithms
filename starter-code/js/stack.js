$(document).ready(function() {
  let newStack = new StackDataStructure(8)
  // var numLi = $(".list-item-group").length;
  

  for(let i = 0; i < newStack.MAX_SIZE; i++) {

    $('<li>', {
      class: "list-group-item",
      text: ""
    }).appendTo(".list-group")
  }

  $('.add-btn').click(function() {
    let txtValue = $('#add-to-stack').val();
    for(let i = $('.list-group-item').length - 1; i > 0; i++) {

    }
  })


  
//   $('.btn-primary').click(function () {
//     $('<li>', {
//       class: "list-group-item",
//       text: "Example Page"
//     }).appendTo(".list-group")
//   })
// })
})


