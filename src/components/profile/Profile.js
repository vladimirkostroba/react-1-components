import React from 'react';
import propTypes from 'prop-types';
import styles from './Profile.module.css'

function Profile({username,tag,location,avatar,stats}){
    return (
        <div className={styles.profile}>
  <div className={styles.container}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt={username}
      className={styles.avatar}
      width='240px'
    />
    <p className={styles.name}>{username}</p>
    <p className={styles.tag}>{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
  </div>
</div>
    )
}

Profile.defaultProps = {
  avatar:
      'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  };

  Profile.propTypes = {
    avatar: propTypes.string,
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    stats: propTypes.node.isRequired,
  };

  export default Profile;