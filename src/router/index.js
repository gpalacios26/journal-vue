import { createRouter, createWebHashHistory } from 'vue-router';
import authRouter from '../modules/auth/router';
import daybookRouter from '../modules/daybook/router';
import isAuthenticatedGuard from '../modules/auth/router/auth-guard';
import isPublicGuard from '../modules/auth/router/public-guard';

const routes = [
    {
        path: '/',
        redirect: '/daybook'
    },
    {
        path: '/auth',
        beforeEnter: [isPublicGuard],
        ...authRouter
    },
    {
        path: '/daybook',
        beforeEnter: [isAuthenticatedGuard],
        ...daybookRouter
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
