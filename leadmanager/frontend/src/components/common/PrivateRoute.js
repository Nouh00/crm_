import React from 'react'
import {Route , Redirect ,Routes} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({element:Component, auth, ...rest}) => (
    <Routes>
    <Route 
    {...rest}
    render={props => {
        if(auth.isLoading){
            return <h1>Loading...</h1>
        } else if(!auth.isAuthenticated){
            return <Redirect to="/login" />
        } else {
            return <Component {...props} />;
        }
        
    }}
    />
    </Routes>
)

const mapStateToProps = state => ({
    auth: state.auth
})


export default connect(mapStateToProps)(PrivateRoute);