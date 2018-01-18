function QueueDataStructure () {
    this.queueControl = [];
    this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function(){
    return this.queueControl.length === 0;
}

QueuekDataStructure.prototype.canPush = function(){
    return (this.queueControl.length < this.MAX_SIZE);
}

QueueDataStructure.prototype.push = function(e){
    if(this.canPush()){
        this.queueControl.push(e);
        return this.queueControl;
    }
    return 'Stack Overflow';
    
}

QueueDataStructure.prototype.pop = function() {
    if (this.isEmpty()) {
        return this.queueControl.pop();
    } 
    return 'Stack Underflow';
}


//COPIADO Y PEGADO, HE PASADO A JQUERY PARA INTENTAR SACARLO

