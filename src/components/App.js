import React from 'react';
import Section from './Section';

import Profile from './Profile'
import user from '../jsons/user.json'

import Statistics from './statistics/Statistics';
import data from '../jsons/data.json'

import FriendList from './friends/FriendList';
import friends from '../jsons/friends.json'

import TransactionHistory from './transactions/TransactionHistory';
import transactions from '../jsons/transactions.json'


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

            <Statistics title="Upload stats" stats={data} />

            <FriendList friends={friends} />

            <Section>
                  <TransactionHistory transactions={transactions}/>
            </Section>

        </>
    )
}
