function StackDataStructure () {
    this.stackControl =[];
    this.MAX_SIZE=-1;
}

StackDataStructure.prototype.isEmpty = function(){
    if(this.stackControl.length === 0){
        return true;
    }else{
        return false;
    }
}

StackDataStructure.prototype.canPush = function(){
    if(this.stackControl.length === this.MAX_SIZE && (this.stackControl)){
        return false;
    }else{
        return true;
    }
}

StackDataStructure.prototype.push = function(element){
    
    if(!this.canPush()){    
        return this.message("full");
    }

    this.stackControl.push(element);
    return this.stackControl;
    
}

StackDataStructure.prototype.pop = function(){

    if(this.isEmpty()){    
        return this.message("empty");
    }
    return this.stackControl.pop();
}

StackDataStructure.prototype.message = function(message){
    if(message === "full"){
        return "Stack Overflow";
    }else{
        return "Stack Underflow";
    }
   
}


