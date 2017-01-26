function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 20;
  this.isEmpty = function() {
    if(this.stackControl.length === 0) {
      return true;
    }
    else {
      return false;
    }
  };
  this.pop = function(y) {
    if(this.stackControl.length > 0) {
      this.stackControl.pop(y);
    }
    else {
      return false;
    }
  };
}

StackDataStructure.prototype.canPush = function() {
  if(this.stackControl.length < this.MAX_SIZE) {
    return true;
  }
  else {
    return false;
  }
};

 StackDataStructure.prototype.push = function(x) {
   if(this.canPush) {
     this.stackControl.push(x);
   }
   else {
     return false;
   }
 };

 // StackDataStructure.prototype.push = function(x) {
 //   if(stack.stackControl.length === 1) {
 //     this.stackControl[19].push(x);
 //   }
 //   else {
 //     return false;
 //   }
 // };


 // StackDataStructure.prototype.push = function() {
 //   if (this.isEmpty === false) {
 //     return "That stack is not empty";
 //   }
 //   else {
 //     return false;
 //   }
 // };
