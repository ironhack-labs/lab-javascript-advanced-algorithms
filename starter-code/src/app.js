"use strict";

const app = new Vue({
    el: '#panApp',
    data: {
        stack: new StackDataStructure(),
        queue: new QueueDataStructure(),
        newStackItem: '',
        stackItemTaked: '',

        newQItem: ''
    },
    methods: {

        stackAddItem: function () {
            if (this.newStackItem === '') {
                return;
            }
            let ope = this.stack.push(this.newStackItem);

            this.newStackItem = '';
        },
        stackTake: function () {

            if (this.stack.isEmpty()) {
                return;
            }

            this.stackItemTaked = this.stack.pop();

            setTimeout(() => {
                app.stackItemTaked = '';
            }, 2000);

        },
    },

    computed: {

        getListaStack: function () {

            let listaReserve = [];
            for (let i = 0; i < this.stack.stackControl.length; i++) {
                let index = this.stack.stackControl.length -1 - i;
                listaReserve[i] = this.stack.stackControl[index];
            }
            console.log(listaReserve);
            return listaReserve;
        }
    },
    mounted() {

    }
});