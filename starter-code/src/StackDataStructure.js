function StackDataStructure () {

  this.stackControl = [];
  this.MAX_SIZE = 0;
  this.isEmpty = function(){
    return this.stackControl.length === 0;
  };
  this.canPush = function(){
    if(this.stackControl.length > 0 && this.MAX_SIZE){
      return false;
    }else{
      return true;
    }
  };
  this.push = function(num){
    this.stackControl.push(num);
    return this.MAX_SIZE === 1 ? "Stack Overflow" : this.stackControl;
  };
  this.pop = function(){
    if(this.stackControl.length === 0){
      return 'Stack Underflow';
    }else{
      return this.stackControl.pop();
    }
  };

}

var queue;
queue = new QueueDataStructure();

//Stack.prototype.stackControl = [];

var stack;
stack = new StackDataStructure();
