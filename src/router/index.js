import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/personal-rating',
		name: 'PersonalRating',
		component: () => import('../components/PersonalRating.vue')
	},
	{
		path: '/global-rating',
		name: 'GlobalRating',
		component: () => import('../components/GlobalRating.vue')
	},
	{
		path: '/about-us',
		name: 'AboutUs',
		component: () => import('../components/AboutUs.vue')
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFoundView',
		component: () => import('../views/NotFoundView.vue')
	},
];

const router = createRouter({
	routes,
	history: createWebHistory(),
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else if (to.hash) {
			return { el: to.hash, top: 100 };
		} else {
			return { top: 0 };
		}
	},
});

export default router
