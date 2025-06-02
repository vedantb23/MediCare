import React from 'react'
import { Navigate } from 'react-router-dom';
import { authContext } from '../context/AuthContext';
import { useContext } from 'react';
const ProtectedRoutes = ({ children, allowedRoles }) => {
    const {token, role} = useContext(authContext);
    const isAllowed = allowedRoles.includes(role);
    const accessibleRoute= token && isAllowed ? children : <Navigate to="/login" replace={true} />;
  return accessibleRoute;
}

export default ProtectedRoutes
