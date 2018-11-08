function QueueDataStructure () {
    this.queueControl=[]
    this.MAX_SIZE=9

    this.isEmpty = function(){
        if(this.queueControl===0){
            return true
        }else{
            return false
        }
    }

    this.canEnqueue = function(){
        if(this.queueControl.length<this.MAX_SIZE){
            return true
        }else{
            return false
        }
    }

    this.enqueue = function(){
        if(this.canEnqueue){
            this.queueControl.unshift(elemento)
            return this.queueControl
        }else{
            return "Queue overflow"
        }
    }

    this.dequeue = function(){
        if(this.isEmpty()===true){
            return "Queue underflow"
        }else{
            return this.queueControl.pop()
        }
    }
}
