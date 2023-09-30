
Vue.createApp({
    data(){
        return {
            goals:[],
            inputValue : ''
        };
    },
    methods:{
        addGoals(){
            this.goals.push(this.inputValue);
            this.inputValue = '';
        }            
    }
}).mount('#app');