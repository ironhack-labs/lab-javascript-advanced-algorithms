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
      stackList[stack.MAX_SIZE - stack.stackControl.length].innerText = x
      stackList[stack.MAX_SIZE - stack.stackControl.length].setAttribute('class','queue-item stack-element')
      stackUnder.setAttribute('class','error-stack')
      return this.stackControl
    } else {
      return 'Stack Overflow'
    }  
  }
  this.pop = function(x){
    if(!this.isEmpty()) {
      stackList[stack.MAX_SIZE - stack.stackControl.length].innerText = ''
      stackList[stack.MAX_SIZE - stack.stackControl.length].setAttribute('class','stack-element')
      let stackDlt = document.createElement('li')
      stackDlt.innerText = x
      removedStack.appendChild(stackDlt)
      stackOver.setAttribute('class','error-stack')
      return this.stackControl.pop()
    } else {
      return 'Stack Underflow'
    }
  }

}