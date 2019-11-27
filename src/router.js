import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "Index",
			component: Index
		},
		{
			path: "/profile",
			name: "Index",
			component: Index
		},
		{
			path: "/information",
			name: "Index",
			component: Index
		},
		{
			path: "/contact",
			name: "Index",
			component: Index
		}
	]
});
