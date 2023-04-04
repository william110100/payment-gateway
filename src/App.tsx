import { FC, memo, Suspense, useEffect } from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Delivery, Finish, Payment } from "./pages";
import { GlobalStyle } from "./utilities/GlobalStyle";
import { Breadcrumb } from "./packages";
import { INITIAL_DATA } from "./utilities/constants";
import { AppProvider } from "./contexts";

const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Delivery />,
    },
    {
      path: "/payment",
      element: <Payment />,
    },
    {
      path: "/finish",
      element: <Finish />,
    },
  ]);

  useEffect(() => {
    if (localStorage.getItem("data") === null)
      localStorage.setItem("data", JSON.stringify(INITIAL_DATA));
  }, []);

  return (
    <Suspense fallback={<></>}>
      <AppProvider>
        <GlobalStyle />
        <Breadcrumb items={["Delivery", "Payment", "Finish"]} />
        <RouterProvider router={router} />
      </AppProvider>
    </Suspense>
  );
};

export default memo(App);
