import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { PageHome } from "./pages/PageHome";
import { Page404 } from "./pages/Page404";
import { PageCalender } from "./pages/PageCalender";
import { PageTabs } from "./pages/PageTabs";
import { PageTest } from "./pages/PageTest";

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
      {
        path: "/calender",
        element: <PageCalender />,
      },
      {
        path: "/tabs",
        element: <PageTabs />,
      },
      {
        path: "/test",
        element: <PageTest />
      }
    ],
  },
]);

export default router;
