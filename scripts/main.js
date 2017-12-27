Vue.component('calculator-button', {
    props: ['label'],
    template: '<button v-on:click="onPushed" class="col-2 numeric-button">{{ label }}</button>',
    methods: {
        onPushed: function () {
            this.$emit('pushed', this.label.toLowerCase());
        }
    }
});

Vue.component('display', {
    props: ['message'],
    template: '<div class="col-8 display">{{ message }}</div>'
});

var app = new Vue({
    el: '#app',
    data: {
        inputDisplay: 'Roll!',
        input: [],
        terms: [],
        results: [],
        total: ''
    },
    methods: {
        numericButtonPushed: function (event) {
            this.input.push(event);

            if (this.input.length > 0) {
                this.inputDisplay = '';
                for (var i = 0; i < this.input.length; i++) {
                    this.inputDisplay += this.input[i];
                }
            }
        },
        diceButtonPushed: function (event) {
            this.input.push('d');

            if (this.input.length > 0) {
                this.inputDisplay = '';
                for (var i = 0; i < this.input.length; i++) {
                    this.inputDisplay += this.input[i];
                }
            }
        },
        delButtonPushed: function (event) {
            // TODO
            // if there is input, backspace
            // otherwise if there is a term on top of the stack, pop it onto input and backspace
            this.input.push(event);

            if (this.input.length > 0) {
                this.inputDisplay = '';
                for (var i = 0; i < this.input.length; i++) {
                    this.inputDisplay += this.input[i];
                }
            }
        },
        operatorButtonPushed: function (event) {
            if(this.input.length > 0){
                this.terms.push(parseDiceTerm(this.input.join("")));
                this.input = [];
                this.inputDisplay = '';
            }

            this.numericButtonPushed(event);
        },
        roll: function(){
            // clear input, push onto terms, execute terms, tally up
            if(this.input.length > 0){
                this.terms.push(parseDiceTerm(this.input.join("")));
                this.input = [];
                this.inputDisplay = '';
            }

            this.results = this.terms.map((x) => x.execute());

            this.total = this.results.reduce((acc, val) => acc + val.total, 0);
        },
        onNew: function(){
            // TODO
            this.inputDisplay = 'Newed';
        }
    }
});