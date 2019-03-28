class StackDataStructure {
        constructor(){
            this.stackControl = [];
            this.MAX_SIZE = 5;
        }

        isEmpty() {
            if (this.stackControl.length === 0) {
                return true; 
            }
            else {return false;}
        }

        canPush() {
            if(this.stackControl.length < this.MAX_SIZE) {
                return true;
            }
            else {return false;}
        }

        push(element) {
            if(!this.canPush()){return "Stack Overflow";}
            else {
                this.stackControl.push(element);
                return this.stackControl;
            } 

        }

        pop(){
            if(this.isEmpty()) return 'Stack Underflow';
            return this.stackControl.pop();
        }  
}

 