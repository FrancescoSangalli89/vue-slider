// Descrizione:
// Partendo dal markup della versione svolta in js plain, 
// rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1 - al click su una thumb, visualizzare in grande l’immagine corrispondente
// 2 - applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3 - quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere 
// quando esce
// 4 - implementare la freccia a sx e dx della tastiera per muoversi avanti 
// ed indietro nelle slide
// Consigli del giorno:
// - regola d’oro: riciclare ovunque possibile! Questo significa che per la parte 
// di markup possiamo recuperare html e css dell’esercizio svolto qualche giorno fa: 
// è già tutto pronto!
// - il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, 
// l’esercizio si riduce a poche righe ;)
// Buon lavoro e buon divertimento!


const app = new Vue(
    {
        el: '#app',
        data: {
            clock: null,
            activeImage: 0,
            images: [
                {
                    url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
                    title: 'Svezia',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
                },
                {
                    url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
                    title: 'Perù',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
                },
                {
                    url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
                    title: 'Chile',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
                },
                {
                    url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
                    title: 'Argentina',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
                },
                {
                    url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
                    title: 'Colombia',
                    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
                },
            ]
        },
        methods: {
            next() {
                if (this.activeImage == (this.images.length - 1)) {
                    this.activeImage = 0;
                } else {
                    this.activeImage++;
                }
            },
            prev() {
                if (this.activeImage == 0) {
                    this.activeImage = this.images.length - 1;
                } else {
                    this.activeImage--;
                }
            },
            select(position) {
                this.activeImage = position;
            },
            stopAutoScroll() {
                clearInterval(this.clock);
                this.clock = null;
            },
            autoScroll() {
                if (this.clock == null) {
                    this.clock = setInterval(() => {
                        this.next();
                    }, 3000);
                }
            }
        },
        mounted() {
            this.autoScroll();
            this.$refs.carousel.focus();
        }
    }
);
