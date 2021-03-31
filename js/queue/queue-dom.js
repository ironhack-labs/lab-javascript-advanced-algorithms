const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
	queueInput.value = "";
};

const generateListQueue = () => {
	queueUL.innerHTML = "";
	queue.queueControl.forEach(elem => {
		let listItem = document.createElement("li");
		let text = document.createTextNode(elem);

		listItem.appendChild(text);
		queueUL.appendChild(listItem);
	})
};

generateListQueue();

const generateWarningQueue = type => {
	if (type === 'underflow') {
		warningBottomQueue.innerHTML = "Underflow";
		warningBottomQueue.style = "display: block";
	} else if (type === 'overflow') {
		warningTopQueue.innerHTML = "Overflow";
		warningTopQueue.style = "display: block";
	}
};

const addToQueue = () => {
	let result = queue.enqueue(queueInput.value);
	if (result === "Queue Overflow") {
		generateWarningQueue("overflow");
	} else {
		warningBottomQueue.style = "display: none";
	}

	generateListQueue();
	clearQueueInput();
};

const removeFromQueue = () => {
	let result = queue.dequeue();
	if (result === "Queue Underflow") {
		generateWarningQueue("underflow");
	} else {
		warningTopQueue.style = "display: none";
	}

	generateListQueue();

};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);