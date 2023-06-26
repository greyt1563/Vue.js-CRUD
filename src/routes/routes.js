import { createWebHistory, createRouter } from 'vue-router';
import BindingComponent from '../components/Pages/BindingComponent.vue'
import DataTableComponent from '../components/Pages/DataTableComponent.vue'
import RegisterComponent from '../components/Pages/RegisterComponent.vue'
import LoginComponent from '../components/Pages/LoginComponent.vue'
import HomeComponent from '../components/Pages/HomeComponent.vue'
import DashboardComponent from '../components/Pages/DashboardComponent.vue'
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
        name: 'Table',
        path: '/table',
        component: DataTableComponent,
        meta:
        {
            title: 'TABLE'
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
    },
    {
        name: 'Register',
        path: '/register',
        component: RegisterComponent,
        meta:
        {
            title: 'REGISTER'
        }
    },
    {
        name: 'Login',
        path: '/login',
        component: LoginComponent,
        meta:
        {
            title: 'LOGIN'
        }
    },
    {
        name: 'Dshboard',
        path: '/dashboard',
        component: DashboardComponent,
        meta:
        {
            title: 'DASHBOARD'
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