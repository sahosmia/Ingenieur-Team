import { HomePage, ContactPage, ServicePage, CareerPage, AboutPage } from "./pages";



export const frontRoute = [
  {
    path: "/",
    title: "Home",
    component: HomePage,
  },
  {
    path: "/contact",
    title: "Contact",
    component: ContactPage,
  },
  {
    path: "/services",
    title: "Service",
    component: ServicePage,
  },
  {
    path: "/careear",
    title: "Career",
    component: CareerPage,
  },
  {
    path: "/about",
    title: "About us",
    component: AboutPage,
  },




];


