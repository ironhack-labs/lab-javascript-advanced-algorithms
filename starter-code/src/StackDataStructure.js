function StackDataStructure () {
    this.stackControl=[];
    this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function (){
    if (this.stackControl == 0){
    return true;
}
    else {
        return false;
    }
}
StackDataStructure.prototype.canPush = function (){
    if ( this.stackControl.length < this.MAX_SIZE){
        return true
    } else {
        return false
    }
}
StackDataStructure.prototype.push = function (numero){
    if( this.canPush()) {
        this.stackControl.push(numero)
        return this.stackControl;
    }
    else{
        return "Stack Overflow"
    }
}
StackDataStructure.prototype.pop = function (){
   if( this.stackControl == 0){
       return "Stack Underflow"
   }
   else {
       return this.stackControl.pop();
   }
}

