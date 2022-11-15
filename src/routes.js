import {Text} from "@chakra-ui/react";
import Login from "./pages/Login";
import Bulletin from "./pages/Bulletin";
import Dashboard from "./pages/Dashboard";
import PortfolioAnalytics from "./pages/PortfolioAnalytics";
import Newsfeed from "./pages/Newsfeed";
import RulesAndRegulations from "./pages/RulesAndRegulations";
import Account from "./pages/Account";
import PortfolioTransactionHistory from "./pages/PortfolioTransactionHistory";
import CompanyDetails from "./pages/CompanyDetails";
import ProposalDetails from "./pages/ProposalDetails";
import ProposalForm from "./pages/ProposalForm";
import ESGAnalytics from "./pages/ESGAnalytics";
import PortfolioPerformance from "./pages/PortfolioPerformance";

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
    main: () => <Bulletin />,
    // children: () => (
    //   <Route
    //    path=":companyTicker"
    //    element={<CompanyDetails />}
    //   />
    // )
  },
  {
    path: "/bulletin/:companyTicker",
    main: () => <CompanyDetails />
  },
  {
    path: "/bulletin/:companyTicker/:proposalId",
    main: () => <ProposalDetails />
  },
  {
    path: "/bulletin/new",
    main: () => <ProposalForm />
  },
  {
    path: "/analytics",
    main: () => <PortfolioAnalytics />
  },
  {
    path: "/analytics/esg",
    main: () => <ESGAnalytics />
  },
  {
    path: "/analytics/performance",
    main: () => <PortfolioPerformance />
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
  {
    path: '/company/new',
    main: () => <Text>Create New Company - Under Development</Text>
  }
];
export default routes;