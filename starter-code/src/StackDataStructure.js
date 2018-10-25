function StackDataStructure () {
        this.stackControl = [];
        this.MAX_SIZE = 8;
        this.isEmpty = function(){
            if(this.stackControl.length === 0){
                return true;
            }
            return false;
        }
        this.canPush = function(){
            if(this.stackControl.length === this.MAX_SIZE){
                return false
            } else {
                return true;
            }
        };
        this.push = function(stackEl){
            if(this.stackControl.length === this.MAX_SIZE){
                return 'Stack Overflow'
            } else {
                console.log("pushing")
                this.stackControl.push(stackEl)
                return this.stackControl;    
            }
            
        };
        this.pop = function(stackEl){
            if(this.stackControl.length === 0){
                return 'Stack Underflow';
            }
            console.log("popping")
            return this.stackControl.pop(stackEl);
        };
        

    
}

let stack = new StackDataStructure;