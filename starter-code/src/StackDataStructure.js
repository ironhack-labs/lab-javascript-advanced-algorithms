class StackDataStructure{
        constructor(){
        this.stackControl=[];
        this.MAX_SIZE = 7;
        }  


        isEmpty(){

            if(this.stackControl.length === 0){
                return true
            }
            else {
                return false
            }
        }

        canPush(){
            if (this.stackControl.length === this.MAX_SIZE){
                return false 
            }
                return true
        }

        push(x){
            if (this.stackControl.length === this.MAX_SIZE){
                return 'Stack Overflow' 
            }
         
                this.stackControl.push(x)
                return this.stackControl
              
        }

        pop(){
            if (this.stackControl.length === 0){
                return 'Stack Underflow' 
            }

            return this.stackControl.pop()
           
        }
}