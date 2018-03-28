function StackDataStructure() {
  that = this;
  this.stackControl = [];
  this.MAX_SIZE = 8;
  this.cont = this.MAX_SIZE;
}
StackDataStructure.prototype.isEmpty = function() {
  return this.stackControl.length === 0;
};
StackDataStructure.prototype.canPush = function() {
  return this.stackControl.length < this.MAX_SIZE;
};
StackDataStructure.prototype.push = function(i) {
  if (this.stackControl.length+1 < this.MAX_SIZE) {
    this.stackControl.push(i);
    return this.stackControl;
  } else if (this.stackControl.length < this.MAX_SIZE){
    this.stackControl.push("Stack Overflow");
    return "Stack Overflow";
  }else
    return "Maximo alcanzado";
};
StackDataStructure.prototype.pop = function() {
  if (this.stackControl.length === 0) {
    this.stackControl[0] = "Stack Underflow";
    return "Stack Underflow";
  } else {
    return this.stackControl.pop();
  }
};
var pepe = new StackDataStructure();
// console.log(pepe.push(8));
$(".btn-add").click(function () { 
    
    pepe.push($("input").val());
    $(".row:nth-of-type("+ pepe.cont +") .slot").text(pepe.stackControl[pepe.stackControl.length-1]);
    $("input").val("");
    if (pepe.canPush())
      pepe.cont--;
})
$(".btn-take").click(function () {   
  
  pepe.pop();
  $(".row:nth-of-type("+ pepe.cont +") .slot").text("");
  if (pepe.isEmpty()){
    pepe.cont++; 
  } else {
    $(".row:nth-of-type("+ pepe.cont +") .slot").text("Stack Underflow");
  }
})

