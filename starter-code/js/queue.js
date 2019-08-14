import QueueDataStructure from "../src/QueueDataStructure.js"

const newQueue = new QueueDataStructure();
const clickAdd = document.getElementById("add_queue");
const clickDel = document.getElementById("remove_queue");
var f = newQueue.queueControl;
var b = document.getElementById("queue-alert");
var c = document.getElementById("queue-underflow");
// var input = document.getElementById("text_queue");
// 

console.log(clickAdd);

const addHandler = (e) => {
    // var i = document.querySelector(".box:nth-last-child(n)");
    var data = document.getElementById("text_queue").value;
    let g = f.length;
    let j = document.getElementById(`queue_${g}`);
    



    if(f.length < 8){
    console.log(f);
    j.classList.toggle("queue-full");
    // iif(f.length < 10){.classList.toggle("box-empty");
    newQueue.enqueue(data);
    console.log(newQueue);
    j.innerHTML = data;
    b.style.visibility = "hidden";


    if (c.style.visibility = "visible"){
        c.style.visibility = "hidden";
    }
    
}

    if (g === 8){
        b.innerHTML="Queue Overflow";
        b.style.visibility = "visible";
    }
}

const removeHandler = (e) =>{
    // var i = document.querySelector(".box:nth-last-child(n)");
    var data = document.getElementById("text_queue").value;
    let k = f.length-1;
    let j = document.getElementById(`queue_${k}`);
    if(f.length > 0){
    j.innerHTML = "";
    // i.classList.toggle("box-empty");
    j.classList.toggle("queue-full");
    console.log(k);
    newQueue.dequeue(data);
    console.log(newQueue);
    if (b.style.visibility = "visible"){
        b.style.visibility = "hidden";
    }
    }
    if(k<0){
        c.innerHTML="Queue Underflow";
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
