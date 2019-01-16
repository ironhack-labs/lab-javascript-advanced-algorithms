function StackDataStructure () {
    this.stackControl = [];
    this.MAX_SIZE = 10;

    this.isEmpty = function(){
        if (this.stackControl.length == 0){
            return true;
        } else {
            return false;
        }
    }

    this.canPush = function(){
        if (this.MAX_SIZE != this.stackControl.length){
            return true;
        }

        return false;
    }

    this.push = function(num){

        if (this.MAX_SIZE == this.stackControl.length){
            return 'Stack Overflow';
       
        } else {
            this.stackControl.push(num);
            return this.stackControl;
        }

    }

    this.pop = function(){

        if (this.stackControl.length === 0){
            return 'Stack Underflow';
        }
        return this.stackControl.pop()
    }
}

