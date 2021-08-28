const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');
const maxQueueSize = 10;

const queue = new Queue(maxQueueSize);

const clearQueueInput = () => {
	// ... your code goes here
	queueInput.value = '';
};

const generateListQueue = () => {
	// ... your code goes here
	const queueMinusAdd = maxQueueSize - queue.display().length;
	queueUL.innerHTML = '';

	for (let i = 0; i < queue.display().length; i++) {
		let li = document.createElement('li');
		li.classList = 'active';
		li.innerText = queue.display()[i];
		queueUL.appendChild(li);
	}

	for (let i = 0; i < queueMinusAdd; i++) {
		let li = document.createElement('li');
		li.classList = 'inactive';
		li.innerHTML = '';
		queueUL.appendChild(li);
	}
};

generateListQueue();

const generateWarningQueue = (type) => {
	if (type === 'underflow') {
		// ... your code goes here
		warningBottomQueue.style = 'display:block';
	} else if (type === 'overflow') {
		// ... your code goes here
		warningTopQueue.style = 'display:block';
	}
};

const addToQueue = () => {
	try {
		// ... your code goes here
		queue.enqueue(queueInput.value);
		warningBottomQueue.style = 'display:none';
	} catch (error) {
		// there was an overflow error, handle it
		generateWarningQueue('overflow');
		warningTopQueue.innerHTML = 'STACK_OVERFLOW';
	}
	clearQueueInput();
	generateListQueue();
};

const removeFromQueue = () => {
	try {
		// ... your code goes here
		queue.dequeue();
		warningTopQueue.style = 'display:none';
	} catch (error) {
		// there was an underflow error, handle it
		generateWarningQueue('underflow');
		warningBottomQueue.innerHTML = `STACK_UNDERFLOW`;
	}
	clearQueueInput();
	generateListQueue();
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
