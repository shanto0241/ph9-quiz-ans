import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Chart from "./Components/Charts/Chart";
import Home from "./Components/Home/Home";
import Quizes from "./Components/Quizes/Quizes";
import MainLayout from "./Layouts/Main/MainLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        { path: "/", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "quizes", element: <Quizes /> },
        { path: "chart", element: <Chart /> },
      ],
    },
    {
      path: "/blog",
      element: <Blog></Blog>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
