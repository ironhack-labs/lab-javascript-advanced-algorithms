function StackDataStructure () {
    this.stackControl =[]
    this.MAX_SIZE = 9

    this.isEmpty = function(){
        if(this.stackControl.length ===0){
            return true
        }else{
            return false
        }
    }

    this.canPush = function(){
        if(this.stackControl.length<this.MAX_SIZE){
            return true
        }else{
            return false
        }
    }

    this.push = function(){
        if(this.canPush()){
            this.stackControl.push(element)
            return this.stackControl
        }else{
            return "Stack overflow"
        }
    }

    this.pop = function(){
        if(this.isEmpty()=== true){
            return "Stack underflow"
        }else{
            return this.stackControl.pop()
        }
    }
}
/*
var stack = [];

var Stack = function(){
    this.storage = [];
    this.size = 0;
}

Stack.prototype.add = function(value){
    this.storage[this.size]=value
    this.size ++
}

Stack.prototype.remove = function(){
    this.size && this.size --
    var result = this.storage[this.size]
    delete this.storage[this.size]
    return result;
}

Stack.prototype.getSize = function(){
    return this.size;
}
*/
