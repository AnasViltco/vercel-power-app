import { lazy } from "react";
import fakeDelay from "../Shared/HelperMethods/FakeDelay";

const delayTime = 2000;

const routes = [
  {
    path: "/",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/PublicPages/Homepage/LandingPage/LandingPage")
      )
    ),
    ispublic: true,
    exact: true,
  },
 
  // { path: '/*', component: Error404, role: [1, 3, 4, 5] }
];

export default routes;
