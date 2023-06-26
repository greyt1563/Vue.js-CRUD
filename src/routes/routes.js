import { createWebHistory, createRouter } from 'vue-router';
import BindingComponent from '../components/Pages/BindingComponent.vue'
import HomeComponent from '../components/Pages/HomeComponent.vue'
import FormComponent from '../components/Pages/FormComponent.vue'
import NF404Component from '../components/Misc/NF404Component.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomeComponent,
        meta:
        {
            title: 'HOME'
        }
    },
    {
        name: 'Binding',
        path: '/binding',
        component: BindingComponent,
        meta:
        {
            title: 'BINDING'
        }
    },
    {
        name: 'Form',
        path: '/form',
        component: FormComponent,
        meta:
        {
            title: 'FORM'
        }
    },
    {
        name: 'NF404Component',
        path: '/:pathMatch(.*)*',
        component: NF404Component,
        meta:
        {
            title: 'PAGE NOT FOUND'
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = 'CRUD || ' + `${to.meta.title}`;
    next();
});

export default router;