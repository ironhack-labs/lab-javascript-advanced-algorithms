function StackDataStructure() {

  this.stackControl = [];

  this.MAX_SIZE = 10;

};


StackDataStructure.prototype.isEmpty = function() {
if(this.length==0){
  return true;
  }

  else if(this.length>0) {
    return false;
  }

};

StackDataStructure.prototype.canPush = function() {
    return true;

};


StackDataStructure.prototype.push = function() {
  this.stackControl.push(19);

};


StackDataStructure.prototype.pop = function() {

};


$(".btn-primary").on("click", function() {
  var howmany = $(".form-control:input")
    $(".btn-default:last-child").removeClass("btn-default").addClass("btn-primary");
});
