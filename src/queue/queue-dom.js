const queueUL = document.querySelector(".list-queue");
const queueInput = document.querySelector(".queue-input");
const warningTopQueue = document.querySelector("#queue-container .warning-top");
const warningBottomQueue = document.querySelector("#queue-container .warning-bottom");
const addQueue = document.querySelector(".btn-add-queue");
const dequeue = document.querySelector(".btn-take-dequeue");

const queue = new Queue();

const clearQueueInput = () => {
	queueInput.value = "";
};

const generateListQueue = () => {
	warningTopQueue.style.display = "none";
	warningBottomQueue.style.display = "none";
	queueUL.innerHTML = "";
	let qArr = queue.display();
	let len = qArr.length;
	for (let i = 0; i < queue.MAX_SIZE; i++) {
		let li = document.createElement("li");
		if (i < len) {
			li.className = "active";
			li.innerHTML = qArr[i];
		} else {
			li.className = "inactive";
			li.innerHTML = "&nbsp;";
		}
		queueUL.appendChild(li);
	}
};

generateListQueue();

const generateWarningQueue = type => {
	let warningEl = type === "underflow" ? warningBottomQueue : type === "overflow" ? warningTopQueue : { style: {}, innerHTML };
	warningEl.style.display = "block";
	warningEl.innerHTML = type;
};

const addToQueue = () => {
	try {
		queue.enqueue(queueInput.value);
	} catch (error) {
		return generateWarningQueue("overflow");
	}
	clearQueueInput();
	generateListQueue();
};

const removeFromQueue = () => {
	try {
		queue.dequeue();
	} catch (error) {
		return generateWarningQueue("underflow");
	}
	generateListQueue();
};

addQueue.addEventListener("click", addToQueue);
dequeue.addEventListener("click", removeFromQueue);
