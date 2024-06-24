import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Auth from './utils/Auth.ts'

type Route = {
    path: string,
    component: any,
    exact?: boolean,
}

const routes: Array<Route> = [
    {
        path: '/',
        component: Home,
        // exact: true
    },
    {
        path: '/home',
        component: Home,
        // exact: true
    },
    {
        path: '/login',
        component: Login,
        // exact: true
    },
];

const guard = (to: any, from: any, next: any) => {
    if (to.path !== '/login' && !Auth.isAuthenticated()) {
        next('/login');
    } else {
        next();
    }
}

export { routes, guard };
export type { Route };