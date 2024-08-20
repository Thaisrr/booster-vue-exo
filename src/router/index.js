import {createRouter, createWebHistory} from "vue-router";
import CounterComponent from "@/pages/CounterComponent.vue";
import ListeComponent from "@/pages/ListeComponent.vue";
import ListeFilm from "@/pages/ListeFilm.vue";
import SecretMessage from "@/pages/SecretMessage.vue";
import ContactForm from "@/pages/ContactForm.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/counter', component: CounterComponent},
        {path: '/courses', component: ListeComponent},
        {path: '/movies', component: ListeFilm},
        {path: '/secret', component: SecretMessage},
        {path: '/contact', component: ContactForm},
    ]
});

export default router;