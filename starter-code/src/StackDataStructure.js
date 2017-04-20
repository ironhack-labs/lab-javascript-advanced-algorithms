

function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE=10;
  this.isEmpty = function (){
    return true;
  };
  this.canPush = function (){
    return true;
  };
  this.push = function (){
    this.stackControl.push(19);
    this.isEmpty = function (){
      return false;
    };
  };
  this.pop = function (){};
}
