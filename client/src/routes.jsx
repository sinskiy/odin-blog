import Login from "./routes/Login";
import Posts from "./routes/Posts";
import Root from "./routes/Root";
import Signup from "./routes/Signup";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Posts /> },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

export default routes;
