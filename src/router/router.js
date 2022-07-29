import { createWebHistory, createRouter } from "vue-router";
import Main from '../components/Main';

const router = createRouter({
    history : createWebHistory(),
    routes : [
        { path : "/", name : "main", component : Main },
    ]
});

export default router;