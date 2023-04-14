import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import SearchResultsPage from './pages/SearchResultsPage';
import RecipePage from './pages/RecipePage';
import CategoryPage from './pages/CategoryPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <div>This is contact page</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    element: <SearchResultsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/recipe/:id",
    element: <RecipePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/category/:id",
    element: <CategoryPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

reportWebVitals();