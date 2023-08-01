const App = {
    data: () => ({
        albumId: '',
        images_buff: [],
        images: [],
        list_folders: [
            {
                name: 'Designer', num: 23
            },
            {
                name: 'Code Blocks', num: 15
            },
            {
                name: 'Drafts', num: 18
            },
            {
                name: 'Peoples Review', num: 21
            },
            {
                name: 'Social', num: 43
            },
            {
                name: 'Labels', num: 36
            },
            {
                name: 'My Notes', num: 29
            },
        ]
    }),
    methods: {
        // Получить изображения с сервера
        // Входные данные: номер альбома
        // Получает данные в переменную images
        async getImages(albumId) {
            const url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
            let response = await fetch(url);
            this.images_buff = await response.json();

            this.images = this.images_buff.slice(0, 16);
            this.top_images =  this.images.slice(0, 2);
            this.bottom_images =  this.images.slice(2, 5);

            this.albumId = '';
        },
        // Скорректировать ввод: только для чисел
        onlyNumbers(input) {
            let regChars = /[\D]/g;
            input.target.value = input.target.value.replace(regChars, '');
        },
        // Преобразовать галерею к flex
        toFlex() {
            let container_flex = document.querySelector('#images-container');
            let container_grid = document.querySelector('#images-container-grid');

            container_flex.classList.remove('d-none');
            container_grid.classList.add('d-none');
        },
        // Преобразовать галерею к grid
        toGrid() {
            let container_flex = document.querySelector('#images-container');
            let container_grid = document.querySelector('#images-container-grid');

            container_flex.classList.add('d-none');
            container_grid.classList.remove('d-none');
        },
    },
    mounted() {
        // При загрузке выполняется запрос на картинки 1-го альбома
        this.getImages(1)
    }
}

const app = Vue.createApp(App)
app.mount('#app')

