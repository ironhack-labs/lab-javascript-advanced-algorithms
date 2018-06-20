function StackDataStructure() {
     this.stackControl = [];
     this.MAX_SIZE = 8;
}
StackDataStructure.prototype.isEmpty = function () {
     if (this.stackControl.length <= 0) {
          return true;
     }
     return false;
}

StackDataStructure.prototype.canPush = function () {
     if (this.stackControl.length == this.MAX_SIZE) {
          return false;
     }
     return true;
}

StackDataStructure.prototype.push = function (element) {
     if (this.canPush()) {
          this.stackControl.push(element);
          return this.stackControl;
     }
     return "Stack Overflow";
}

StackDataStructure.prototype.pop = function () {
     if (!this.isEmpty()) {
          return this.stackControl.pop();
         }
     return "Stack Underflow";
}