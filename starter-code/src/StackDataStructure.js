class StackDataStructure {
    stackControl = [];
    MAX_SIZE = 88;
    isEmpty() {
        if(this.stackControl.length == 0){
            return true;
        }
        else{
            return false;
        }
    };
    canPush() {
        if(this.stackControl < this.MAX_SIZE){
            return true;
        }
        else{
           return false;
        }
    };
    push(el){
        if (this.canPush()) {
            this.stackControl.push(el);
            return this.stackControl;

        } 
        
        else{
            return "Stack Overflow"
        }
        
    };
    pop(){
        
        if (this.stackControl == 0){
            return "Stack Underflow";
            
        }else {
            return this.stackControl.pop();
        }
    };
    
}
