var queue = new QueueDataStructure();
$(document).ready(function(){    
    console.log("pagina cargada");
    console.log(queue);
    $("#btAddQueue").click(function(){
        console.log("clic en el boton");
        console.log(queue);
        console.log($("#txValorQueue")[0].value);        
        console.log(queue.enqueue($("#txValorQueue")[0].value));
        pintaDatosQueue();
    })
    $("#btTakeQueue").click(function(){
        console.log("clic en el boton Take");
        console.log(queue);
        // console.log($("#txValorQueue")[0].value);        
        console.log(queue.dequeue());
        pintaDatosQueue();
    })
    function pintaDatosQueue(){
        let html = "";
        queue.queueControl.forEach(function (elem, index) {

             html += '<div class= "elemento" id="queue_' + elem + '">'             
             html += '<input type="button" ' + ' value= "' + elem + '" class="btn btn-warning">'             
             html += '</div>';            
             
        });
        document.getElementById('data2').innerHTML = html;
    }
})
