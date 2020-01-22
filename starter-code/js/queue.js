let QueueData = new QueueDataStructure();


createQueue();
function createQueue() {
  let Qqueue = document.getElementById("queueQ");
  for (i = 0; i < QueueData.MAX_SIZE; i++) {
    let Qitem = document.createElement("li");
    console.log(QueueData.MAX_SIZE)
    Qqueue.appendChild(Qitem);
  }
}
let Qqueue = document.getElementById("queueQ");
let Qinput = document.getElementById("inputQ");
let Qadd = document.getElementById("addQ");
let Qdeleter = document.getElementById("deleteQ");
let Qitems = Qqueue.querySelectorAll("li");
let Qover = document.querySelector(".overQ");
let Qunder = document.querySelector(".underQ");

Qadd.addEventListener("click", () => {
    if (!QueueData.canPush()) {
        paintQueueOverflow()
    } else {
  QueueData.enqueue(Qinput.value);
  paintQueue();
  clearMessage()
  console.log(QueueData.queueControl);
    }
});

Qdeleter.addEventListener("click", () => {
    if (QueueData.isEmpty()) {
        paintQueueUnderFlow()
    } else {
  QueueData.dequeue();
  paintQueue();
  clearMessage()
  console.log(QueueData.queueControl);
    }
});

function paintQueue() {
    Qitems.forEach((item, idx) => {
        item.innerText = QueueData.queueControl[idx] || ""
    })
}

function paintQueueOverflow() {
    Qover.innerText = "QUEUE OVERFLOW"
}

function paintQueueUnderFlow() {
    Qunder.innerText = "QUEUE UNDERFLOW"
}

function clearMessage() {
   if (Qover.innerText !== "" || Qunder.innerText !== ""){
       Qover.innerText = ""
       Qunder.innerText = ""
   }
}