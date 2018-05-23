function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 10;
    this.isEmpty = function(){
        if(this.stackControl.length == 0  ){
            return true;
        }else if(this.stackControl.length > 0){
            return false;
        }
    }
    this.canPush = function(){
        if(this.stackControl.length >= this.MAX_SIZE){
            return false
        } else {
            return true;    
        }
    }
    this.push = function(numero){
        
        if(this.canPush()){
            this.stackControl.push(numero);
            return this.stackControl;
        }else {
            return "Stack Overflow";
        }
    }
    this.pop = function(){
            if(this.isEmpty()){
               return "Stack Underflow";
            } else{
                return this.stackControl[this.stackControl.length - 1]; 
            }
    }
}

