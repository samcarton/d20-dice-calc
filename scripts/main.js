Vue.component('numericButton',{
    props: ['label'],
    template:'<button v-on:click="onPushed">{{ label }}</button>',
    methods: {
        onPushed: function() {
            this.$emit('pushed', this.label);
        }
    }
});

Vue.component('display',{
    props: ['message'],
    template:'<div>{{ message }}</div>'
});

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      total: []
    },
    methods: {
        buttonPushed: function(event){
            this.total.push(parseInt(event,10));

            if(this.total.length > 0)
            {
                this.message = '';
                for(var i = 0; i<this.total.length; i++)
                {
                    this.message += this.total[i];
                }
            }
        }
    }

  });