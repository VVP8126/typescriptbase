import { Outlet } from 'react-router-dom';
import Menu from '../menu/Menu';

const Layout = () => {
    return <div><Menu /><Outlet /></div>
}

export default Layout;