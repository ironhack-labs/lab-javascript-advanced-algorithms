var stack = new StackDataStructure();
$(document).ready(function(){
    alert("pagina loaded");
    console.log("pagina cargada");
    console.log(stack);
    $("#btAdd").click(function(){
        console.log("clic en el boton");
        console.log(stack);
        console.log($("#txValor")[0].value);        
        console.log(stack.push($("#txValor")[0].value));
        pintaDatos();
    })
    $("#btTake").click(function(){
        console.log("clic en el boton Take");
        console.log(stack);
        // console.log($("#txValor")[0].value);        
        console.log(stack.pop());
        pintaDatos();
    })
    function pintaDatos(){
        let html = "";
        stack.stackControl.forEach(function (elem, index) {

             html += '<div class= "elemento" id="stack_' + elem + '">'             
             html += '<button type="button" class="btn btn-outline-success">' + elem + '</button>'
             html += '</div>';            
             
        });
        document.getElementById('data').innerHTML = html;
    }
})
