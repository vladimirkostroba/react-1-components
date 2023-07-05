import React from 'react';
import Profile from './Profile'
import user from '../jsons/user.json'

export default function App(){
    return (
        <>
            <Profile
               username={user.username}
               tag={user.tag}
               location={user.location}
               avatar={user.avatar}
               stats={user.stats}
            />
        </>
    )
}

console.log(user);