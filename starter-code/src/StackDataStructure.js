function StackDataStructure () {
  this.stackControl = []
  this.MAX_SIZE = 8
  this.isEmpty = () =>{
    if (this.stackControl.length > 0){
      return false
    } else{
      return true
    } 
  }
  this.canPush = () =>{
    if(this.stackControl.length === this.MAX_SIZE){
      return false
    } else {
      return true
    }
  }
  this.push = (arg) =>{
    if(this.stackControl.length === this.MAX_SIZE){
      return 'Stack Overflow'
    } else {
      this.stackControl.push(arg)
      return this.stackControl
    }
    
  }
  this.pop = () =>{
    if (this.stackControl.length === 0){
      return 'Stack Underflow'
    } else {
      return this.stackControl.pop()
    }
  }
}
