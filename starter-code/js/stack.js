var stack = new StackDataStructure();

var buttonBlue = document.querySelector(".btn-blue");
buttonBlue.onclick = function() {
  var element = document.querySelector("#input").value;
  stack.push(element);
  printHtml()
};

var buttonRed = document.querySelector(".btn-red");
buttonRed.onclick = function() {
  stack.pop();
  printHtml()
};

function printHtml() {
    var html = ''
    for (var i = stack.MAX_SIZE - 1; i >= 0; i--) {
        if (i == stack.MAX_SIZE - 1 && !stack.canPush()) {
            html += "<div class='box-red'>" + stack.push(0) + "</div>" 
        } else if (i === 0 && stack.isEmpty()){
            html += "<div class='box-red'>" + stack.pop() + "</div>"
        } else {
            if ( stack.stackControl[i] == undefined) {
                html += "<div class='box-grey'></div>" 
            } else {
                html += "<div class='box-blue'>" + stack.stackControl[i] + "</div>" 
            } 
        }    
    }
    document.querySelector(".box").innerHTML = html
}