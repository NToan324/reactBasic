import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HomeWrapper = (WrappedComponent) => {

    // Return a new functional component that uses the hooks
    const WrappedWithNavigation = (props) => {
        const navigate = useNavigate();
        const location = useLocation();

        return (
            <div>
                <WrappedComponent navigate={navigate} location={location} {...props} />
            </div>
        );
    };

    return WrappedWithNavigation;
};

export default HomeWrapper;
