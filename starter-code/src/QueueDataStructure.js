function QueueDataStructure () {
    this.stack= []
    this.MAX_SIZE = 9


    this.push = function(queue){
        if (this.isEmpty()){
            this.queue.push(queue)
        }else if (!this.isFull()){
            this.queue.push(queue)
        } else return "Overflow"

    }
    this.pop = function (){
       if(this.isFull()){ 
       this.queue.shift()
    } else if(!this.isEmpty()){
        this.queue.shift()
      }
    else return 'Underflow'
    }
    
    this.isEmpty = function (){
        if (queue.lenght === 0)
        return true
    
        else
                return false
    }
    
    this.canEnqueue = function (){
            if (this.queue.lenght < this.MAX_SIZE)
            return true
    
            else
    
                    return false
    }
    
}

