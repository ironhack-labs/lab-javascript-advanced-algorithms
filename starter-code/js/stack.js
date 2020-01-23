
let stackData = new StackDataStructure();

$(document).ready(function () {

    let index = 14;

    //boton de añadir

    $('#add-stack').click(function () {
        let stackValue = $("#stackelement").val();

        if (stackData.canPush()) {

            stackData.push(stackValue);
            $(".stack-element:nth-child(" + index + ")").text(stackData.stackControl[stackData.stackControl.length - 1]);
            $(".stack-element:nth-child(" + index + ")").addClass("addedelement");
            index--
            $(".stack:first-child > .under").css("display", "none");

        } else {

            $(".stack:first-child > .over").css("display", "block");

        }
        $("#stackelement").val("");
    });

    //boton de quitar

    $('#delete-stack').click(function () {
        if (stackData.isEmpty()) {

            $(".stack:first-child > .under").css("display", "block");

        } else {

            stackData.pop()
            index++
            $(".stack-element:nth-child(" + index + ")").text("")
            $(".stack-element:nth-child(" + index + ")").removeClass("addedelement");
            $(".stack:first-child > .over").css("display", "none");
        }
    });




}); 