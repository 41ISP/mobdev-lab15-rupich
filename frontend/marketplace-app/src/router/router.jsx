import { createBrowserRouter } from "react-router-dom";
import Signin from "../pages/Sighin";
import SignUp from "../pages/SignUp";
import Logout from "../pages/Logout";
import Layout from "../components/Layout";
import Board from "../pages/Board";
import Feed from "../components/Feed";
import MyBids from "../components/MyBids";

export const router = createBrowserRouter([
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/signin",
        element: <Signin />
    },
    {
        path: "/logout",
        element: <Logout />
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Board />
            },
            {
                path: "/myitems",
                element: <Feed myOwn={true} />
            },
            {
                path: "/mybids",
                element: <MyBids />
            },
        ],
    },
],)