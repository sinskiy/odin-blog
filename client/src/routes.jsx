import Login from "./routes/Login";
import Post from "./routes/Post";
import Posts from "./routes/Posts";
import Root from "./routes/Root";
import Signup from "./routes/Signup";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      { index: true, element: <Posts /> },
      {
        path: "/authors/:authorId",
        element: <Posts />,
      },
      {
        path: "/:postId",
        element: <Post />,
      },
    ],
  },
];

export default routes;
