function StackDataStructure () {
  
  this.stackControl = [];
  
  this.MAX_SIZE = 10;

  StackDataStructure.prototype.isEmpty = function(element){
      if (this.stackControl.length == 0){
        // return "Stack Underflow";
       return true
      } else {
        this.stackControl.pop(element);
      }
        
  };
  StackDataStructure.prototype.canPush = function(elemet){
        if (this.stackControl.length !== this.MAX_SIZE){
        //    return "Stack Overflow"
        return true
        } else {
            this.stackControl.push(elemet);
        }
        
  };
}
