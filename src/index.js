import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider} from 'react-apollo';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const GITHUB_API_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${GITHUB_API_TOKEN}`,
      },
    });
  }
});

const ApolloApp = App => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(ApolloApp(App), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
