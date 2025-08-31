import { routes } from "../constant/route";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const approutes = [
  { path: routes.home, Component: Home },
  { path: routes.signin, Component: SignIn },
  { path: routes.signup, Component: SignUp },
];

export default approutes;
