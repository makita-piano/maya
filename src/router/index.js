import Vue from "vue";
import Router from "vue-router";
import Index from "../views/Index.vue";
import Profile from "../views/Profile.vue";
import Information from "../views/Information.vue";
import Discography from "../views/Discography.vue";
import Contact from "../views/Contact.vue";

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
			name: "Profile",
			component: Profile
		},
		{
			path: "/information",
			name: "Information",
			component: Information
		},
    {
			path: "/discography",
			name: "Discography",
			component: Discography
		},
		{
			path: "/contact",
			name: "Contact",
			component: Contact
		}
	]
});
