const $stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input')
const $container = document.getElementById('container');
const $warningTopStack = document.querySelector('#stack-container .warning-top');
const $warningBottomStack = document.querySelector('#stack-container .warning-bottom');


// create stack instance, initialize DOM
const stack = new StackDataStructure;
generateDomlistStack();

// generate new HTML list

function generateDomlistStack() {
    $warningTopStack.style.display = 'none';
    $warningBottomStack.style.display = 'none';
    $stackList.innerHTML = '';
    for (let i = 0; i < stack.MAX_SIZE; i++) {
        if (stack.stackControl[i] === undefined) {
            let listElement = document.createElement("LI");
            listElement.className = 'inactive';
            $stackList.appendChild(listElement);
        } else {
            let listElement = document.createElement("LI");
            listElement.className = 'active';
            let textListElement = document.createTextNode(stack.stackControl[i]);
            listElement.appendChild(textListElement);
            $stackList.appendChild(listElement);
        }
    }
}

// Generate warnings
function generateWarningStack(type, message) {
    if (type === 'underflow') {
        $warningBottomStack.style.display = 'block'
        $warningBottomStack.innerText = message;
    } else if (type === 'overflow') {
        $warningTopStack.style.display = 'block'
        $warningTopStack.innerText = message;
    }
}

// Event listener for new stack input element
$container.addEventListener('click', function (e) {
    var valueStackInput = stackInput.value;
    var target = e.target;
    if (target.id === 'add-stack' && valueStackInput.length !== 0 && stack.canPush()) {
        stack.push(valueStackInput)
        stackInput.value = '';
        generateDomlistStack()
    } else if (target.id === 'add-stack' && valueStackInput.length !== 0 && !stack.canPush()) {
        generateWarningStack('overflow', stack.push())
    } else if (target.id === 'add-stack' && valueStackInput.length === 0) {
        alert('Need a value for input');
    } else if (target.id === 'take-stack' && !stack.isEmpty()) {
        stack.pop()
        generateDomlistStack()
    } else if (target.id === 'take-stack' && stack.isEmpty()) {
        generateWarningStack('underflow', stack.pop())
    }
})