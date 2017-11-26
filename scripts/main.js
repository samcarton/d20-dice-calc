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
        message: 'Roll!',
        input: []
    },
    methods: {
        buttonPushed: function (event) {
            this.input.push(event);

            if (this.input.length > 0) {
                this.message = '';
                for (var i = 0; i < this.input.length; i++) {
                    this.message += this.input[i];
                }
            }
        },
        roll: function(){
            this.message = 'Rolled';
        },
        onNew: function(){
            this.message = 'Newed';
        }
    }
});