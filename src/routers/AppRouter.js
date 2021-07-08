import { BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import Navbar from '../components/Navbar/Navbar'
import ProfilePage from "../pages/ProfilePage";
import CategoriesPage from '../pages/CategoriesPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';
import PaymentsPage from '../pages/PaymentsPage';

export default function AppRouter () {
    return (
        <Router >
            <Navbar />
            <Switch>
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route exact path="/" component={HomePage} />

                <Route path="/profile/:username" component={ProfilePage} />
                <Route path="/categories" component={CategoriesPage} />

                <Route exact path="/signin">
                    <Redirect to="/login" />
                </Route>

                <PublicRoute exact path="/login" component={LoginPage} />
                <PublicRoute exact path="/register" component={RegisterPage} />
                

                <PrivateRoute exact path="/dashboard" component={DashboardPage} />
                <PrivateRoute exact path="/payments" component={PaymentsPage} />

                <Route path="*" component={NotFoundPage} />
            </Switch>
        </Router>
    );
}