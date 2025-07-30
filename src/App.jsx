import "./App.css";
import TaskPage from "./TaskPage/TaskPage";
import LandingPage from "./LandingPage/LandingPage";
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FeaturesPage from "./FeaturesPage/FeaturesPage";
import AboutPage from "./AboutPage/AboutPage";
import ContactPage from "./ContactPage/ContactPage";

const App = () => {
  const router=createBrowserRouter([
    {
     path:"/",
     element:<LandingPage/>
  },
  {
    path:"/Task",
    element:<TaskPage/>
  },
  {
    path:"/Features",
    element:<FeaturesPage/>
  },{
    path:"/About",
    element:<AboutPage/>
  },
  {
   path:"/Contact",
   element:<ContactPage/>
  }
])
  return <RouterProvider router={router}/>
}

export default App;

