function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 8;
}

StackDataStructure.prototype.isEmpty = function() {
  if (this.stackControl.length == 0) {
    return true 
  } else
  return false
}

StackDataStructure.prototype.canPush = function() {
  if (this.stackControl.length < this.MAX_SIZE) {
    return true
  } else{
    return false
}
}

StackDataStructure.prototype.push = function(element) {
  if (this.canPush() == false) {
    return "Stack Overflow";
  } else {
  this.stackControl.push(element);
  this.isEmpty;
  return this.stackControl;
}
}

StackDataStructure.prototype.pop = function() {
  var last = this.stackControl.pop();
  if (this.isEmpty() == true) {
    return "Stack Underflow"
  } else {
    return last;
  }
}

var stack = new StackDataStructure;

$(".btn-primary").click(function() {
  if (stack.push("element") == "Stack Overflow") {
    $("#9").toggleClass("overflow-form")
  } else {
    $("#"+stack.stackControl.length).toggleClass("full-form")
  }
}
)

$(".btn-danger").click(function() {
  $("#"+stack.stackControl.length).toggleClass("full-form")
  if (stack.pop("element") == "Stack Underflow") {
    $("#1").toggleClass("underflow-form")
  }
}
)

