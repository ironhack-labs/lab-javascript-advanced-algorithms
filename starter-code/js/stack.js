let stack  =  new StackDataStructure();

let btnAdd = document.querySelector(".add");
btnAdd.onclick =function(){
    
   let item = document.querySelector('.texto').value;
   stack.push(item);
   console.log(item);
   console.log(stack.stackControl);
   
   


};



let btnTake= document.querySelector('.take');

btnTake.onclick =function(){

    let column = document.querySelectorAll('.list-group-item').values;
    stack.pop(column)
    console.log(stack.stackControl);


    
};







