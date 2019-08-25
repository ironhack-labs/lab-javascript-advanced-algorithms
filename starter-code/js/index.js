class View {
    constructor() {
        this.container = $('#body')
        this.stack = new Stack(this.container)
        this.container.append(this.stack.div)
    }
    clear() {
        this.container.childNodes().map(c => c.remove())
    }
}

window.onload = () => {
    let container = new View()

    $('#add-btn').click(() => {
        container.stack.push()
    })

    $('#take-btn').click(() => {
        container.stack.pop()
    })
}