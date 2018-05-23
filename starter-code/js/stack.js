var stack = new StackDataStructure();
$(document).ready(function(){    
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
             html += '<input type="button" ' + ' value= "' + elem + '" class="btn btn-warning">'
             html += '</div>';            
             
        });
        document.getElementById('data').innerHTML = html;
    }
})
