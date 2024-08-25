import App from "./routes/App";
import Login from "./routes/Login";
import Posts from "./routes/Posts";
import Signup from "./routes/Signup";

export default [
  {
    path: "/",
    element: <App />,
    // TODO: errorElement
    children: [
      { index: true, element: <Posts /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
];
