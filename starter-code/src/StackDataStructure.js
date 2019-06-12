function Stack() {
    var stack 
    stack = new StackDataStructure() 

   this.stackControl = [];
   this.MAX_SIZE = 6;
    

// class StackDataStructure  {
//    constructor() 
   
   
    
  function isEmpty() {
  if(this.stackControl.length == 0) 
      {  return true
  }
       else   { 
            return false
    }

     }

   function canPush() {
     if(this.stackControl.length >= this.MAX_SIZE) 
     {return false}
     
         {return true
     }
}

    function push(item) {
   if(this.canPush() == true) {
      this.stackControl.push(item)
      return this.stackControl

   }
   else {
       return "Stack Overflow"
   }
     

}

   function pop(item) {

    if(this.isEmpty() === true){
       return "Stack Underflow" 
    }
 else {
    return this.stackControl.pop(item)
      
 }
 
    



 }

} 

