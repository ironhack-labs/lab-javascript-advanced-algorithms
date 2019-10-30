class StackDataStructure {
    //Creamos Constructor de la clase SrackDataStructure
    constructor (){
        //Creamos array para meter los "elementos" en la pila que estamos creando
        this.stackControl=[];
        //Indicamos la capacidad máxima para meter elementos
        this.MAX_SIZE=8;
    }
    //creamos metodos de la clase SrackDataStructure
    //para ver si está vacío
    isEmpty(){
      return this.stackControl.length <= 0;   
    }
    //Para ver si podemos meter más elementos
    canPush(){
        if(this.stackControl.length==this.MAX_SIZE){
            return false
        }
        return true

    }
    //Para meter elementos
    push(elm){
        if(this.stackControl.length==this.MAX_SIZE){
            return "Stack Overflow"
        } else{
        this.stackControl.push(elm);
        return this.stackControl
        }
    }
    //Para sacar elementos
    pop(){
        if(this.stackControl.length==0){
            return 'Stack Underflow'
        }  
     return this.stackControl.pop();
    }
}

