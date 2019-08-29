function StackDataStructure() {

  this.stackControl = [];
  this.MAX_SIZE = 10;

  this.isEmpty = function () {
    return this.stackControl.length == 0;
  }

  this.canPush = function () {
    return this.MAX_SIZE > this.stackControl.length;
  }

  this.push = function (stackEl) {
    if(this.canPush()){
      this.stackControl.push(stackEl);
      return this.stackControl;
    } else{
      return "Stack Overflow";
    }   
  }

  this.pop = function () {
    if(!this.isEmpty()){
      return this.stackControl.pop();
    }else{
      return "Stack Underflow"
    }
  }
}