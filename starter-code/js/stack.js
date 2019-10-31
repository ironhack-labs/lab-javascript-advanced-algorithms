let $addButton = document.getElementById("add-btn");
let $takeButton = document.getElementById("take-btn");
let listContainer = document.querySelector("ul");
let addLi = document.createElement("li");

let elementsInStack = 1;

let newStack = new StackDataStructure;

function addContent(e) {
    if(newStack.canPush()){

        let inputText = document.getElementById("text-input").value;
        let newElement = document.createElement("span");
        newElement.innerHTML = inputText;
    
        let elementsOfTheStack = document.querySelectorAll("li");
        let lastElementStack = elementsOfTheStack[(elementsOfTheStack.length-1)-elementsInStack];
        
        lastElementStack.appendChild(newElement);
        elementsInStack += 1;

    } else {
       /* let addLi = document.createElement("li");
        addLi.innerHTML = "STACK OVERFLOW";
        addli.appendChild(listContainer); */
        
        var textLI = document.createTextNode = "STACK OVERFLOW";
        addLi.appendChild(textLI);
        document.querySelector("ul").appendChild(addLi);
    };
 };
 $addButton.onclick = addContent;


function takeElement(e){

    if(elementsInStack > 0 ){

        let elementsOfTheStack = document.querySelectorAll("li");
        let lastElementStack = elementsOfTheStack[(elementsOfTheStack.length)-elementsInStack];
        lastElementStack.removeChild(lastElementStack.querySelector("span"));
        elementsInStack -= 1;

    } else if (newStack.isEmpty()) {

        let lastaddLi = document.createElement("LI");
        lastaddLi.innerHTML = "STACK UNDERFLOW";
        lastaddLi.appendChild(listContainer);
 
    }
}
$takeButton.onclick = takeElement;