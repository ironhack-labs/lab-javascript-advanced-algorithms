let values = document.querySelector("input").value
let add = document.querySelector(".add");
let del = document.querySelector(".take");
let nodelist = document.querySelectorAll("li");
list = new StackDataStructure();



// Metodo para acceder al campo



add.onclick = function(){
    list.push(values);
    console.log(list.stackControl);
    console.log(list.stackControl.length);
    //  for(i=0;i<list.stackControl.length;i++)
    //  list[i].innerHTML = list.stackControl[i];
     } 


del.onclick = function(){
    list.pop();
    console.log(list.stackControl);
    }


