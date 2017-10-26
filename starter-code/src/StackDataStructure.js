function StackDataStructure () {

this.stackControl = [];
this.MAX_SIZE = 5;
};

StackDataStructure.prototype.isEmpty = function isEmpty(){
if (this.stackControl.length = 0){
    return true;
  }else {
    return false;
  }
};
StackDataStructure.prototype.canPush = function canPush(){
  if (this.stackControl.lenth < this.MAX_SIZE){
    return true;
}
  };
StackDataStructure.prototype.push = function(name) {
  if(this.stackControl.length == this.MAX_SIZE){
    return "Stack Overflow";
  }else{
    this.stackControl.push(name);
  }
    return this.stackControl;

};

StackDataStructure.prototype.pop = function(){

};
