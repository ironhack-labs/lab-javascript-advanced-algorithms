window.onload = function() {
    var myStack = new StackDataStructure

    document.querySelector('#addButton').onclick = function() {
        let newItem = document.querySelector('#inputValue').value
        if (newItem != "") {
            if (myStack.canPush()) {
                myStack.push(newItem)
                addItemToTheStack(newItem)

            } else {
                document.querySelector("#stackOverflow").classList = "stackShowed"
            }
            document.querySelector('#inputValue').value = ""
            if (!myStack.isEmpty()) {
                document.querySelector("#stackUnderflow").classList = "stackHidden"
            }
        }
    }
    document.querySelector('#takeButton').onclick = function() {

        result = myStack.pop()
        if (result == "Stack Underflow") {
            document.querySelector("#stackUnderflow").classList = "stackShowed"
            document.querySelector("#elementTaked").innerHTML = ""
        } else {
            document.querySelector("#itemEmpty" + (myStack.stackControl.length + 1)).innerHTML = ""
            document.querySelector("#itemEmpty" + (myStack.stackControl.length + 1)).classList = "itemEmpty"

            document.querySelector("#elementTaked").innerHTML = result
            document.querySelector("#stackUnderflow").classList = "stackHidden"

            if (!myStack.isEmpty()) {
                document.querySelector("#stackOverflow").classList = "stackHidden"
            }
        }

    }

    function addItemToTheStack(newItem) {
        posItem = "#itemEmpty" + myStack.stackControl.length
        document.querySelector(posItem).innerHTML = newItem
        document.querySelector(posItem).classList = "itemAdded"
        document.querySelector("#elementTaked").innerHTML = ""
    }
}