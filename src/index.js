import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './components/App';

const GITHUB_API_URL= 'https://api.github.com/graphql'

const client = new ApolloClient({
    uri: GITHUB_API_URL,
    request: operation => {
        const token = process.env.REACT_APP_GITHUB_API_TOKEN
        if (token) {
            operation.setContext({
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
        }
    }
})

ReactDOM.render(
    <ApolloProvider client = {client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);
