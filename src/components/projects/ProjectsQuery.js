import gql from "graphql-tag";

export const GET_DATA = gql`
  query {
    repositoryOwner(login: "kiranbhalerao123") {
      pinnedRepositories(first: 10) {
        nodes {
          name
          url
          homepageUrl
          description
          repositoryTopics(last: 2) {
            nodes {
              topic {
                name
              }
            }
          }
        }
      }
    }
  }
`;
