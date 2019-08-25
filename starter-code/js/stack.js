class Stack {
    type = 'Stack'
    constructor(parent) {
        this.stack = new StackDataStructure()
        this.div = $(document.createElement('DIV'))
        this.rows = []

        for (let i = 0; i < this.stack.MAX_SIZE; i++) {
            let row = $(document.createElement('DIV'))
            row.addClass("col-lg-12 stack stack-row-empty")
            this.rows.push(row)
            row.appendTo(this.div)
        }

        this.update()
        this.div.appendTo(parent)
    }

    update() {
        $("#underflow").removeClass('stack-underflow')
        $("#overflow").removeClass('stack-overflow')

        for (let i = this.stack.MAX_SIZE-1; i >=0; i--) {
            let stackElement = this.stack.stackControl[i]
            let row = this.rows[this.stack.MAX_SIZE-i-1]
            if (stackElement !== undefined) {
                row.html(`<p><i class="fas fa-layer-group"></i> ${stackElement}</p>`)
                row.removeClass("stack-row-empty stack-underflow stack-overflow").addClass('stack-row-occupied')
            } else {
                row.removeClass("stack-row-occupied stack-underflow stack-overflow").addClass('stack-row-empty')
                row.html("")
            }
        }
    }

    pop() {
        let result = this.stack.pop()
        if (result === `${this.type} Underflow`) this.underflowAlert()
        else this.update()
    }

    push() {
        let e = $('#element-input').val()
        let result = this.stack.push(e)
        if (result === `${this.type} Overflow`) this.overflowAlert()
        else this.update()
    }

    underflowAlert(){
        $("#underflow").addClass('stack-underflow')
    }

    overflowAlert(){
        $("#overflow").addClass('stack-overflow')
    }
}