function StackDataStructure () {
  this.stackControl=[];
  this.MAX_SIZE=19;
  this.isEmpty = function() {
    if(this.stackControl.length>=1) {
      return false;
    } else {
      return true;
    }
  };
  this.canPush = function() {
    return true;
  };
  this.push = function() {
    this.stackControl.push(19);
    return this.stackControl;
    /*if (this.stackControl.push(19)){
      return this.stackControl[0];
    }
    else {
     return this.stackControl;
   }*/
    this.stackControl.push(88);
    return this.stackControl;
  };
  this.pop = function() {};
}
