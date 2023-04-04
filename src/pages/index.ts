import { lazy } from "react";

const Delivery = lazy(() => import("./Delivery"));
const Finish = lazy(() => import("./Finish"));
const Payment = lazy(() => import("./Payment"));

export { Delivery, Finish, Payment };
