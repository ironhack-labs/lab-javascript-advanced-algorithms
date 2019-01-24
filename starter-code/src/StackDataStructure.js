function StackDataStructure () {
  this.stackControl = []
  this.MAX_SIZE = 10
  
  this.isEmpty = function() {
    if(this.stackControl.length === 0){
      return true
    } else {
      return false
    }
  }
  this.canPush = function() {
    if(this.stackControl.length < this.MAX_SIZE){
      return true
    } else {
      return false
    }
  }
  this.push = function(x){
    if(this.canPush()) {
      this.stackControl.push(x)
      return this.stackControl
    } else {
      return 'Stack Overflow'
    }  
  }
  this.pop = function(x){
    if(!this.isEmpty()) {
      return this.stackControl.pop()
    } else {
      return 'Stack Underflow'
    }
  }

}