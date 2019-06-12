function StackDataStructure () {
    
            this.stackControl = [] 
            this.MAX_SIZE = 8
           
        
        this.isEmpty = function (){
           
               return this.stackControl.length === 0
           }
        

        this.canPush =function(){
            return this.stackControl.length < this.MAX_SIZE
           
            }
    
           
        this.push = function (stackElement){
            if(this.canPush()){
             this.stackControl.push(stackElement)
             return this.stackControl
            }
            else{
                return "Stack Overflow"
            }



        }
        
        
        this.pop=function(stackElement){
                if(this.isEmpty()){
                    return "Stack Underflow"
                }
                else{
                  return  this.stackControl.pop(stackElement)
                } 
        }

        
        
        
}


  