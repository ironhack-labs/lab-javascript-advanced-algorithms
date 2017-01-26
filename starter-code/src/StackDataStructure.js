function StackDataStructure () {

  this.stackControl = [];
  this.MAX_SIZE = 8;
  this.isEmpty = function(){
    return this.stackControl.length === 0;
  };
  this.canPush = function(){
    return this.stackControl.length === this.MAX_SIZE ? false : true;
  };
  this.push = function(item){
    if(this.stackControl.length === this.MAX_SIZE) {
      return "Stack Overflow";
    } else {
      this.stackControl.push(item);
    return this.stackControl;}
   };
    this.pop = function(item){
      return this.isEmpty() ? 'Stack Underflow' : this.stackControl.pop(item);
  };
}
