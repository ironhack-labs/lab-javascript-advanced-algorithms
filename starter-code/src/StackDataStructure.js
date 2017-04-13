function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;
  this.isEmpty = function(){
      return this.stackControl.length === 0;

    };
  this.canPush = function(){
    if (this.stackControl.length < this.MAX_SIZE){
      return true;
    } else  {
      return false;
    }
    /*refactorizando puedo hacer:
    return this.stackControl.length < this.MAX_SIZE
    si es menos me devolver true si no false
    */
    };
  this.push = function(elements){
    this.stackControl.push(elements);

    if (this.stackControl.length > this.MAX_SIZE){
      return "Stack Overflow";
    }
    return this.stackControl;
  };


  this.pop = function(){
    this.stackControl.pop();
    if(this.stackControl.length === 0){
      return "Stack Underflow";
    }
  };


}
/*
this.push = function(x){
  this.stackControl.push(x);

El codigo anterior es lo mismo qeu el siguiente:

StackDataStructure.prototype.push = function(x){
  this.stackControl.push(x);
*/
