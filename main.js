const app = {
    data() {
        return {
            color: 'white',
            word: '',
        }
    },
    computed: {
        number() {
            return parseFloat(this.word) || 0;
        }
    }

}

Vue.createApp(app).mount('#app');
