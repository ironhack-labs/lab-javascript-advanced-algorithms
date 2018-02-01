function StackDataStructure () {
    this.stackControl= [],
    this.MAX_SIZE= 5,

StackDataStructure.prototype.isEmpty = function(){
    
return (this.stackControl.length === 0);
}

StackDataStructure.prototype.canPush = function(){

return (this.stackControl.length<this.MAX_SIZE);
}

StackDataStructure.prototype.push = function(numero){
    if(this.canPush()){ // para ver si se puede hacer push cuand hacemos push // la llamamos con this. porque todo esta hecho en un constructor
        this.stackControl.push(numero);
        return this.stackControl;
    }else{
        return "Stack Overflow";
    }

}

StackDataStructure.prototype.pop = function(numero){

    if(!this.isEmpty()){
        var last = this.stackControl[this.stackControl.length-1] // aqui en una variable que metemos A N T E S de la .pop (borrar), estamos guardando el ultimo elemento que hemos agregado al stackControl. Si no lo ponemos aqui, y abajo del (   this.stackControl.pop(numero) vamos a borrar (pop) un elemento distincto del utlimo elemento porque JS...
        this.stackControl.pop(numero)
        return last;// para return el ultimo elemento en el array
    }else{
        return "Stack Underflow";
    }   
}
}

