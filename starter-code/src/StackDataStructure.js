function StackDataStructure() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
}

StackDataStructure.prototype.isEmpty = function () {
    return this.stackControl.length === 0;
}

StackDataStructure.prototype.canPush = function () {
    return this.stackControl.length < this.MAX_SIZE;
}

StackDataStructure.prototype.push = function (item) {
    if ($(".stack:first").hasClass("underflow")) {
        $(".stack:first").html("");
        $(".stack:first").removeClass("underflow")
    } else if (this.canPush()) {
        this.stackControl.push(item);
        return this.stackControl;
    } else {
        $(".stack:last-child").addClass("overflow");
        $(".stack:last-child").text("Stack Overflow");
        return `Stack Overflow`;
    }
}

StackDataStructure.prototype.pop = function () {
    if (this.isEmpty()) {
        $(".stack:first").addClass("underflow");
        $(".stack:first").text("Stack Underflow");
        return `Stack Underflow`;
    } else if ($(".stacked:last-child").hasClass("overflow")) {
        $(".stacked:last-child").html("");
        $(".stacked:last-child").removeClass("overflow");
    } else {
        return this.stackControl.pop();
    }
}