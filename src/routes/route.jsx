import { createBrowserRouter } from "react-router-dom";
import { ListPage, DetailPage } from "../pages";
import RootLayout from "../layout/Layout";
import GitApiPage from "../libs/apis/Api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <GitApiPage />,
      },
      {
        path: "/detail",
        element: <DetailPage />,
      },
    ],
  },
]);
export default router;
