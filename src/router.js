import { createRouter, createWebHistory} from 'vue-router';

import IndexPage from './pages/IndexPage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import SingleProjectPage from './pages/SingleProjectPage.vue'
import NotFound from './pages/NotFound.vue'



const router = createRouter ({
	hystory: createWebHistory(),
	routes: [
			{
				path:'/',
				name:'home',
				component: IndexPage
			},
			{
				path:'/projects',
				name:'projects.index',
				component: ProjectsPage
			},,
			{
				path:'/projects/:slug',
				name:'projects.show',
				component: SingleProjectPage
			},,
			{
				path:'/:pathMatch(.*)*',
				name:'not-found',
				component: NotFound
			},
	]
});

export {router};