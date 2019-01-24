function StackDataStructure () {
    this.stackControl = []
    this.MAX_SIZE=10
    this.isEmpty=function(){
        if(this.stackControl.length===0){
            return true
        } else {
            return false
        }
    }
    this.canPush=function(){
        if(this.stackControl.length<=this.MAX_SIZE){
            return true
        } else {
            return false
        }
    }
    this.push=function(valor){
        if(this.canPush()){
            this.stackControl.push(valor)
            return  this.stackControl
        } else {
            return "Stack OverFlow"
        }
    }
    this.pop=function(){
        if(this.isEmpty()){
            return "Stack UnderFlow"
        } else {
            this.stackControl.pop()
            return this.stackControl
        }
            
    }
    
}
