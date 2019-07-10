let stack = new StackDataStructure()

document.getElementById('btn-add-stack').onclick = () => {
	let stackDiv = document.getElementsByClassName('stack')
	if (document.getElementById('stack-input').value.length) {
		if (stack.canPush()) {
			stackDiv[stack.MAX_SIZE - stack.stackControl.length - 1].innerHTML = document.getElementById('stack-input').value
			stack.push(document.getElementById('stack-input').value)
			document.getElementById('stack-underflow').innerHTML = ''
		} else document.getElementById('stack-overflow').innerHTML = '<h3> STACK OVERFLOW!!</h3>'
	}
}

document.getElementById('btn-take-stack').onclick = () => {
	let stackDiv = document.getElementsByClassName('stack')
	if (!stack.isEmpty()) {
		stackDiv[stack.MAX_SIZE - stack.stackControl.length].innerHTML = ''
		document.getElementById('stack-overflow').innerHTML = ''
		stack.pop()
	} else document.getElementById('stack-underflow').innerHTML = '<h3> STACK UNDERFLOW!!</h3>'
}
