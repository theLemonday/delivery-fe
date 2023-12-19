import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login";
import ErrorPage from "./pages/Error";
import { AuthLayout } from "./layouts/Auth";
import HomePage from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard";
import SignupPage from "./pages/Account/Create";
import ListAllAccountsPage from "./pages/Account/List/ListAll";

const router = createBrowserRouter([
    {
        errorElement: <ErrorPage />,
        children: [
            {
                element: <AuthLayout test={true} />,
                children: [
                    { path: "/", element: <HomePage /> },
                    { path: "/login", element: <LoginPage /> },
                    { path: "/dashboard", element: <Dashboard /> },
                    { path: "/account/create", element: <SignupPage /> },
                    {
                        path: "/accounts/all",
                        element: <ListAllAccountsPage />,
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
