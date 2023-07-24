import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css'

function Friends({friends}){

     return (
          <section className='friends'>
               <ul className='friendList'>
       {friends.map(({id,isOnline,avatar,name}) => (
         <li className='item' id={id}>
         <span className={isOnline? styles.online : styles.ofline}>{isOnline ? 'online' : 'ofline'}</span>
         <img className="avatar" src={avatar} alt="User avatar" width="48" />
         <p className="name">{name}</p>
    </li> 
    ))}     
        </ul>

          </section>
     )
}


   Friends.propTypes = {
     friends:PropTypes.arrayOf(
          PropTypes.exact({
              avatar:PropTypes.string,
              name:PropTypes.string.isRequired,
              isOnline:PropTypes.bool.isRequired,
              id:PropTypes.number.isRequired,
          }
          )
     )
   }

export default Friends;