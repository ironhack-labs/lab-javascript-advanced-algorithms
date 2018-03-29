function QueueDataStructure () {
    this.queueControl = [];
        this.MAX_SIZE = 10;
}

QueueDataStructure.prototype.isEmpty = function(){
        
    if (this.queueControl.length==0){ // añadir los falsos 
        return true;
    }else{
        return false;
    }
}
QueueDataStructure.prototype.canEnqueue = function(){
        
    if (this.queueControl.length< this.MAX_SIZE){ // comprobar la longitud del array con el MAXSize
        return true;
    }else{
        return false;
    }
} 
QueueDataStructure.prototype.enqueue = function(item){ // la funcion tiene que añadir un valor 
    if(this.canEnqueue()){
        
     this.queueControl.unshift(item);
    
        return this.queueControl;    // tiene que devolver el valor .
    }else{

        return "Queue Overflow" // tienes que anadir esta frase cuando esta completo 
    }
    
} 
QueueDataStructure.prototype.dequeue = function(){
    if (this.isEmpty()){
        return 'Queue Underflow';
    }else{
   var a =  this.queueControl.pop();

    return a;
    }
}