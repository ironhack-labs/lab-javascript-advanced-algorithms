function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 10;
}



StackDataStructure.prototype.isEmpty = function(){
    return this.stackControl.length == 0;
}

StackDataStructure.prototype.canPush = function(){
    return this.stackControl.length < this.MAX_SIZE; //Gracias Pelotudo por esta maravillosa "nueva" forma de comparar true/false. tkm
  
}

StackDataStructure.prototype.push = function(numero){
    if(this.canPush()){
        this.stackControl.push(numero);
        return this.stackControl;
    }else{
        return 'Stack Overflow';
    }
}

StackDataStructure.prototype.pop = function(){
    // return this.stackControl.pop([this.stackControl.length - 1]);
    if(this.stackControl == 0){
        return "Stack Underflow";
    }else {
        return this.stackControl.pop()
    }
}

///////// VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMOS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! (soy feliz con poco)