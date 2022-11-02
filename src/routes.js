import {Text} from "@chakra-ui/react";
import Login from "./pages/Login";
import Bulletin from "./pages/Bulletin";
import Dashboard from "./pages/Dashboard";
import PortfolioAnalytics from "./pages/PortfolioAnalytics";
import Newsfeed from "./pages/Newsfeed";
import RulesAndRegulations from "./pages/RulesAndRegulations";
import Account from "./pages/Account";
import PortfolioTransactionHistory from "./pages/PortfolioTransactionHistory";


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
    path: "/logout",
    main: () => <Text>Logout</Text>
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
    main: () => <Dashboard />
  },
  {
    path: "/rar",
    main: () => <RulesAndRegulations />
  },
  {
    path: "/bulletin",
    main: () => <Bulletin />
  },
  {
    path: "/analytics",
    main: () => <PortfolioAnalytics />
  },
  {
    path: "/newsfeed",
    main: () => <Newsfeed />
  },
  {
    path: "/history",
    main: () => <PortfolioTransactionHistory />
  },
  {
    path: "/account",
    main: () => <Account />
  },
];
export default routes;