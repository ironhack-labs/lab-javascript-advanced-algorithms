//Llamada a los valores de StackDataStructure
const stack = new StackDataStructure()
//Crear variables para almacenarlos aqui
const stackArray = stack.stackControl
const maxSize = stack.MAX_SIZE
const add = document.getElementById("add")
const take = document.getElementById("take")
const textInput = document.getElementsByTagName('input')
const inputSide = document.getElementById('blocks')
console.log(stackArray, maxSize)

//Insertar divs en body 

const addElement = () => {
    for (let i = 0; i < maxSize; i++) {
        const divs = document.createElement('div')
        divs.setAttribute('class', 'box')
        inputSide.appendChild(divs)
    }
}
document.body.onload = addElement

//Add Element 

const printElement = () => {
    if(stack.canPush()){
    stack.push(textInput[0].value)
    const divChild = inputSide.children[maxSize - stackArray.length]
    divChild.setAttribute('class', 'box active')
    divChild.innerHTML = stackArray[stackArray.length - 1]
    }else{
        alert('Esta lleno')
    }
}

//Delete Element 

const remoElement = () => {
    const remove = inputSide.firstElementChild
    stack.pop()

    
  

    console.log({remove})
    console.log(stackArray)
}

//Clear Input Value

textInput[0].onclick = e => {

    textInput[0].value = ''

}


//Click ADD and Take

add.onclick = e => {
    printElement()
}

take.onclick = e => {
    remoElement()
}