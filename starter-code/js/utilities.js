function updateDataStructure(wrapper, data, increment, reverse = true) {
  data.length = 8;
  if (reverse) {
    data.reverse();
  }

  for (var i = 0; i < data.length; i++) {
    var childIndex = i + 1 + increment;
    var child = wrapper.find("li:not(.error):nth-child(" + childIndex + ")");

    if (data[i]) {
      child
        .removeClass("list-group-item-secondary")
        .addClass("list-group-item-primary")
        .html(data[i]);
    } else {
      child
        .removeClass("list-group-item-primary")
        .addClass("list-group-item-secondary")
        .html("&nbsp;");
    }
  }
}

function showError(element, btn) {
  element.removeClass("d-none");
  btn.attr("disabled", true);
}

function hideError(element, btn) {
  element.addClass("d-none");
  btn.attr("disabled", false);
}
