class StackDataStructure{
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 8;
    }
    isEmpty() {
        if (this.stackControl.length === 0) {
            return true;
        } else {
            return false;
        }

        }
    canPush(value){
        if(this.stackControl.length < this.MAX_SIZE){
            return true;
        } else {
            return false;
        }
    } 
    push(element){
        if (this.stackControl.length === this.MAX_SIZE) {
            return 'Stack Overflow';
       } else  {
            this.stackControl.push(element);
            return this.stackControl;
        }  
        
    }
        pop(){
            if(this.stackControl.length === 0) {
                return 'Stack Underflow';
            } else {
                return this.stackControl.pop();
                
            } 
            }
}