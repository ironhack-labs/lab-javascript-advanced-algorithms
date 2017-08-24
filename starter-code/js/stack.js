$(document).ready(function() {
  var stack = new StackDataStructure()

  $("#stack-add").on("click", function(e) {
    e.preventDefault()
    if (stack.canPush()) {
      var $a = $("#stack-value").val()
      stack.push($a)
      var b = ".block-" + stack.stackControl.length
      $(b).removeClass("grey")
      $(b).addClass("btn-primary")
      $.each(stack.stackControl, function(a, i){
          $(b).html(i)
      })
    } else {
      $('.block-8').removeClass('grey')
      $('.block-8').addClass('red')
      $('.block-8').html(stack.push())
    }
  })
})
