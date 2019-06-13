window.onload = function() {
    var myQueue = new QueueDataStructure

    document.querySelector('#addButtonQeue').onclick = function() {

        let newItem = document.querySelector('#inputValueQeue').value
        if (newItem != "") {
            if (myQueue.canEnqueue()) {
                myQueue.enqueue(newItem)
                addItemToTheQueue(newItem)
            } else {
                document.querySelector("#stackOverflowQeue").classList = "stackShowed"
            }
            document.querySelector('#inputValueQeue').value = ""
            if (!myQueue.isEmpty()) {
                document.querySelector("#stackUnderflowQeue").classList = "stackHidden"
            }
        }
    }

    document.querySelector('#takeButtonQeue').onclick = function() {

        result = myQueue.dequeue()
        if (result == "Queue Underflow") {
            document.querySelector("#stackUnderflowQeue").classList = "stackShowed"
            document.querySelector("#elementTakedQeue").innerHTML = ""
        } else {
            let itempos = 1
            for (cont = 1; cont < myQueue.queueControl.length + 1; cont++) {
                document.querySelector("#itemEmptyQeue" + itempos).innerHTML = myQueue.queueControl[myQueue.queueControl.length - itempos]
                document.querySelector("#itemEmptyQeue" + itempos).classList = "itemAdded"
                itempos += 1;
            }
            document.querySelector("#itemEmptyQeue" + (myQueue.queueControl.length + 1)).classList = "itemEmpty"
            document.querySelector("#itemEmptyQeue" + (myQueue.queueControl.length + 1)).innerHTML = ""

            document.querySelector("#elementTakedQeue").innerHTML = result
            document.querySelector("#stackUnderflowQeue").classList = "stackHidden"
            if (!myQueue.isEmpty()) {
                document.querySelector("#stackOverflowQeue").classList = "stackHidden"
            }
        }
    }

    function addItemToTheQueue(newItem) {
        posItem = "#itemEmptyQeue" + myQueue.queueControl.length
        document.querySelector(posItem).innerHTML = newItem
        document.querySelector(posItem).classList = "itemAdded"
        document.querySelector("#elementTakedQeue").innerHTML = ""
    }
}