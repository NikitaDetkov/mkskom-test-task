const App = {
    data: () => ({
        albumId: '',
        images_buff: [],
        images: [],
    }),
    methods: {
        async getImages(albumId) {
            const url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
            let response = await fetch(url);
            this.images_buff = await response.json();
            this.images = this.images_buff.slice(0, 16)
            albumId = '';
        }
    },
    mounted() {
        this.getImages(1)
    }
}

const app = Vue.createApp(App)
app.mount('#app')

