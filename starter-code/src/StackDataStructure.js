function StackDataStructure () {
  let nmx = 10;
  this.stackControl = [];
  this.MAX_SIZE = nmx;
  this.isEmpty = function(){
    let valEm =  true;
    return this.stackControl.length === 0 ? valEm : false;
  }
  this.canPush = function(){
    let valPu = true;
    return this.stackControl.length < this.MAX_SIZE ? valPu : false;
  }
  this.push = function(elem){
    if(this.stackControl.length < this.MAX_SIZE){
      this.stackControl.push(elem);
      return this.stackControl;
    } else {
      return 'Stack Overflow';
    }
  }
  this.pop = function(){
    if(this.stackControl.length === 0){
      return 'Stack Underflow';
    } else {
      return this.stackControl[this.stackControl.length - 1];
    }
  }
}