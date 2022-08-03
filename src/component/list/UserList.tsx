import { FunctionComponent } from "react";
import { IUser } from "../../types/ItemInterfaces";
import styles from './UserList.module.css';

interface UserListProps {
    users: IUser[];
}

const UserList: FunctionComponent<UserListProps> = ( { users } ) => {
    return (
        <div className={styles.userList}>
            { users.map(
                user => 
                <div key={user.id} className={styles.user}>
                    <h3>{user.id}. {user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>{user.address.zipcode}, {user.address.city} {user.address.street}</p>
                </div>)
            }
        </div>
    );
}
export default UserList;