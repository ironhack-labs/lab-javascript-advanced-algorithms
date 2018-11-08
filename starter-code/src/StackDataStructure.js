function StackDataStructure () {  
  this.stack = [ ]
  this.maxSize = 8

  this.push = function (item){
    if (this.isEmpty()){
      this.stack.push(item)
    }else if (!this.isFull()){
      this.stack.push(item)
    }else return 'Overflow' 
    
  }
  this.pop = function (){
    if(this.isFull()){
      this.stack.pop()
      return this.stack.length
      }
    else if(!this.isEmpty()){
        this.stack.pop()
        return this.stack.length
      }
    else return 'Underflow'
  }
  this.isEmpty = function(){
      if(stack.length === 0)
          return true
      else
          return false
  }
  this.isFull = function (){
      if(this.stack.length < this.maxSize)
        return false
      else 
        return true 
  }


}
