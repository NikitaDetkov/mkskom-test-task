const App = {
    data: () => ({
        counter: 12,
        albumId: null,
        images: []
    }),
    methods: {
        async getImages(quantity) {
            const url = 'https://jsonplaceholder.typicode.com/albums/3/photos';
            let response = await fetch(url);
            this.images = await response.json();
        }
    },
    mounted() {
        this.getImages()
    }
}

const app = Vue.createApp(App)
app.mount('#app')

