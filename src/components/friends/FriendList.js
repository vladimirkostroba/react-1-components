import React from 'react';
// import PropTypes from 'prop-types';

function Friends(friends){
     return (
        <ul className='friendList'>
       {friends.map(friend => (
         <li className='item' id={friend.id}>
         <span className="status">{friend.isOnline ? 'online' : 'ofline'}</span>
         <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
         <p className="name">{friend.name}</p>
    </li> 
    ))}     
        </ul>
     )
}

export default Friends;