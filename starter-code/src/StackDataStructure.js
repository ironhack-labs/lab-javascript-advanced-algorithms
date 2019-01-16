stack = new StackDataStructure();

function StackDataStructure () {
  this.stackControl = []
  this.MAX_SIZE = 20
}

StackDataStructure.prototype.isEmpty = function(){
  if (this.stackControl.length === 0){
    return true
  } return false 
  }

StackDataStructure.prototype.canPush = function(){
    if (this.stackControl.length < this.MAX_SIZE){
      return true
    } else {
      return false
    }
  }

  StackDataStructure.prototype.push = function(elem){
    if (this.canPush() === true){
      this.stackControl.push(elem)
      return this.stackControl
    } else {
      return 'Stack Overflow'
    }
  }

  StackDataStructure.prototype.pop = function (){
    if (this.isEmpty() === true){
      return 'Stack Underflow'
    } return this.stackControl.pop() 
  }