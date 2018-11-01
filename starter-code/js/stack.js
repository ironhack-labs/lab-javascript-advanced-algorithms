var stackData = new StackDataStructure();

var stackContainer = document.querySelector('.stack .items');

var html = '<div class="over">Stack Overflow</div>';
for (var i = 0; i < stackData.MAX_SIZE; i++) {
  html += '<div class="item"></div>';
}
html += '<div class="under">Stack Underflow</div>';
stackContainer.innerHTML = html;

document.querySelector('.stack .add').onclick = function() {
  var stackResult = stackData.push(document.querySelector('#stack-item').value);
  if (Array.isArray(stackResult)) {
    stackRepaint();
  } else {
    document.querySelector('.stack .over').classList.add('active');
  }
};

document.querySelector('.stack .take').onclick = function() {
  if (stackData.pop() === 'Stack Underflow') {
    document.querySelector('.stack .under').classList.add('active');
  } else {
    stackRepaint();
  }
}

function stackRepaint() {
  document.querySelector('.stack .over').classList.remove('active');
  document.querySelector('.stack .under').classList.remove('active');

  document.querySelectorAll('.stack .item').forEach(function(item) {
    item.innerHTML = '';
    item.classList.remove('active');
  });

  [...stackData.stackControl]
    .forEach(function(item, index) {
      var itemDOM = document.querySelector(`.stack .item:nth-last-child(${index+2})`);
      itemDOM.innerHTML = item;
      itemDOM.classList.add('active');
  });
}