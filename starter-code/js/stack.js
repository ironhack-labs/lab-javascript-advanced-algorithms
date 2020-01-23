let stackArray = new StackDataStructure()
var btnPush = document.getElementById('btnPush');
var btnPop = document.getElementById('btnPop');
var pushText = document.getElementById('pushText');
var pushList = document.querySelectorAll('.pushList');



btnPush.addEventListener('click', function () {
    stackArray.push(pushText.value)

    console.log(pushText.value)
    stackArray.stackControl.forEach((elm, idx) => pushList[idx].innerText = elm)
    // console.log(stackArray.stackControl)
});
btnPop.addEventListener('click', function () {
    pushList.forEach((elm) => elm.innerText = "")
    stackArray.pop()
    // console.log(stackArray.stackControl)

});