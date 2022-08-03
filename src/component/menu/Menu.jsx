import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
    return (
        <div className={styles.topnav}>
            <NavLink className={styles.topnavItem} to="/properties" >Properties</NavLink>
            <NavLink className={styles.topnavItem} to="/server"     >Server</NavLink>
            <NavLink className={styles.topnavItem} to="/events"     >Events</NavLink>
            <NavLink className={styles.topnavItem} to="/hooks"      >Hooks</NavLink>
            <NavLink className={styles.topnavItem} to="/routes"     >Routes</NavLink>
        </div>
    );
}
export default Menu;
