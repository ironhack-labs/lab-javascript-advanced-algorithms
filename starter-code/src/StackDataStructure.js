function StackDataStructure (stackControl,MAX_SIZE,isEmpty,canPush,push,pop) {
  this.stackControl =[];
  this.MAX_SIZE =0;
  this.isEmpty = function() {
// devuelve true o false porque es una comparacion
  return this.stackControl.length === 0;

  };
  this.canPush = function(item){
    this.stackControl.push(item);
    return true;
  };
  this.push = function(stack){
    
      return stack;
  };
  this.pop = function (){

  };


}
