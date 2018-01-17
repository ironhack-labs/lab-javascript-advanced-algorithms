$(document).ready(function () {
    var stack = new StackDataStructure();
    var divs = 9;
    $(".btn-success").on("click", function (e) {
        var dato = $(".input").val();
        $(".stackPosition").removeClass("underflow");
        if (!stack.canPush()) {
            $(".overflow").css("visibility", "visible");
        } else {
            var hijo = divs - stack.stackControl.length;
            $("#stack>div:nth-child(" + hijo + ")").addClass("contains");
            $("#stack>div:nth-child(" + hijo + ")").text(dato);
            stack.push(dato);
        }
    });
    $(".btn-danger").on("click", function (e) {
        $(".overflow").css("visibility", "hidden");
        if (stack.isEmpty()) {
            $("#stack>div:nth-child(" + divs + ")").addClass("underflow");
            $("#stack>div:nth-child(" + divs + ")").text("STACK UNDERFLOW");
            $(".pop").text("")
        } else {
            var hijo = divs - stack.stackControl.length + 1;
            if (!($("#stack>div:nth-child(" + hijo + ")").text() == "STACK OVERFLOW")) {
                $(".pop").text($("#stack>div:nth-child(" + hijo + ")").text());
                $("#stack>div:nth-child(" + hijo + ")").removeClass("contains");
                stack.pop();
            }
            $("#stack>div:nth-child(" + hijo + ")").removeClass("contains");
            $("#stack>div:nth-child(" + hijo + ")").text("");
        }
    });
});