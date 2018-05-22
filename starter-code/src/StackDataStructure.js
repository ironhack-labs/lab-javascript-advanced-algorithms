function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 5;
}

StackDataStructure.prototype.isEmpty = function(){
  if(this.stackControl.length == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

StackDataStructure.prototype.canPush = function(){
  if(this.stackControl.length < this.MAX_SIZE -1)
  {
    return true;
  }
  else
  {
    return false;
  }
}

StackDataStructure.prototype.push =  function(element){
  if(this.canPush()){
    this.stackControl.push(element);
    return this.stackControl;
  }
  else{
    return "Stack Overflow";
  }
}

StackDataStructure.prototype.pop = function(){
  let value = this.isEmpty();
  if(!value)
  {
    return this.stackControl.pop();
  }
  else
  {
    return 'Stack Underflow';
  }
}

