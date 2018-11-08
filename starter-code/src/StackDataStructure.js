class StackDataStructure {
   constructor(){
       this.stackControl=[]
       this.MAX_SIZE= 8

   } 
   isEmpty(){
       return (this.stackControl.length===0)
   }
   canPush(){
       return (this.stackControl.length<this.MAX_SIZE)
   }
   push(elem){
       if (this.canPush()){
           this.stackControl.push(elem)
           return this.stackControl
       }
       else{
            return "Stack Overflow"
       }
       
   }
   pop(){
        if (this.isEmpty()){
            return "Stack Underflow"
        }
        else {
            return this.stackControl.pop()
        }
   }
}
