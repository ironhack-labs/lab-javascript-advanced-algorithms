
function StackDataStructure () { //Remember that Stack is a LIFO (Last-in First-out) structure.
    this.stack = []; //cambiar la variable al nombre de specs
    this.maxStack = 10;
}

StackDataStructure.prototype.isEmpty= function(){ // aun no se s se oucpa prototype

if (this.stack.length === 0){
    return true;
} else {return false}
}

StackDataStructure.prototype.canPush = function(){
    // return this.stack.length === this.maxStack ? false : true;
    if (this.stack.length === this.maxStack){
        return false;
    } else {return true}
}

StackDataStructure.prototype.push = function(bloque){
    if(this.canPush()){
        this.stack.push(bloque);
    }else {
        return  this.canPush() && "Stack Overflow"; //tengo duda en esta sentencia si se puede ocupar asi 
    }
    return this.stack;
}

StackDataStructure.prototype.pop = function(){
    var bloqueFinal;
    if(this.isEmpty()){
        return "Stack UnderFlow";
    } else {
      bloqueFinal= this.stack.pop(); //no dejaba regresaar el this solo asi que lo asigne a una variable
    }
    return bloqueFinal;
}
