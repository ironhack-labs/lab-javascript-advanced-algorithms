function StackDataStructure () {
  this.stackControl= [];
  this.MAX_SIZE = 10;
  this.isEmpty = function(){
    return this.stackControl.length == 0;
  }
  this.canPush = function(){
    return this.stackControl.length < this.MAX_SIZE;
  }
  this.push = function(e){
    var max = this.canPush();
    if(max){
      this.stackControl.push(e)
      return this.stackControl
    }
    return 'Stack Overflow'
  }
  this.pop = function(){
    var empty =this.isEmpty()
    if(empty) return 'Stack Underflow';
    return this.stackControl.pop();
  }

}
