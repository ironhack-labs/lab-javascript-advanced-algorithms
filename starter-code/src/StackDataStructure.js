function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 100;
  this.isEmpty = function (){
    if (this.stackControl.length === 0) {
      return true;
    }
    else {
      return false;
    }
  };
  this.canPush = function() {
    if (this.isEmpty !== false) {
      return true;
    }
    else {
      return false;
    }
  };
//   // StackDataStructure.prototype.push = function() {
//   // if (!this.canPush) {
//   //   return "Stack Overflow";
//   // }
// };
  this.push = function(num) {
    this.stackControl.push(num);
    if (this.canPush) {
      return this.stackControl;
    }
    else {
      return "Stack Overflow";
    }
  };
  this.pop = function() {
    this.stackControl.pop();
    return "Stack Underflow";
  };

}


// function QueueDataStructure () {
//   this.queueControl = [];
//   this.MAX_SIZE = 8;
//   this.isEmpty = function (){
//     if (this.queueControl.length === 0) {
//       return false;
//     }
//       else return true;
// };
// this.canEnqueue = function() {
//   if (this.isEmpty !== true) {
//     return true;
//   }
//   else {
//     return false;
//   }
// };
//   this.enqueue = function(num) {
//   this.queueControl.enqueue(num);
//   return this.queueControl;
// };
//   this.dequeue = function () {
//   this.stackControl.dequeue ();
// };
//
// }
