function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;
//-----------------------------------STACK------------------------------------//
//---------------------------------functions----------------------------------//
////////////////////////////////////////////////////////////////////////////////
  this.isEmpty = function(){
   if (0 === this.stackControl.length){
     return true;
   } else if (this.stackControl.length >= 1){
     return false;  }};

  this.canPush = function(){
    if (this.stackControl.length >= this.MAX_SIZE){
       return false;
    }  return true; };

  this.push = function(element){
    if (this.canPush() === true){
      this.stackControl.push(element);
      return this.stackControl; } else {
        return "Stack Overflow";
      }
    };

  this.pop = function(){
    if (this.isEmpty() === true){
      return "Stack Underflow";
    }
    return this.stackControl.pop();
    };

}
