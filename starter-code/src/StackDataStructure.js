//DO NOT USE append or prepend

function StackDataStructure(){
    this.stackControl = [];
    this.MAX_SIZE = 8;
}

StackDataStructure.prototype.isEmpty = function(){
    if(this.stackControl.length == 0){
        return true;
    }
    else{
        return false;
    }
}

StackDataStructure.prototype.canPush = function(){
    if(this.isEmpty() || this.stackControl.length < this.MAX_SIZE){
        return true;
    }
    else{
        return false;
    }
}

StackDataStructure.prototype.push = function(element){
   
    if(this.canPush()){
        this.stackControl.push(element);
        this.isEmpty();
        return this.stackControl;
    }
    else{
        return false;
    }
}

StackDataStructure.prototype.pop = function(){
    if(!this.isEmpty()){
        return this.stackControl[this.stackControl.length-1];
    }
    else{
        return false;
    }   
}