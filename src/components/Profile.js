import React from 'react';
import propTypes from 'prop-types';

function Profile({username,tag,location,avatar,stats}){
    return (
        <div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt={username}
      class={avatar}
    />
    <p class="name">{username}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.defaultProps = {
    imgUrl:
      'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  };

  Profile.propTypes = {
    avatar: propTypes.string,
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
  };

  export default Profile;