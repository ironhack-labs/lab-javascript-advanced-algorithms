


function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 8;
    this.isEmpty = () => {
        if (this.stackControl.length === 0) {
            console.log('is Empty');
            return true;
        } else {
            console.log('is NOT Empty');
            return false;
        }
    };
    this.canPush = () => {
        if (this.stackControl.length < this.MAX_SIZE) {
            return true;
        } else {
            return false;
        }
    };
    this.push = (element) => {
        if(this.canPush()){
            this.stackControl.push(element);
            return this.stackControl;
        } else{
            return 'Stack Overflow';
        }
    }
    this.pop = () =>{
        if(this.isEmpty()){
            return 'Stack Underflow';
        } else {
            return this.stackControl.pop();
        }
    }
}


