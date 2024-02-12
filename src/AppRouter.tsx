import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { PageHome } from "./pages/PageHome";
import { Page404 } from "./pages/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Page404 />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <PageHome />,
      },
    ],
  },
]);

export default router;