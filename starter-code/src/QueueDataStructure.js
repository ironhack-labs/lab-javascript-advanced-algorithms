class QueueDataStructure{
    constructor(capacity){
        this.capacity = capacity;
        this.queueControl = [];
        this.lastPosition = 0;
    }
    display(){
        return this.queueControl;
    }

    isEmpty(){
        return this.lastPosition === 0;
    }

    isFull(){
        return this.lastPosition === this.capacity;
    }

    enqueue(item){
        if(this.isFull() === true){
            return -1;
        }else{
            this.lastPosition +=1
            this.queueControl.push(item)
            return this.queueControl;
        }
    }

    dequeue(){
        if(this.isEmpty() === true){
            return -1;
        }else{
            this.lastPosition -= 1;
            this.queueControl.shift();
            return this.queueControl;
        }
    }

   
}
