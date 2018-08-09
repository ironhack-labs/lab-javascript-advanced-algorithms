$(document).ready(function () {

    var queue = new QueueDataStructure(8)
    var divs2 = $("#queue section")


    $('#add2').click(function () {

        var elem = $("#input2").val()
        console.log(elem)
        if (!elem == "") {
            if (queue.add(elem)) {

                $("#input2").val("")
                divs2[queue.elements.length - 1].innerHTML = elem;
                console.log(divs2[queue.elements.length - 1])
                var position = queue.elements.length
                console.log($("#queue section:nth-child(" + position + ")"))
                $("#queue section:nth-child(" + position + ")").addClass("filled")
            }
        }

    });


    $('#take2').click(function () {


        if (queue.elements.length > 0) {
            divs2[queue.elements.length - 1].innerHTML = "";
            var position = queue.elements.length
            $("#queue section:nth-child(" + position + ")").removeClass("filled")
            queue.take()
        } else alert("No elements left")

    });









});