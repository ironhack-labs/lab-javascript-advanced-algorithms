class StackDataStructure {
    constructor() {
        this.stackControl = [];
        this.MAX_SIZE = 10; 
    } 
        isEmpty() {
            if (this.stackControl.length > 0) {
                return false
            } else {
                return true
            }       
        }

        canPush() {
    
            if (this.stackControl.length === this.MAX_SIZE) {
                return false } else {
                  this.stackControl.Push(element);
                }
            }

        push(element) {


            if (this.stackControl.length === this.MAX_SIZE) {
              return "Stack Overflow" } else {
                this.stackControl.push(element);
              }
         
            return this.stackControl;
          }


        pop() {

            if (this.stackControl.length === 0) {
                return "Stack Underflow" }     
                }
            
            


}



        //stack.MAX_SIZE another property (not a function)