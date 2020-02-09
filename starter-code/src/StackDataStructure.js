class StackDataStructure {
    constructor(capacity){
        this.lastPosition = 0;
        this.stackControl = [];
        this.capacity = capacity;
    }

    display(){
        return this.stackControl;
    }

    isEmpty(){
        return this.lastPosition === 0;
    }

    isFull(){
        return this.lastPosition === this.capacity;
    }

    push(item){
        if(this.isFull() === true){
            return -1;
        }else{
            this.lastPosition +=1
            this.stackControl.push(item)
            return this.stackControl;
        }
    }

    pop(){
        if(this.isEmpty() === true){
            return -1;
        } else {
            this.lastPosition -=1;
            this.stackControl.pop();
            return this.stackControl;
        }
    }

}

