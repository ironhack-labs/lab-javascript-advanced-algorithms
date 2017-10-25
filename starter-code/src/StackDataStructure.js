function StackDataStructure() {

  this.stackControl = [];

  this.MAX_SIZE = 10;

};


StackDataStructure.prototype.isEmpty = function() {
if(this.length>0){
  return false;
  }

  else if(this.length==0) {
    return true;
  }

};

StackDataStructure.prototype.canPush = function() {
    return true;
    if(this.StackDataStructure.length==10){
      return false
    }



};


StackDataStructure.prototype.push = function() {
  this.stackControl.push();
  this.prototype.isEmpty();
  return this.stackControl;

};


StackDataStructure.prototype.pop = function() {
  return "Stack Underflow";

};


$(".btn-primary").on("click", function() {

    $(".btn-default:last-child").removeClass("btn-default").addClass("btn-primary");
});

$(".btn-danger").on("click", function() {

    $(".btn-primary:last-child").removeClass("btn-primary").addClass("btn-default");
});
