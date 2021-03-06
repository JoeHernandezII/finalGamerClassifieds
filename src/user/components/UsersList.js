import React from 'react';
import './UserList.css';
import './UsersItem';

const UsersList = props => {
    if (props.items.length === 0) {
        return (
        <div className="center">
            <h2>Gamer Tags Not Found</h2>
        </div>
    );
        }

        return (
        <ul className="users-list">
        {props.items.map(user => (
             <UserItem 
             key={user.id} 
             id={user.id} 
             image={user.image} 
             name={user.name} 
             tagCount={user.tags} 

             />
        ))}
        </ul>
        );
};


export default UsersList;