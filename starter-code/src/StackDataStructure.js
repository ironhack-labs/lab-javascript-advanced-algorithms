class StackDataStructure {

        constructor (stackControl, MAX_SIZE) { 
            this.stackControl = [];
            this.MAX_SIZE = 8; 
        }

        isEmpty () {
            if (this.stackControl.length === 0) {return true
        } else {
            return false 
        }
          }


        canPush () {
            if (this.stackControl.length < this.MAX_SIZE ) {
                return true
        }  else {
            return false
        }
      }
     

        push (elm) {
            if (this.stackControl.length === this.MAX_SIZE) 
            {  return "Stack Overflow" 
        } else {

             this.stackControl.push(elm)
             return this.stackControl
        }
      }

        pop (elm) {
            if (this.stackControl.length === 0)
            { return "Stack Underflow"
            
            } else {
                return this.stackControl.pop(elm)
            }
            
        }


    



    }
