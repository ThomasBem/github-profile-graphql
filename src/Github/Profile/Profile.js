import React from 'react';

import style from './Profile.scss';
import Avatar from './Avatar/Avatar';

const Profile = ({ profile, openGithubProfile }) => (
  <div className={style.root}>
    <Avatar avatarUrl={profile.avatarUrl} githubUrl={profile.githubUrl} openGithubProfile={openGithubProfile} />
    <div className="profile-info">
      <div className="name">{profile.name}</div>
      <div className="bio">{profile.bio}</div>
      <div className="follower-and-repos">
        <div>
          <div className="follower-heading">Followers</div>
          <div className="follower-count">{profile.followerCount}</div>
        </div>
        <div>
          <div className="repository-heading">Repositories</div>
          <div className="repository-count">{profile.repositoryCount}</div>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;