function pushNumber(element){
  var firstItem = element.querySelector('.stack').querySelector('.last')
  var pushStack = stack.push(element.querySelector('input').value);
  if (pushStack == element.querySelector('input').value) {
    element.parentElement.querySelector('h3').querySelector('span').innerHTML = pushStack;
    firstItem.innerHTML = pushStack;
    firstItem.previousElementSibling.classList.add('last');
    firstItem.classList.remove('last');
  } else {
    element.querySelector('.overflow').removeAttribute('hidden');
    var attr = document.createAttribute('disabled')
    var buttonAdd = element.querySelector('.btn-push');
    element.querySelector('.btn-push').setAttributeNode(attr);
  }
}