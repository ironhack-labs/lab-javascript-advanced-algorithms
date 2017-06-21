function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;

}

StackDataStructure.prototype.isEmpty = function() {
  var response;
  if(this.stackControl.length === 0){
    response = true;
  } else {
    response = false;
  }
  return response;
};

StackDataStructure.prototype.canPush = function() {
  var response;
  if(this.stackControl.length < this.MAX_SIZE){
    response = true;
  } else {
    response = false;
  }
  return response;
};

StackDataStructure.prototype.push = function(element) {
  var canPush = this.canPush(),
      response;
  if(canPush){
    this.stackControl.push(element);
    response = this.stackControl;
  } else {
    response = "Stack Overflow";
  }
  return response;
};

StackDataStructure.prototype.pop = function() {
  var response;
  if(this.stackControl.length !== 0){
    response = this.stackControl.pop();
  } else {
    response = 'Stack Underflow';
  }
  return response;
};
