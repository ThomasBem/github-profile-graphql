import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import Loading from './common/loading/Loading';
import Error from './common/error/Error';

import style from './Github.scss';
import Profile from './profile/Profile';

const GET_PROFILE = gql`
  query githubUser($username: String!) {
    user(login: $username) {
      name
      bio
      avatarUrl
      followers {
        totalCount
      }
      repositories {
        totalCount
      }
      websiteUrl
      url
  }
}
`;

const Github = ({ username, openGithubProfile }) => (
  <Query query={GET_PROFILE} variables={{ username }}>
    {({ loading, error, data}) => {
      if (loading) return <Loading />;
      if (error) return <Error errorMessage={error.message} />;

      const profile = {
        name: data.user.name || 'No name',
        avatarUrl: data.user.avatarUrl || '',
        bio: data.user.bio || 'No bio',
        githubUrl: data.user.url || '',
        personalWebsite: data.user.websiteUrl || 'No website',
        followerCount: data.user.followers.totalCount || 0,
        repositoryCount: data.user.repositories.totalCount || 0,
      };

      return (
        <div className={style.root}>
          <Profile profile={profile} openGithubProfile={openGithubProfile}/>
        </div>
      )}
    }
  </Query>
);

export default Github;