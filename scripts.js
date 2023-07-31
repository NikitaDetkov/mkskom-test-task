const App = {
    data: () => ({
        albumId: '',
        images_buff: [],
        images: [],
        list_folders: [
            {
                name: 'Designer',
                num: 23
            },
            {
                name: 'Code Blocks',
                num: 15
            },
            {
                name: 'Drafts',
                num: 18
            },
            {
                name: 'Peoples Review',
                num: 21
            },
            {
                name: 'Social',
                num: 43
            },
            {
                name: 'Labels',
                num: 36
            },
            {
                name: 'My Notes',
                num: 29
            },
        ]
    }),
    methods: {
        async getImages(albumId) {
            const url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
            let response = await fetch(url);
            this.images_buff = await response.json();
            this.images = this.images_buff.slice(0, 16);
            albumId = '';
        },
        onlyNumbers(input) {
            let regChars = /[\D]/g;
            input.target.value = input.target.value.replace(regChars, '');
        },
        toFlex() {
            let container = document.querySelector('#images-container');
            container.classList.remove('images-container-grid');
            container.classList.add('images-container');
            this.images = this.images_buff.slice(0, 16);
        },
        toGrid() {
            let container = document.querySelector('#images-container');
            container.classList.remove('images-container');
            container.classList.add('images-container-grid');
            this.images = this.images_buff.slice(0, 5);
        }
    },
    mounted() {
        this.getImages(1)
    }
}

const app = Vue.createApp(App)
app.mount('#app')

