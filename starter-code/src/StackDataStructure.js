class StackDataStructure{
  constructor(){
    this.stackControl = [],
    this.MAX_SIZE = 8
}
isEmpty(){
    if (this.stackControl.length===0){
        return true;
    }
    else{
        return false;
    }
}

canPush(){
    if (this.stackControl.length<this.MAX_SIZE){
        return true;
    }
    else{
        return false;
    }
}

push(item){
    if(this.canPush() === true){
    this.stackControl.push(item)
    return this.stackControl
    }
    else{
        return "Stack Overflow";
    }
}

pop(item){
    if(this.isEmpty() === true){
        return 'Stack Underflow';
    }
    else{
        return this.stackControl.pop();
    }
    
} 

}


