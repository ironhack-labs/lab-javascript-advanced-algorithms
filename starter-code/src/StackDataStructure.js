function StackDataStructure() {
this.stack= []
this.MAX_SIZE = 9



this.push = function (canPush){
    if (this.isEmpty()){
      this.stack.push(canPush)
    }else if (!this.canPush()){
      this.stack.push(canPush)
    }else return 
    
}

this.pop = function () {
    this.stack.pop()
}

this.isEmpty = function (){
    if (stack.lenght === 0){
    return true;

    }else{
            return false
}}

this.canPush = function (){
        if (this.stack.lenght < this.MAX_SIZE){
        return 'Stack Overflow'

        }else{

                return true
}}


}
