class StackDataStructure  {
constructor(){
    this.stackControl = []
    this.MAX_SIZE = 5
}

isEmpty(){
if (this.stackControl.length >= 1){
    return false
}return true

}

canPush(){
if (this.stackControl.length === this.MAX_SIZE){
    return false
}
return true
}

push(element){

if (this.stackControl.length === this.MAX_SIZE){ 
return 'Stack Overflow'
}
this.stackControl.push(element)

return this.stackControl
}

pop(element){
    if(this.stackControl.length <= 0){
        return 'Stack Underflow'
    }else {
       return  this.stackControl.pop()
    }


}

}
