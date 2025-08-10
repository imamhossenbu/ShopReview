import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Reviews from "../pages/Reviews";
import WriteReview from "../pages/WriteReview";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Privacy from "../pages/Privacy";
import Contact from "../pages/Contact";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/reviews',
                element: <Reviews />
            },
            {
                path: '/write-review',
                element: <WriteReview />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/privacy',
                element: <Privacy />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }

])

export default router;