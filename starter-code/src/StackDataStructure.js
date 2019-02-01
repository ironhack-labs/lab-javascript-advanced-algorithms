

class StackDataStructure {
  constructor(){
    this.stackControl=[]
    this.MAX_SIZE = 10;
    
  }

 
  isEmpty(){
    this.emtry = 0;
    if (this.stackControl.length === this.emtry ){
      return true
  }else{
    return false
  }
}
  canPush(){
    if (this.stackControl.length < this.MAX_SIZE){
      return true
    }else{
      return false
    }
  }
    push(num){
    if(this.canPush()){
      this.stackControl.push(num)
      return this.stackControl
    }else{
      return 'Stack Overflow'
    }
    }
    pop(){
      if (!this.isEmpty()){
        return this.stackControl.pop()
      }else{
        return 'Stack Underflow'
      }
    }
}

document.querySelector('.addButton').addEventListener('click',function() {
  var x = document.querySelector('.input').value
  var y = document.querySelector('.eight').innerHTML = x;
 
});




 









// function StackDataStructure(){
//   this.stackControl = []

// 
