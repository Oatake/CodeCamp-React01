import React from "react";
import { createBrowserRouter, RouterProvider, Outlet , Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import LogIn from "../Pages/LogIn";
import NotFound from "../Pages/์NotFound";
import Header from "../Pages/Header";
import Product from "../Pages/Product";



// const guestRouter = createBrowserRouter([
//     {path: '/', element : <Home />},
//     {path: '/about', element : <About />},
//     {path: '/login', element : <LogIn />},
//     {path: '*', element : <NotFound />},
// ]);

const guestRouter = createBrowserRouter([
    {
        path : '/',
        // element : <Outlet />,
        element : (
            <>
                <Header />
                <Outlet />
            </>
        
        ),
        children : [
            {path : '', element : <Home />},
            {path : 'about', element : <About />},
            {path : 'login', element : <LogIn />},
            {path : 'product/:id', element : <Product />},
            // {path : '*', element : <NotFound />},
            {path : '*', element : <Navigate to ='/login' />},
        ]
    }
]);

export default function AppRouter() {
  return <RouterProvider router={guestRouter} />;
}
