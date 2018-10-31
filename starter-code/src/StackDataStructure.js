
function StackDataStructure () {
    this.stackControl = []
    this.MAX_SIZE = 10;
   
    StackDataStructure.prototype.canPush = function(){
       if (this.stackControl.length === this.MAX_SIZE){
           return false
       }
       else {
           return true
       }
    }
    StackDataStructure.prototype.isEmpty = function(){
        if (this.stackControl.length === 0){
           return true
        }
        else{
            return false
        }
    }
    StackDataStructure.prototype.push = function(add){

        if (this.canPush()!== false){
            this.stackControl.push(add)
            return this.stackControl
            }
        else {
            return 'Stack Overflow'
        }
        
    
    }
    StackDataStructure.prototype.pop = function(remove){
        if (this.isEmpty() === false){
    //    this.stackControl.pop(remove)
       return this.stackControl[this.stackControl.length - 1]
        }
        else{
        return "Stack Underflow"
        }
    }
}

stack = new StackDataStructure();