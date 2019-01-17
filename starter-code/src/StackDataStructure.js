//LIFO 
function StackDataStructure () {
 this.stackControl = []
 this.MAX_SIZE = 0

 this.isEmpty = function(){

  if(this.stackControl > 1){
    return false
  }
  return true
 }

 this.canPush = function(){
  if(this.MAX_SIZE > this.stackControl.length){
    return false
  }
  return true
 }

 this.push = function(element){
  
   this.stackControl.push(element)
  
if(this.stackControl.length > this.MAX_SIZE){
  console.log("Stack") 
  return 'Stack Overflow'
 
    }

  
    return this.stackControl

    }
    
 this.pop = function(){
   if(this.stackControl.length == 0){
     return 'Stack Underflow'
   }
   console.log("Entro a Funcion POP")
   this.stackControl.splice(this.stackControl.length-1,1);

  
  return this.stackControl[this.stackControl.length-1]
 }
}
