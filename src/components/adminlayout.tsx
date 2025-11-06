import { Outlet } from 'react-router';

const adminlayout = () => {
    return (
        <div>
            this is adminlayout

            <Outlet></Outlet>
        </div>
    );
};

export default adminlayout;