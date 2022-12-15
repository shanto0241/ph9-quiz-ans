import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Chart from "../Components/Charts/Chart";
import ErrorPage from "../Components/Error/ErrorPage";
import Home from "../Components/Home/Home";
import Quizes from "../Components/Quizes/Quizes";
import MainLayout from "../Layouts/Main/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "home",
        element: <Home />,
      },
      { path: "quizes", element: <Quizes /> },
      { path: "chart", element: <Chart /> },
    ],
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
]);
export default router;
