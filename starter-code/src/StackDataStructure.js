function StackDataStructure () {
  this.stackControl = [];
  this.MAX_SIZE = 10;
  
  this.isEmpty = function(){
    if(this.stackControl.length === 0){
      return true
    }else{
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
  this.push = function(element){
    if(this.canPush()){
      this.stackControl.push(element);
      return this.stackControl;
    }
  }
  this.pop = function(){
    return this.stackControl.pop()
  }
}
