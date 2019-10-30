let stack = new StackDataStructure()
const stackUlDOMEl = document.querySelector(".stack-container")
const stackLiDOMEl = document.querySelectorAll("li");
const stackAddBtn = document.querySelector(".stack-add");
const stackRmvBtn = document.querySelector(".stack-remove");

for(i=0; i< stack.MAX_SIZE; i++){
    let e = document.createElement("li")
    let c = e.className = `empty a${stack.MAX_SIZE-i}`;
    let t = document.createTextNode("EMPTY")
    stackUlDOMEl.appendChild(e).appendChild(t)
}

stackAddBtn.addEventListener("click", function(e){
    e.preventDefault()
    let inputText = document.querySelector("input").value
    if(inputText === ""){
        alert("¡Pon el nombre de la pizza! ;)")
        return false
    }
    stack.push(inputText)
    printStackEl()
    stackRmvBtn.setAttribute("class","stack-remove")
    if(stack.stackControl.length === stack.MAX_SIZE){
        stackAddBtn.setAttribute("class","stack-add blocked")
       }
    
})

stackRmvBtn.addEventListener("click",function(e){
    e.preventDefault()
    removeStackEl()
    stack.pop()
    if(stack.stackControl.length===0){
    stackRmvBtn.setAttribute("class","stack-remove blocked")
    }
    stackAddBtn.setAttribute("class","stack-add")
})


function printStackEl(){
    let liID = (stack.stackControl.length)
    let liID2 = liID.toString()
    let stackLastLi = document.querySelector(`.a${liID2}`)
    stackLastLi.className = `a${liID2} added`
    let t = document.createTextNode(document.querySelector("input").value)
    stackLastLi.innerHTML = ""
    stackLastLi.appendChild(t)
}

function removeStackEl(){
    let liID = (stack.stackControl.length)
    let liID2 = liID.toString()
    let stackLastLi = document.querySelector(`.a${liID2}`)
    stackLastLi.className = `empty a${liID2}`
    stackLastLi.innerHTML = "EMPTY"
}

