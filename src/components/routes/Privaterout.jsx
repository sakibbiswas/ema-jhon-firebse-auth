import React, { Children, useContext } from 'react';
import { AuthContext } from '../Authprovider';
import { Navigate } from 'react-router-dom';

const Privaterout = ({ Children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <progress className="progress progress-error w-56" value="100" max="100"></progress>
    }
    if (user) {
        return Children;
    }
    return <Navigate to="/login"></Navigate>

};

export default Privaterout;