function QueueDataStructure () {
    this.queueControl = []
    this.MAX_SIZE=10
    
    this.isEmpty=function(){
        if(this.queueControl.length===0){
            return true
        } else {
            return false
        }
    }
    this.canEnqueue=function(){
        if(this.queueControl.length<=this.MAX_SIZE){
            return true
        } else {
            return false
        }
    }
    this.enqueue=function(valor){
        if(this.canPush()){
            return this.queueControl.push(valor) 
        } else {
            return this.queueControl
        }
    }
    this.dequeue=function(){
        if(this.isEmpty()){
            return this.queueControl
        } else {
            return this.queueControl.pop()
        }
            
    }
    
}
