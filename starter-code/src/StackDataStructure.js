function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;

}

StackDataStructure.prototype.isEmpty = function () {
  if(this.stackControl.length == 0){
    return true;
  }else{
      return false;
  }
};
StackDataStructure.prototype.canPush = function () {
  if(this.stackControl.length < this.MAX_SIZE){
    return true;
  }else{
    return false;
  }
};
StackDataStructure.prototype.push = function () {

};
StackDataStructure.prototype.pop = function () {

};
