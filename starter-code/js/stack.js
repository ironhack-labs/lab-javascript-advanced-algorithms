let stack = new StackDataStructure
let maxSize=stack.MAX_SIZE
let control=stack.stackControl
let container = document.getElementById('stack')

for(let i = 0; i<maxSize; i++){
    let div= document.createElement('div')
    div.setAttribute('class','box')
    container.appendChild(div)
}

//let inputValue=document.getElementById('field').value
//console.log(inputValue)

let btnAdd=document.getElementsByClassName('add')
let divitos= document.getElementsByClassName('box')
let divitosArray=[...divitos]

//divitosArray.forEach(div => {
//    btnAdd.onclick = e => e.currentTarget.style.background = 'red'
//})


