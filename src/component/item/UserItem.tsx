import React from 'react';
import {IUser} from './../../types/ItemInterfaces';

interface UserProps {
    user: IUser;
}

const UserItem: React.FunctionComponent<UserProps> = ({user}) => {
    return (
        <div>
            <p><b>{user.id}. {user.name}</b></p>
            <p><b><i>ADDRESS: {user.address.zipcode}, {user.address.city} {user.address.street}</i></b></p>
            <p><i>E-mail: {user.email}</i></p>
            <br/>
        </div>
    );
}
export default UserItem;
