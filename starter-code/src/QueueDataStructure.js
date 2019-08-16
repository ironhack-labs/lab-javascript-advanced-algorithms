let a = "coucou"

function QueueDataStructure (max) {

    this.queueControl = [];
    this.MAX_SIZE = Number(max);

}

QueueDataStructure.prototype.isEmpty = function(){
    return this.queueControl.length == 0;
}


QueueDataStructure.prototype.canEnqueue = function(){
    return this.MAX_SIZE > this.queueControl.length;    
}

QueueDataStructure.prototype.enqueue = function(arr){
    
    if (!this.canEnqueue()) return false;;
    console.log(this.queueControl);
    this.queueControl.push(arr);
    return this.queueControl;
}


QueueDataStructure.prototype.dequeue = function(){
    if (this.isEmpty()) return false;
    return this.queueControl.shift();
}