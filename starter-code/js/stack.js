let stackData = new StackDataStructure(),
    addButton = document.getElementById('addStack'),
    list = document.getElementById('stackPile'),
    inputText = document.getElementById('inputStack').value;

function addContent() {

    stackData.canPush;
    stackData.push(inputText);

    console.log('add');
};

addButton.onclick = addContent;