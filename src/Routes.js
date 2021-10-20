import Home from './components/Home.vue';
import LandingPage from './components/LandingPage.vue';

export const routes = [{
    path: '/',
    component: Home,
},
{
    path: '/login',
    component : Home,
},
{
    path: '/landing-page',
    component: LandingPage,
    name:"LandingPage",
    props: true
},


]