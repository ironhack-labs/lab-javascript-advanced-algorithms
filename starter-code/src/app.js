"use strict";

const app = new Vue({
    el: '#panApp',
    data: {
        stack: new StackDataStructure(),
        stackMsgError:null,
        queue: new QueueDataStructure(),
        qMsgError:null,
        newStackItem: '',

        stackItemTaked: '',
        newQItem: '',
        qItemTaked: ''
    },
    methods: {

        stackAddItem: function () {
            if (this.newStackItem === '') {
                return;
            }
            let ope = this.stack.push(this.newStackItem);

            if(ope==='Stack Overflow'){
                this.stackMsgError=ope;
            }else{
                this.stackMsgError=null;
            }


            this.newStackItem = '';
        },
        stackTake: function () {


             let ope = this.stack.pop();

            if( ope ==='Stack Underflow'){
                this.stackMsgError=ope;
            }else{
                this.stackItemTaked=ope;
                this.stackMsgError=null;
                setTimeout(() => {
                    app.stackItemTaked = '';
                }, 3000);
            }

        },

        qAddItem: function () {
            if (this.newQItem === '') {
                return;
            }

            let ope = this.queue.enqueue(this.newQItem);

            if (ope === 'Queue Overflow') {

            }

            this.newQItem = '';
        },
        qTake: function () {

            let item = this.queue.dequeue();

            if (item === 'Queue Underflow') {

            } else {
                this.qItemTaked = item;
                setTimeout(() => {
                    app.qItemTaked = '';
                }, 3000);
            }
        }
    },

    computed: {

        getListaStack: function () {

            let listaReserve = [];
            for (let i = 0; i < this.stack.stackControl.length; i++) {
                let index = this.stack.stackControl.length - 1 - i;
                listaReserve[i] = this.stack.stackControl[index];
            }
            console.log(listaReserve);
            return listaReserve;
        },

        getListaQ: function () {

            console.log(this.queue.queueControl);
            return this.queue.queueControl;
        }
    },
    mounted() {

    }
});