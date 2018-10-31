function StackDataStructure () {
  
  this.stackControl = [];
  
  this.MAX_SIZE = 10;

  StackDataStructure.prototype.isEmpty = function(element){
      if (this.stackControl.length == 0){
       
       return true
      } else {
       
        return false;
      }
        
  };
  StackDataStructure.prototype.canPush = function(elemet){
        if (this.stackControl.length !== this.MAX_SIZE){
        
        return true
        } else {
            
            return false;
        }
        
  };
  StackDataStructure.prototype.pop = function(elemet){
    if (this.isEmpty == false){
        
    return this.stackControl.pop(element);
    } else {
        return "Stack Underflow";
    }
    
};
  
StackDataStructure.prototype.push = function(elemet){
    if (this.canPush == true){
     
    return this.stackControl.push(element);
    } else {
        
        return "Stack Overflow";
        
    }
    
};
  
}
