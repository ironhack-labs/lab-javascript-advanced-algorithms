$(document).ready(function () {

    var jaja = new StackDataStructure();

    $(".btn-stack-add").on("click", function () {
         
        var valuestack=$('.input-stack').val();
       // $('.stack.e' + 1).removeClass("overflow").addClass("queue-gray");
        console.log(jaja);
        if(jaja.canPush()){
            jaja.stackControl.push(valuestack);
            var indexStack=jaja.stackControl.length;
            $('.stack.e'+indexStack).removeClass('gray').addClass('blue').html('<p class="l" >' + valuestack + ' </p>');
            if(indexStack===jaja.MAX_SIZE){
                $('.stack.e'+jaja.MAX_SIZE).removeClass('blue').addClass('overflow').text("STACK OVERFLOW");
            }
    
        }
    })
    $('.btn-stack-remove').click(function(){
        if (!jaja.isEmpty()) {
            var indexStack = jaja.stackControl.length;
            $('.stack.e' + indexStack).removeClass(" overflow blue").addClass('gray').text('');
            jaja.stackControl.push();
            // var indexqueue=jeje.MAX_SIZE-jeje.queueControl.length;
            if (indexStack === 1) {
                $('.stack.e' + indexStack).removeClass("gray").addClass("overflow").text("QUEUE-UNDERFLOW");
                indexStack = jaja.MAX_SIZE;
            }
        }


    })


    });
    //     jaja.push($("input").val());
    //     console.log(jaja)
    //     // $('.gray').toggleClass('.blue')

    //     $(".gray").last().removeClass("gray").addClass("blue");
    //     /*		$( ".stack" ).last().html("");
    //             console.log()*/
    // })

    // $(".btn-stack-remove").on("click", function () {

    //     jaja.pop($("input").val());

    //     $('.blue').first().removeClass("blue").addClass("gray");
    //     console.log(jaja)

    



