import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Chart from "../Components/Charts/Chart";
import ErrorPage from "../Components/Error/ErrorPage";
import Home from "../Components/Home/Home";
import QuizDetails from "../Components/Quizes/QuizDetails";
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
      {
        path: "quizes",
        element: <Quizes />,
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
      },
      {
        path: "quizes/:quizId",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
          );
        },
        element: <QuizDetails />,
      },
      {
        path: "chart",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Chart />,
      },
    ],
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
]);
export default router;
