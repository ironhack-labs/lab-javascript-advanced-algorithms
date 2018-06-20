function StackDataStructure () {

    this.stackControl = [];
    this.MAX_SIZE = 8;
}

StackDataStructure.prototype.isEmpty = function(){

    if (this.stackControl.length == 0){
        return true 
    }else {
        return false;
    }
}

StackDataStructure.prototype.canPush = function(){

    if (this.stackControl.length < this.MAX_SIZE){

        return true
    }else{
        return false
    }}


    StackDataStructure.prototype.push = function(e){

        if (this.stackControl.length >=  this.MAX_SIZE){
            return 'Stack Overflow'
        }else {
            this.stackControl.push(e)
            return this.stackControl;
        }
    }  

    StackDataStructure.prototype.pop = function(e){
        
        var last = this.stackControl[this.stackControl.length -1]
        
         if (!this.isEmpty()){    
            this.stackControl.pop(e)
            return last 
         }else {
             return 'Stack Underflow'
         }
    }

    


