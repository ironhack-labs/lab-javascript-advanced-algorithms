let queue = new QueueDataStructure();
let btnTake = document.getElementById('takeque')
let btnAdd = document.getElementById('addque')







//BOTONES
btnTake.addEventListener('click', function () {
    if (btnLeft.className == "btn stop") {
        printSplit()
    } else {
        clearSplits()
    }
});

btnAdd.addEventListener('click', function () {
    if (btnLeft.className == "btn stop") {
        printSplit()
    } else {
        clearSplits()
    }
});