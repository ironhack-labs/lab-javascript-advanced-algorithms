function StackDataStructure () {
  
 this.stackControl = [];
 console.log(this.stackControl);
 
 this.MAX_SIZE = 10;

 this.isEmpty = function () {
   if (this.stackControl.length == 0) {
     return true;
   } else {
     return false;
   }
 };

 this.canPush = function () {
   if (this.stackControl.length >= this.MAX_SIZE) {
     return false;
   } else {
     return true;
   }
 };

 this.push = function (e) {
   if (this.canPush()) {
     this.stackControl.push(e);
     return this.stackControl;
   } else {
     return "Stack Overflow";
   }
 }

 this.pop = function () {
  if (this.isEmpty() !== true) {
  return this.stackControl.pop();
 } else {
  return "Stack Underflow";
 }
}

}
