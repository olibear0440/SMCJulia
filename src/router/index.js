import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Step from "../views/Step.vue"
import Story from "../views/Story.vue"
import Conditions from "../views/Conditions.vue"
import Contact from "../views/Contact.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/step',
    name: 'step',
    component: Step
  },
  {
    path: '/story',
    name: 'story',
    component: Story
  },
  {
    path: '/conditions',
    name: 'conditions',
    component: Conditions
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
