var clickAdd = document.getElementsByClassName("btn btn-primary mb-3")[0]
var clickTake = document.getElementsByClassName("btn btn-danger")[0]
var stack1 = new StackDataStructure()

clickAdd.onclick = function () {
    if (document.querySelector('.underflow')) {
        parentNode = document.querySelector('ul')
        parentNode.removeChild(document.querySelector('.underflow'))
    }
    let stack = stack1.push(document.getElementsByTagName("input")[0].value)
    if (stack == 'Stack Overflow' && !document.querySelector('.overflow')) {
        let alert = document.createElement('li')
        alert.className = 'list-group-item overflow'
        parentNode = document.querySelector('ul')
        parentNode.insertBefore(alert, document.querySelectorAll('li')[0])
        document.querySelectorAll('li')[0].innerText = "Stack Overflow"
    } else {
        let arrElement = stack[stack.length - 1]
        document.querySelectorAll("li")[stack1.MAX_SIZE - stack.length].innerText = arrElement
    }
}

clickTake.onclick = function () {
    if (document.querySelector('.overflow')) {
        parentNode = document.querySelector('ul')
        parentNode.removeChild(document.querySelector('.overflow'))
    }
    let cusp = document.querySelectorAll("li")[stack1.MAX_SIZE - stack1.stackControl.length]
    if (cusp) {
        let popped = stack1.pop(cusp.innerText)
        document.querySelectorAll("li")[stack1.MAX_SIZE - stack1.stackControl.length - 1].innerText = ""
    } else if (!document.querySelector('.underflow')) {
        let alert = document.createElement('li')
        alert.className = 'list-group-item underflow'
        parentNode = document.querySelector('ul')
        parentNode.appendChild(alert)
        document.querySelectorAll('li')[stack1.MAX_SIZE].innerText = "Stack Underflow"
    }
}