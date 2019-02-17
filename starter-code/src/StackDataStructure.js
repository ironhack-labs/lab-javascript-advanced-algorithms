function StackDataStructure () {
  this.stackControl=[];
  this.MAX_SIZE=10;
  this.isEmpty = function(){
    if (this.stackControl.length!=0){
      return false
    }
    return true
  }
  this.canPush = function(){
    if (this.stackControl.length < this.MAX_SIZE){
      return true
    }
    return false
  }
  this.push = function (item){
     if (this.canPush() == true) {
       this.stackControl.push(item); 
       return this.stackControl
     }
     return 'Stack Overflow'
  }
  this.pop = function (){

  }
}

