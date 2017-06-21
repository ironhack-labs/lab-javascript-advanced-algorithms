function StackDataStructure () {

    this.stackControl = [];
    this.MAX_SIZE = 10;

    this.isEmpty = function() {
        return this.stackControl.length === 0;
    }

    this.canPush = function() {
        return this.stackControl.length < this.MAX_SIZE;
    }

    this.push = function(val) {

        if (this.canPush()) {

            this.stackControl.push(val);

            return this.stackControl;

        } else {
            return 'Stack Overflow';
        }
        
    }

    this.pop = function() {

        if (this.isEmpty()) {

            return 'Stack Underflow';

        } else {
            
            return this.stackControl.pop();
        }

        
    }


}
