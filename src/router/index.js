import { createWebHistory, createRouter } from "vue-router";
import Main from '../components/Main';
import galleryMore from "@/pages/galleryMore";

const index = createRouter({
    history : createWebHistory(),
    routes : [
        { path : "/", name : "main", component : Main },
        { path : "/galleryMore", name : "galleryMore", component : galleryMore },
    ]
});

export default index;