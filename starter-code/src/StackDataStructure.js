function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE=8;
    }

StackDataStructure.prototype.isEmpty=function(){
    if (this.stackControl.length == 0){
        return true;
    } 
    return false;
}

StackDataStructure.prototype.canPush=function(){
    if (this.MAX_SIZE==0){
        return false;
    }
    return true;
}

StackDataStructure.prototype.push=function(){
    if (this.MAX_SIZE = 0 <= 7){
        return true;
    }
    return false;
}

StackDataStructure.prototype.pop=function(){
    if (this.MAX_SIZE = 0 <= 8){
        return true;
    } else if (this.MAX_SIZE == 8) {
        return false;
    } else {
        return false;
    }
    
}

//StackDataStructure.prototype = function(){
//    StackDataStructure.prototype.canPush == 0
//}

//Should add the indicated element to the stack
//Should return that stack is not empty when adding an element
//Should return the stack when an element is inserted
//Should insert the elements in the received order
//Should return 'Stack Overflow' if the stack is full
//Should return false if the stack is full
//Should return the last element inserted in the stack
//Should return 'Stack Underflow' if there are no elements in the stack