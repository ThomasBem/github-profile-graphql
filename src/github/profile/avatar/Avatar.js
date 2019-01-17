import React from 'react';

import style from './Avatar.scss';

const Avatar = ({ avatarUrl, githubUrl, openGithubProfile }) => (
  <div className={style.root}>
    <img src={avatarUrl} alt="Avatar" onClick={() => openGithubProfile(githubUrl)} />
  </div>
)

export default Avatar;