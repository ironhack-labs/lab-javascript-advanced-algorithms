function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 8;
  this.isEmpty = function() {
    if (this.stackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  };
  this.canPush = function() {
    if (this.stackControl.length < this.MAX_SIZE) {
      return true;
    } else {
      return false;
    }
  };
  this.push = element => {
    // var result = this.canPush ? (this.stackControl.push(element),  this.stackControl) : ("Stack Overflow", element);
    // return result
    // if (this.canPush == false ) {
    //     return "Stack Overflow"
    // }
    // if (this.stackControl.length >= this.MAX_SIZE){
    //     return "Stack Overflow", false
    // } else
    // this.stackControl += params ;

    if (this.canPush()) {
      this.stackControl.push(element);
      return this.stackControl;
    } else {
        alert("Stack Overflow");
      return "Stack Overflow";
    }

    // if (this.stackControl.length <= this.MAX_SIZE) {
    //     this.stackControl.push(params);
    // return this.stackControl
    // }else {
    //     return "Stack Overflow"
    // }

    // this.stackControl.push(params);
    // return this.stackControl
  };
  this.pop = function() {
    if (this.isEmpty()) {
        alert("Stack Underflow");
      return "Stack Underflow";
    } else {
      return this.stackControl.pop();
    }
  };
}

// StackDataStructure.prototype.push = () =>{

//     if (this.canPush() == false) {
//         return "Stack Overflow";
//     } else {
//     this.stackControl.push(element);
//     return this.stackControl;
//     }
// }
