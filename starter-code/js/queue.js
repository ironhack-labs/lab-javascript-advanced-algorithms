function insertEnqueue(element){
  var firstItem = element.querySelector('.queue').querySelector('.first')
  var pushQueue = queue.enqueue(element.querySelector('input').value);
  if (pushQueue == element.querySelector('input').value) {
    element.parentElement.querySelector('h3').querySelector('span').innerHTML = pushQueue;
    firstItem.innerHTML = pushQueue;
    firstItem.nextElementSibling.classList.add('first');
    firstItem.classList.remove('first');
  } else {
    element.querySelector('.overFlow').removeAttribute('hidden');
    var attr = document.createAttribute('disabled')
    var buttonAdd = element.querySelector('.btn-enqueue');
    element.querySelector('.btn-enqueue').setAttributeNode(attr);
  }

  
}