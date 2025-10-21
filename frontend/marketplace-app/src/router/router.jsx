import Signin from "../pages/Sighin";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/signin",
        element: <Signin />
    }
])