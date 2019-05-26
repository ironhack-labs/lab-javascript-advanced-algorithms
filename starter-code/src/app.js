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

        },
    },

    computed: {

        getListaStack: function () {
            return this.stack.stackControl;
        }
    },
    mounted(){

    }
});