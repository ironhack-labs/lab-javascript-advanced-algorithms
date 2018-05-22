$(()=>{
    let html = "<h1>Abstract Data Types</h1>";
    html+='<div class="row">'
    for (i = 0; i<=1; i++){
        (i==0) ? a="Stack": a="Queue";
        html+='<div class="'+a+' col-sm-4"><h2>'+a+'</h2>';
        html+='<div class="form-group">';
        html+='<input type="text" class="form-control" style="width:100%" id="input'+a+'" placeholder="Add element to '+a+'">';
        html+='<button type="button" style="width:50%" class="btn btn-primary" id="add'+a+'">ADD</button>';
        html+='<button type="button" style="width:50%" class="btn btn-danger" id="remove'+a+'">TAKE</button>';
        html+='</div><div id="'+a+'Overflow">'+a+' Overflow</div></div>';
        (i==0) ? (html+='<div class="col-sm-2"></div>') : html+='</div>';
    }
    for (i = 0; i < 10; i++){
        html += '<div class="row">';
        html += '<div class="col-sm-4 stackElement" id="stack_'+i+'">-</div>';
        html += '<div class="col-sm-2"></div>';
        html += '<div class="col-sm-4 queueElement" id="queue_'+i+'">-</div>';
        html += '</div>';
    }
    html+='<div class="row"><div class="col-sm-4">';
    html+='<div id="StackUnderflow">Stack Underflow</div></div>';
    html+='<div class="col-sm-2"></div><div class="col-sm-4">';
    html+='<div id="QueueUnderflow">Queue Underflow</div></div></div>';
    document.getElementsByClassName("container")[0].innerHTML = html;
    $("#StackOverflow").hide();
    $("#StackUnderflow").hide();
    $("#QueueOverflow").hide();
    $("#QueueUnderflow").hide();
})