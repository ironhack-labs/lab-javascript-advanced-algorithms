var stack = new Stack();

var buttonAdd = getElementById("add");
var buttonTake = getElementById("take");

// crear
// var createItem = document.createElement("div");
// var itemStack = document.getElementById('itemStack');

// atributos
// paragraph.removeAttribute('id');
// paragraph.setAttribute('class', 'paragraph');

// inyectar

function addItem() {

    buttonAdd.onclick = function() {

    }

    $(document).ready(function() {

        //$(".Stack").createElement("div").css(".itemStack")
        $(".Stack").prepend('<div class="itemStack"></div>');

    })

    // var pTag = document.createElement('div');
    // var att = contentDiv.setAttribute('class', 'itemStack');
    // document.getElementById('stack').innerHTML = ptag

}