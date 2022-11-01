import {Text} from "@chakra-ui/react";
import Login from "./pages/Login";

const routes = [
  {
    path: "/",
    main: () => <Text>Home</Text>
  },
  {
    path: "/signup",
    main: () => <Text>Signup</Text>
  },
  {
    path: "/forgotpassword",
    main: () => <Text>Forgot Password</Text>
  },
  {
    path: "/login",
    main: () => <Login />
  },
  {
    path: "/dashboard",
    main: () => <Text>Dashboard</Text>
  },
  {
    path: "/rar",
    main: () => <Text>Rules and Regulations</Text>
  },
  {
    path: "/bulletin",
    main: () => <Text>Bulletin Board</Text>
  },
  {
    path: "/analytics",
    main: () => <Text>Analytics</Text>
  },
  {
    path: "/newsfeed",
    main: () => <Text>Newsfeed</Text>
  },
  {
    path: "/history",
    main: () => <Text>History</Text>
  },
  {
    path: "/account",
    main: () => <Text>Account</Text>
  },
];
export default routes;