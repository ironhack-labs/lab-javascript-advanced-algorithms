$(document).ready(function () {
  var s = new StackDataStructure(5);
  var maxSize = s.MAX_SIZE;
  let html = '';
  for (let i = 0; i <= maxSize; i++) {
    html += `<div class='list-group-item' id='${i}'>
      </div>`
  };

  document.querySelector('.list-group').innerHTML = html;

  $('.add').on('click', function () {
    var newTack = $(".input").val();
    s.stackControl.push(newTack);
    console.log(s.stackControl);
    for (var i = 0; i < s.stackControl.length; i++) {
      var selector = '#' + i;
    }
    $(selector).text(s.stackControl[s.stackControl.length - 1])
 });

 $('.take').on('click', function () {
  s.stackControl.pop();
  // for (let i = 0; i < s.stackControl.length; i++) {
    var selector = '#' + s.stackControl.length;
  // }
  $(selector).text("")
});

 



});