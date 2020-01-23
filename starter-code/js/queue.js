let queueArray = new QueueDataStructure()
var btnUnshift = document.getElementById('btnUnshift');
var btnPop2 = document.getElementById('btnPop2');
var unshiftText = document.getElementById('unshiftText');
var unshiftList = document.querySelectorAll('.unshiftList');



btnUnshift.addEventListener('click', function () {
    queueArray.enqueue(unshiftText.value)
    // console.log(unshiftList)


    queueArray.queueControl.forEach((elm, idx) => unshiftList[idx].innerText = elm)
    // console.log(unshiftText.value)
    // console.log(queueArray.queueControl)


});
btnPop2.addEventListener('click', function () {
    queueArray.dequeue()
    unshiftList.forEach((elm) => elm.innerText = "")
    console.log(unshiftList.forEach((elm) => console.log(elm.innerText)))
});