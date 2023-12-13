import { createBrowserRouter } from "react-router-dom";
// import RootLayout from "../layout/Layout";
import { ListPage, DetailPage } from "../pages";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/list",
        element: <ListPage />,
    },
    {
        path: "/detail",
        element: <DetailPage />,
    },
]);
export default router;
