class Stack {
    
    array = [];
    max_size = 8;

    isEmpty(){
        return this.array.length === 0;
    }

    canPush(){
        return this.array.length < this.max_size;
    }

    push(element){
        if(this.canPush()){
            this.array.push(element);
        }else{
            alert("¡¡¡¡ANDE VAS CON TAAAAANTO!!!")
            return "Stack Overflow"; 
        }
    }

    pop(element){
        if(this.isEmpty()===false){
            this.array.pop();
        }else{
            alert("¡¡¡PERO QUÉ VAJ A QUITAAAAAR, SI NO TIENEEES NAAAAAA!!!")
            return('Stack Underflow');
        }
    }

    stackControl(){
        return this.array.length;
    }

}

let stack = new Stack;

let input = document.querySelector("input");
let add = document.querySelector("#blueButton");
let take = document.querySelector("#redButton");
let span = document.querySelectorAll("span");

add.onclick = function(btn){
    btn.preventDefault();
    stack.push(input.value);
    paintFunction();
}

take.onclick = function(btn){
    btn.preventDefault();
    stack.pop();
    deleteFunction();
}

function paintFunction(){
    span[0].innerHTML = stack.array[stack.array.length - 1];
    for(let i=1; i<stack.array.length; i++){
        span[i].innerHTML = stack.array[stack.array.length - i -1];
    }
    input.value = "";
}

function deleteFunction(){
    for(let i=0; i<stack.array.length; i++){
        span[i].innerHTML = stack.array[stack.array.length - i -1];
    }
    span[stack.array.length].innerHTML = "";
}