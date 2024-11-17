import "./App.css";

// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   NavLink
// } from "react-router-dom"; v6...

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Form from "./pages/help/Form";
import ArticlesDetail from "./pages/articles/ArticlesDetail";
import ErrorPage from "./pages/ErrorPage";
import Articles from "./pages/articles/Articles";

// layouts
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ArticlesLayout from "./layout/ArticlesLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "contact",
          element: <ContactLayout />,
          children: [
            {
              path: "faq",
              element: <Faq />,
            },
            {
              path: "form",
              element: <Form />,
            },
          ],
        },
        {
          path: "articles",
          element: <ArticlesLayout />,
          children: [
            {
              path: ":id",
              element: <ArticlesDetail />,
            },
            {
              index: true,
              element: <Articles />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
