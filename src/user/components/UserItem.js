import React from 'react';

import './UserItem.css';

const UsersItem = props => {
    return (
        <li className="user-item">
        <div className="user-item__content">
            <div className="user-item__image">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="user-item__info">
                <h2>{props.name}</h2>
                <h3>{props.tagCount} {props.tagCount ===1 ? 'Tag' : 'Tags'}
                </h3>
            </div>
        </div>
        </li>
    );
};

export default UsersItem;