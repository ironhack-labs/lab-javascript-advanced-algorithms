var slackStructure = new StackDataStructure();
var btnAdd = document.getElementById('addSlack');
var btnTake = document.getElementById('takeSlack');
var input = document.getElementById('inputStack');
var element = document.getElementsByClassName('element-slack');
var index = element.length-1;

btnAdd.onclick = function () {
    slackStructure.push(input.value);
    element[index].innerHTML = input.value;
    index--;
};

btnTake.addEventListener('click', function () {
    console.log("Take");
});

