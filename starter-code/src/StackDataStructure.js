function StackDataStructure () {
    this.stackControl = []
    this.MAX_SIZE = 9
    
    
    this.isEmpty = function(){
        if(this.stackControl.length === 0){
            return true
        } else{
           return false
        }
    }
    this.canPush = function(){
        if(this.stackControl.length < this.MAX_SIZE){  
            return true
                }else{
            return false


        }
    }
    this.push = function(elemento){
        if(this.canPush()){
            this.stackControl.push(elemento)
            return this.stackControl
        }else{
            return 'Stack Overflow'
        }
        
        
        }
    this.pop = function(){
        if(this.isEmpty() === true){
            return 'Stack Underflow'
        }else{
            return this.stackControl.pop()
        }       
    }


}
