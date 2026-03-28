import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const isAuthenticated = () => {
    // Logic to check if the user is authenticated
    return localStorage.getItem('authToken') !== null; // Example check
};

const ProtectedRoute = ({ component: Component, ...rest }: any) => (
    <Route
        {...rest}
        render={(props) => (
            isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
        )}
    />
);

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/dashboard" component={Dashboard} />
                <Route path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default App;