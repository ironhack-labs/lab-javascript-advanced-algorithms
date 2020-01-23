class QueueDataStructure{
    constructor(){
        this.queueControl = [];
        this.MAX_SIZE = 10

    }

    isEmpty(){
        if (this.queueControl.length) {
            return false
        } else {
            return true
        }

    }


    canEnqueue(){
        if (this.queueControl.length < this.MAX_SIZE){
            return true
        }else{ 
            return false
        }
    }



    enqueue(item){

        if(this.canEnqueue()){

        this.queueControl.unshift(item)
        return this.queueControl

        }else{

            return "Queue Overflow"
        }

    }

    dequeue(){

        if(this.isEmpty() == true){

            return "Queue Underflow"

        }else{

            return this.queueControl.pop()}


    }






}   