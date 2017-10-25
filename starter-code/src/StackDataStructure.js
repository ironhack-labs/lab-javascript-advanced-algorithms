function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function(){
  if (this.stackControl.length == 0){
      return this.stackControl == 0;

  } else {
    return false;

  }

};
StackDataStructure.prototype.canPush = function(x){
  if (this.stackControl.length < this.MAX_SIZE){
      return true;
  }
  return false;
};
StackDataStructure.prototype.push = function(x){
//llamamos funcion canPush para comprobar el tamaño maximo
  if(this.canPush()){
    this.stackControl.push(x);
    return this.stackControl;
  }else{
    return "Stack Overflow";
  }
};

StackDataStructure.prototype.pop = function(x){

    if(this.isEmpty()){
          return "Stack Underflow";
    }else{
          return this.stackControl.pop();
    }





};
