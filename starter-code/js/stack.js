var stack = new StackDataStructure()


var inputDataButton = document.getElementById('inputDataButton')
var outDataButton = document.getElementById('outputDataButton')
var inData = document.getElementById('inputData').value
var takeData = document.getElementById('outputData')
var outPut = document.getElementById('outputDataId')
var overFlow = document.getElementsByClassName('overflow')
var underFlow = document.getElementsByClassName('underFlow')

inputDataButton.onclick = function() {
  if (stack.checkFull()) return ('Stack OverFlow'); else stack.pushData(inData)
}

outDataButton.onclick = function() {
  if (stack.checkEmpty()) return ('Stack UnderFlow'); else stack.takeData();
  outPut.innerHTML = stack.extractedData
}





