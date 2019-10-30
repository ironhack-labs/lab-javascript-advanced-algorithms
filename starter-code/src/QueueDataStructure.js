class QueueDataStructure {
    //Creamos Constructor de la clase SrackDataStructure
    constructor (){
        //Creamos array para meter los "elementos" en la pila que estamos creando
        this.queueControl=[];
        //Indicamos la capacidad máxima para meter elementos
        this.MAX_SIZE=8;
    }
    //creamos metodos de la clase SrackDataStructure
    //para ver si está vacío
    isEmpty(){
      return this.queueControl.length <= 0;   
    }
    //Para ver si podemos meter más elementos
    canEnqueue(){
        if(this.queueControl.length==this.MAX_SIZE){
            return false
        }
        return true

    }
    //Para meter elementos
    enqueue(elm){
        if(this.queueControl.length==this.MAX_SIZE){
            return "Queue Overflow"
        } else{
        this.queueControl.unshift(elm);
        return this.queueControl
        }
    }
    //Para sacar elementos
    dequeue(){
        if(this.queueControl.length==0){
            return 'Queue Underflow'
        }  
     return this.queueControl.pop();
    }
}



