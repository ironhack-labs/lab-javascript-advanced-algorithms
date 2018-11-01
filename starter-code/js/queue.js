var queueData = new QueueDataStructure();

var queueContainer = document.querySelector('.queue .items');

var html = '<div class="over">Queue Overflow</div>';
for (var i = 0; i < queueData.MAX_SIZE; i++) {
  html += '<div class="item"></div>';
}
html += '<div class="under">Queue Underflow</div>';
queueContainer.innerHTML = html;

document.querySelector('.queue .add').onclick = function() {
  var queueResult = queueData.enqueue(document.querySelector('#queue-item').value);
  
  if (Array.isArray(queueResult)) {
    queueRepaint();
  } else {
    document.querySelector('.queue .over').classList.add('active');
  }
};

document.querySelector('.queue .take').onclick = function() {
  if (queueData.dequeue() == 'Queue Underflow') {
    console.log("underflow");
    document.querySelector('.queue .under').classList.add('active');
  } else {
    queueRepaint();
  }
}

function queueRepaint() {
  document.querySelector('.queue .over').classList.remove('active');
  document.querySelector('.queue .under').classList.remove('active');

  document.querySelectorAll('.queue .item').forEach(function(item) {
    item.innerHTML = '';
    item.classList.remove('active');
  });

  queueData.queueControl.forEach(function(item, index) {
      var itemDOM = document.querySelector(`.queue .item:nth-last-child(${index+2})`);
      itemDOM.innerHTML = item;
      itemDOM.classList.add('active');
  });
}