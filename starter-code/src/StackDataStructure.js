function StackDataStructure () {
  this.stackControl= [];
  this.MAX_SIZE = 8;
  this.isEmpty = function() {
    return (this.stackControl.length === 0)
  };
  this.canPush = function() {
    return (this.stackControl.length < this.MAX_SIZE)
  };

  this.push = function(element) {
    if (this.canPush()){
      this.stackControl.push(element);
      return this.stackControl;
    } else {
      return 'Stack Overflow';
    };
  };

  this.pop = function(){
    if (this.stackControl.length !== 0){
      var lastItem = this.stackControl.slice(-1)
      this.stackControl = this.stackControl.slice(0, this.stackControl.length-1);
      return parseInt(lastItem);
    } else {
      return 'Stack Underflow'
    }
  };

}
