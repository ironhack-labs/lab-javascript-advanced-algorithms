function StackDataStructure () {

     this.stackControl = []
     this.MAX_SIZE = 9

     this.isEmpty = function (){
         if (this.stackControl.length === 0) {
             return true
         } else return false
     }

    this.canPush = function(){
        if(this.stackControl.length<this.MAX_SIZE) return true
        return false
    } 

    this.pop = function(){
        if(this.stackControl.length == 0) return "Stack Underflow"
        return this.stackControl.pop();
    }

    this.push = function(element){
        if(this.stackControl.length >= this.MAX_SIZE) return "Stack Overflow"
        else {
        this.stackControl.push(element) 
        return this.stackControl
        }
    }
}


