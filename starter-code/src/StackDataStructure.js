function StackDataStructure () {
  this.stackControl = []
  this.MAX_SIZE = 5
  this.isEmpty = function(){
    if(this.stackControl.length === 0){
      return true
    } else {
      return false
    }
  }
  this.canPush = function(){
    if(this.stackControl.length < this.MAX_SIZE){
      return true
    } else {
      return false
    }
  }
  this.push = function(item){
    this.stackControl.splice(this.stackControl.length,0,item)
    if(this.stackControl.length > this.MAX_SIZE) {
      return "Stack Overflow"
    } else {
      return this.stackControl
    }
  }
  this.pop = function(){
    if(this.isEmpty()){
      return "Stack Underflow"
    } else {
      return this.stackControl.splice(this.stackControl.length-1,1)[0]
    }
  }
}