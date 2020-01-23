
let btnAdd = document.querySelector(".add");
let btnTake = document.querySelector(".take");
let lenght = MAX_SIZE;
let lastlistChild = document.getElementsByClassName("list")[this.stackControl.lenght-1];

btnAdd.onclick = function(){
    if(canPush() === "true"){
        this.stackControl=stackControl.push(lastlistChild);
        lastlistChild.setAttribute(id,"full");
        lastlistChild.innerHTML="num";
        return this.stackControl;
    }
    else{
        return "Stack Overflow";
    }
};


btnTake.onclick = function(){
    if(isEmpty() === "full"){
        this.stackControl.pop(lastlistChild);
        this.stackControl.lenght -= 1;
        lastlistChild.setAttribute(id,"empty");
        lastlistChild.innerHTML=" ";
        return this.stackControl;
    }
    else{
        return 'Stack Underflow';
    }

};