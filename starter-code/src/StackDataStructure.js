function StackDataStructure () {
    this.stackControl= []
    this.MAX_SIZE= 10

    this.isEmpty= function(){
        if (this.stackControl.length === 0) return true
        else return false 
    }

    this.canPush= function(){
       if (this.stackControl.length >= 0 && this.stackControl.length === 9 ) {
        return this.stackControl.push()
       } else{
           return "No more adds"
       }
       
    }
    this.push= function(){
        var newItem= ""
        if (this.isEmpty === true){
            this.stackControl.push(newItem)
        }
    }

    this.pop=function(){}


}

∫



