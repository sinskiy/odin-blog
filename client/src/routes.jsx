import Edit from "./routes/Edit";
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
      { index: true, element: <Posts key={0} /> },
      {
        path: "/authors/:authorId",
        element: <Posts key={1} />,
      },
      {
        path: "/:postId",
        element: <Post />,
      },
      {
        path: "/:postId/edit",
        element: <Edit />,
      },
    ],
  },
];

export default routes;
