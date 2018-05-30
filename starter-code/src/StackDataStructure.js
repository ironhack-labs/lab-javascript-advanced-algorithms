
//create stack constructor

function StackDataStructure() {
  this.stackControl = [];
  this.MAX_SIZE = 0;
  this.isEmpty = function(){
    return (this.stackControl.length === 0)
  }
  this.canPush = function(){
    return (this.isEmpty());
  }
  this.push = function(element){
    
    if (this.stackControl.length === this.MAX_SIZE && this.MAX_SIZE !=0) return 'Stack Overflow';
    this.stackControl.push(element);
    return this.stackControl;
  }
  this.pop = function(){
    if (this.stackControl.length === 0) return "Stack Underflow";
    var index = this.stackControl.length-1
    return this.stackControl.pop(this.stackControl[index]);
  }
  }
  
