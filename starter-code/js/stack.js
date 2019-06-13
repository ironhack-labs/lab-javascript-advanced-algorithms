let stack = new StackDataStructure();
let inputLabel = document.querySelector(".stack-input");
let container = document.querySelector(".row");
let con = 0;
let containerSize = function(){
    for(i=0;i<container.lenght;i++){
        con++;
    }
    return con;
};
console.log(con);

function addElement(){
    let input = inputLabel.value;
    let node = document.createElement('div');
    let text = document.createTextNode(input);
    stack.push(text);
    node.appendChild(text);
    node.setAttribute('class','row-content');
    container.insertBefore(node, container.firstChild);
}

function rmElement(){
    stack.pop(text);
}