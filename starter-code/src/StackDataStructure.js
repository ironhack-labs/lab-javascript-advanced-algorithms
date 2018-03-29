function StackDataStructure () {
  this.MAX_SIZE = 9;
  this.stackControl = [];
  this.position = 9;
}

StackDataStructure.prototype.canPush = function() {
    if (this.stackControl.length < this.MAX_SIZE) {
      this.push();
      return true;
    } else {
      return false;
    }
  }
  
StackDataStructure.prototype.isEmpty = function() {
    return (this.stackControl.length == 0)
}

StackDataStructure.prototype.push = function(i) {
  if(this.stackControl.length < this.MAX_SIZE) {
    this.stackControl.push(i);
    return this.stackControl;
  } else {
    this.stackControl.push("Stack Overflow");
    return "Stack Overflow";
  }
}
StackDataStructure.prototype.pop = function() {
  if(this.stackControl.length == 0) {
    return "Stack Underflow"}
    else {
      return this.stackControl.pop(); 
    }
 }

 var stack = new StackDataStructure();

 $("#add").click(function(){
   /* console.log("1"); */
   stack.push($("input").val());
   $("div div .row:nth-of-type("+stack.position+") .slots").text(stack.stackControl[stack.stackControl.length-1]);
   debugger;
   $("div div .row:nth-of-type("+stack.position+") .slots").css("backgroundColor", "#30ACED").css("text-align","center").css("font-size","20px").css("color","white")
   stack.position--;
 })

 $("#take").click(function(){
  /* console.log("2"); */
})