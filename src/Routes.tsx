import React from "react";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import {
Profile,
Step1,
Step2,
Step3, 
Confirmation
} from "./pages";

const router = createBrowserRouter([
    {path: "/",
    element: <Profile />},
    {path: "/profile",
    element: <Profile />},
    {path: "/step1",
    element: <Step1 />},
    {path: "/step2",
    element: <Step2 />},
    {path: "/step3",
    element: <Step3 />},
    {path: "/confirmation",
    element: <Confirmation />}
]);

export const Routes = () => {
    return <RouterProvider router={router} />
}