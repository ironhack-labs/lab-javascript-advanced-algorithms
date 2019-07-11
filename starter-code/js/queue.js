let queue = new QueueDataStructure()

document.getElementById('btn-add-queue').onclick = () => {
	let queueDiv = document.getElementsByClassName('queue')
	if (document.getElementById('queue-input').value.length) {
		if (queue.canEnqueue()) {
			queue.enqueue(document.getElementById('queue-input').value)
			queue.queueControl.forEach((elm, index) => {
				queueDiv[index].innerHTML = elm
				queueDiv[index].className += ' blue'
				document.getElementById('queue-underflow').innerHTML = ''
			})
		} else document.getElementById('queue-overflow').innerHTML = '<h3> QUEUE OVERFLOW!!</h3>'
	}
}

document.getElementById('btn-take-queue').onclick = () => {
	let queueDiv = document.getElementsByClassName('queue')
	if (!queue.isEmpty()) {
		queueDiv[queue.queueControl.length - 1].innerHTML = ''
		queueDiv[queue.queueControl.length - 1].className = 'queue'
		queue.dequeue()
		document.getElementById('queue-overflow').innerHTML = ''
	} else document.getElementById('queue-underflow').innerHTML = '<h3> QUEUE UNDERFLOW!!</h3>'
}
