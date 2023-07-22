import React from 'react';
import propTypes from 'prop-types';

function Profile({username,tag,location,avatar,stats}){
    return (
        <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt={username}
      className={avatar}
    />
    <p className="name">{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
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