import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Drag from "./pages/Drag";
import NotFound from "./pages/NotFound";
import './styles/main.css';

const router = createBrowserRouter([
    {
        element: <Home />, 
        path: '/'
    }, 
    {
        element: <Counter />, 
        path: '/counter'
    }, 

    {
        element: <Drag />, 
        path: '/drag'
    }, 
    

    {
        element: <NotFound />, 
        path: '*'
    }, 
    
])
export default function App(){
    return (
    <RouterProvider router={router}/>
    );

}