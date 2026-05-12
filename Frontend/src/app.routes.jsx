import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Landing from "./pages/public/Landing";
import Features from "./pages/public/Features";
import About from "./pages/public/About";
import Pricing from "./pages/public/Pricing";
import Contact from "./pages/public/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Protected from "./pages/auth/Protected";
import Dashboard from "./pages/protected/Dashboard";
import InterviewPrep from "./pages/protected/InterviewPrep";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Landing />
            },
            {
                path: "features",
                element: <Features />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "pricing",
                element: <Pricing />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "dashboard",
                element: <Protected><Dashboard /></Protected>
            },
            {
                path: "interview/:interviewId",
                element: <Protected><InterviewPrep /></Protected>
            }
        ]
    }
])
