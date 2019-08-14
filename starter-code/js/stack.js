import StackDataStructure from "../src/StackDataStructure.js"

const newStack = new StackDataStructure();
const clickAdd = document.getElementById("add");
const clickDel = document.getElementById("remove");
var f = newStack.stackControl;
var b = document.getElementById("box-alert");
var c = document.getElementById("box-underflow");
var input = document.getElementById("text_places");
// 

console.log(clickAdd);

const addHandler = (e) => {
    // var i = document.querySelector(".box:nth-last-child(n)");
    var data = document.getElementById("text_places").value;
    let g = f.length;
    let j = document.getElementById(`box_${g}`);
    



    if(f.length < 8){
    console.log(f);
    j.classList.toggle("box-full");
    // iif(f.length < 10){.classList.toggle("box-empty");
    newStack.push(data);
    console.log(newStack);
    j.innerHTML = data;
    b.style.visibility = "hidden";


    if (c.style.visibility = "visible"){
        c.style.visibility = "hidden";
    }
    
}

    if (g === 8){
        b.innerHTML="Stack Overflow";
        b.style.visibility = "visible";
    }
}

const removeHandler = (e) =>{
    // var i = document.querySelector(".box:nth-last-child(n)");
    var data = document.getElementById("text_places").value;
    let k = f.length-1;
    let j = document.getElementById(`box_${k}`);
    if(f.length > 0){
    j.innerHTML = "";
    // i.classList.toggle("box-empty");
    j.classList.remove("box-full");
    
    newStack.pop(data);
    console.log(newStack);
    if (b.style.visibility = "visible"){
        b.style.visibility = "hidden";
    }
    }
    if(k<0){
        c.innerHTML="Stack Underflow";
        c.style.visibility = "visible";
    }
   
}

clickAdd.onclick = addHandler;
// window.addEventListener("keydown", event => {
  
//         if (event.isComposing || event.keyCode === 38) {
//           addHandler();
//         }
    
//   });

// window.addEventListener("keydown", event => {
   
//     if (event.isComposing || event.keyCode === 40) {
//       removeHandler();
//     }

//   });

clickDel.onclick = removeHandler;



