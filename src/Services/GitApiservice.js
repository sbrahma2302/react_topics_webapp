import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
export const prepareQuery = (name) => {
    return gql`
    {
        topic(name: "${name}") {
            relatedTopics {
                name
                stargazers {
                    totalCount
                }
            }
        }
    }
    `
}

export const getRelatedTopics = (topic) => useQuery(prepareQuery(topic))

