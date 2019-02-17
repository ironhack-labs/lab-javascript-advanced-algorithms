function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 7;
}

 StackDataStructure.prototype.isEmpty = function (){
       if (this.stackControl.length === 0){
           return true
       }
       else{
           return false
       }
     }


 StackDataStructure.prototype.canPush = function (){
        if (this.stackControl.length < this.MAX_SIZE){
            return true
        }
        else if (this.stackControl.length === this.MAX_SIZE){
            return false
        }
      }
 
 StackDataStructure.prototype.push = function (s){
       if (this.stackControl.length < this.MAX_SIZE){
       this.stackControl.push(s);
       return this.stackControl
      }
      else {
        return ('Stack Overflow')
      }}

 StackDataStructure.prototype.pop = function (){
    if (this.stackControl.length<1){
        return ('Stack Underflow')
    } 
    
    return this.stackControl.pop()
     
       }      



