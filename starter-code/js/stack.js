let stack = new StackDataStructure
let maxSize=stack.MAX_SIZE
let control=stack.stackControl
let container = document.getElementById('stack')

for(let i = 0; i<maxSize; i++){
    let div= document.createElement('div')
    div.setAttribute('class','box')
    container.appendChild(div)
}
