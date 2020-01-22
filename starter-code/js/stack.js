

let stack  =  new StackDataStructure();

let btnAdd = document.querySelector(".add");
btnAdd.onclick =function(){
    
   let item = document.querySelector('.texto').value;
   stack.push(item);
   console.log(item);
   console.log(stack.stackControl);

 

   var prueba = document.querySelector(".list-group").lastElementChild;


   prueba.innerHTML = item;

   
   
}

   




let btnTake= document.querySelector('.take');

btnTake.onclick =function(){

    let column = document.querySelectorAll('.list-group-item').values;
    stack.pop(column);
    console.log(stack.stackControl);

    


    
};



// function pr() {
//     document.getElementById("result").innerHTML = document.getElementById('fname').value + " " + document.getElementById('mname').value + " " + document.getElementById('lname').value;
//   }






