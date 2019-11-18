let queueData = new QueueDataStructure();
let queueTiles = $(".queue-tile");
let addqueue = $("#add-queue");
let deletequeue = $("#delete-queue");
let queueInput = $("#queue-input");
let queueOver = $('.error-queue.over')
let queueUnder = $('.error-queue.under')

let updateQueueTiles = () => {
  for (i = 1; i <= queueTiles.length; i++) {
    if (i <= queueData.queueControl.length) {
      queueTiles.eq(queueTiles.length - i).addClass("queue-item");
      queueTiles.eq(queueTiles.length - i).text(queueData.queueControl[i - 1]);
    } else {
      queueTiles.eq(queueTiles.length - i).removeClass("queue-item");
      queueTiles.eq(queueTiles.length - i).text("");
    }
  }
};

addqueue.click(() => {
  if (queueInput.val() !== "") {
    if (queueData.canEnqueue()) {
      queueUnder.removeClass('error-active')
      queueData.enqueue(queueInput.val());
      queueInput.val("");
    } else {
        queueOver.addClass('error-active')
    }
  }
  updateQueueTiles();
});

deletequeue.click(() => {
    if(!queueData.isEmpty()) {
        queueOver.removeClass('error-active')
        queueData.dequeue()
    } else {
        queueUnder.addClass('error-active')
    }
    updateQueueTiles();
})