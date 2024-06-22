import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const ListUsersWrapper = (WrappedComponent) => {
    const WrappedWithNavigation = (props) => {
        const navigate = useNavigate();
        const location = useLocation();
        const params = useParams();
        return (
            <div>
                <WrappedComponent navigate={navigate} location={location} params = {params} {...props} />
            </div>
        );
    }
    return WrappedWithNavigation
}
export default ListUsersWrapper;