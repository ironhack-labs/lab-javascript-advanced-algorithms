class StackDataStructure {


constructor(){

    this.stackControl = [];
    this.MAX_SIZE = 9;
        
}

    isEmpty(){

    this.stackControl.length === 0;

    return true;

   
}

   canPush(){


    if(this.stackControl < this.MAX_SIZE){
        return true;
    }

        
}


push(){

}

pop(){
    
}
}
