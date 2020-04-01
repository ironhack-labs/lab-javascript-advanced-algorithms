const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new StackDataStructure();




const clearStackInput = () => {
    // TODO: Cada vez que pulsamos el boton, InnerText vacio
    stackInput.value = ''
}

clearStackInput()



const renderListStack = () => {
    //TODO: Crear la lista
    stackList.innerHTML = '';
    //TODO: Controlamos el tamaño del stackControl y sacamos la diferencia de cuantas celdas tenemos ocupadas
    const displaySize = newStack.display().length;
    const sizeResult = newStack.MAX_SIZE - displaySize;

    //TODO: Por cada elemento ocupado creamos un li con clase active y le insertamos el texto de cada item a traves de un map
    newStack.display().map(item => {
        let listLi = document.createElement('li');
        listLi.className = 'active';
        listLi.innerText = item;
        stackList.appendChild(listLi);
    });

    //TODO: Por cada elemento libre creamos un li con clase inactive
    for (let i = 0; i < sizeResult; i++) {
        let listLi = document.createElement('li')
        listLi.className = 'inactive'
        stackList.appendChild(listLi)
    }


    warningBottomStack.style.display = 'none'
    warningTopStack.style.display = 'none'

};

renderListStack();

//TODO: crear las alertas en caso de que se llene o vácie la lista
const generateWarningStack = type => {
    if (type === 'underflow') {
        // ... your code goes here
        warningBottomStack.style.display = 'block'
        warningBottomStack.innerText = type


    } else if (type === 'overflow') {
        // ... your code goes here
        warningTopStack.style.display = 'block'
        warningTopStack.innerText = type
    }
};




const addToStack = () => {
    if (newStack.push(stackInput.value) === 'Stack Overflow') {
        generateWarningStack('overflow');

    } else {

        clearStackInput();
        renderListStack();

    }


};


const removeFromStack = () => {
    // ... your code goes here
    if (newStack.pop() === 'Stack Underflow') {
        generateWarningStack('underflow');
    } else {
        renderListStack();
    }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);