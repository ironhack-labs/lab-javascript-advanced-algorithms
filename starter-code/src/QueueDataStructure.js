function QueueDataStructure () {
  this.queue = [ ]
  this.maxSize = 8

  this.push = function (item){
    if (this.isEmpty()){
      this.queue.push(item)
    }else if (!this.isFull()){
      this.queue.push(item)
    }else return 'Overflow' 
    
  }

  this.pop = function (){
    if(this.isFull()){
      this.queue.shift()
      }
    else if(!this.isEmpty()){
        this.queue.shift()
      }
    else return 'Underflow'
  }

  this.isEmpty = function(){
      if(queue.length === 0)
          return true
      else
          return false
  }
  this.isFull = function (){
      if(this.queue.length < this.maxSize)
        return false
      else 
        return true 
  }
}
