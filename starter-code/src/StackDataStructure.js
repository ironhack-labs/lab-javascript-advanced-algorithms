
function StackDataStructure () { //Remember that Stack is a LIFO (Last-in First-out) structure.
    this.stackControl = []; //cambiar la variable al nombre de specs
    this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty= function(){ // aun no se s se oucpa prototype

if (this.stackControl.length === 0){
    return true;
} else {return false}
}

StackDataStructure.prototype.canPush = function(){
    // return this.stack.length === this.maxStack ? false : true;
    if (this.stackControl.length === this.MAX_SIZE){
        return false;
    } else {return true}
}

StackDataStructure.prototype.push = function(bloque){
    if(this.canPush()){
        this.stackControl.push(bloque);
    }else {
        return "Stack Overflow"; //tengo duda en esta sentencia si se puede ocupar asi 
    }
    return this.stackControl;
}

StackDataStructure.prototype.pop = function(){
    var bloqueFinal;
    if(this.isEmpty()){
        return "Stack Underflow";

    } else {
      bloqueFinal= this.stackControl.pop(); //no dejaba regresaar el this solo asi que lo asigne a una variable
    }
    return bloqueFinal;
}
