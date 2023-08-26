import React, { Component, Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Route, Routes, Redirect } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary'; 
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';

import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';

import {Provider} from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';


class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Header />
                        <div className='container'>
                            <Routes>
                                <Route path="*" element={
                                <PrivateRoute element={<Dashboard />}/> } />
                                <Route exact path="/register" element={<Register />} />
                                <Route exact path="/login" element={<ErrorBoundary><Login /></ErrorBoundary>} /> {/* Wrap Login component */}
                                </Routes>
                        </div>
                    </Fragment>
                </Router>
            </Provider>
        );
    }
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);