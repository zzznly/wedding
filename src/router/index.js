import { createWebHistory, createRouter } from "vue-router";
import Main from '../components/Main';

const index = createRouter({
    history : createWebHistory(),
    routes : [
        { path : "/", name : "main", component : Main },
    ]
});

export default index;