function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;

  this.isEmpty = function (){
    if (this.stackControl.length > 0) return false;
    return true;
  };
  this.canPush = function (){
    if (this.stackControl.length < this.MAX_SIZE) return true;
    else return false;
  };
  this.push = function (item){
    if (!this.canPush()){
      return "Stack Overflow";
    }
    this.stackControl.push(item);
    return this.stackControl;
  };
  this.pop = function (){
    if (this.isEmpty()) return "Stack Underflow";
    return this.stackControl[this.stackControl.length - 1];
  };

}
