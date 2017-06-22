var StackDataStructure = function () {

this.stackControl = [];
this.MAX_SIZE= 10;

};

StackDataStructure.prototype.isEmpty = function () {
  return this.stackControl.length === 0;
};

StackDataStructure.prototype.canPush = function(){
    if (this.stackControl.length === this.MAX_SIZE) {
      return false;
    }else {

      return true;
    }
};

StackDataStructure.prototype.push = function (item) {
    if(this.canPush()){
      this.stackControl.push(item);
      console.log(this.stackControl);
      return this.stackControl;
  }else {
      return 'Stack Overflow';
  }

};

StackDataStructure.prototype.pop = function () {
  if (this.stackControl.length === 0){
    return 'Stack Underflow';
  }else {
    console.log(this.stackControl);
  return this.stackControl.pop();
}
  //  return this.stackControl[this.stackControl.length-1];}
};
