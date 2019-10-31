class StackDataStructure  {
    constructor() {
        //Propiedades
        this.stackControl = []
        this.MAX_SIZE = 5
    }
//Metodos
      isEmpty() {
          if (this.stackControl.length == 0) {
              return true
          } else {
              return false
          }
    }
        canPush() {
            if (this.stackControl.length == this.MAX_SIZE) {
              return false
            } else {
                return true
          }
          
    }
        push(stackElement) {
            
            if (this.canPush()) {   
                this.stackControl.push(stackElement)
                return this.stackControl
                
            } else {
                return 'Stack Overflow'
        }
            
          
    }
        pop() {
            if (this.isEmpty()) {
                return 'Stack Underflow'
            } else {
                return this.stackControl.pop()
          }
      }
}









