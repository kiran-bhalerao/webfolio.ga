const fetch = require("node-fetch");

const accessToken = "94e0604dad8997158392113ab4609d647cb6e3f5";
const query = `
query { 
  repositoryOwner(login:"kiranbhalerao123"){
    pinnedRepositories(first:10) {
      nodes {
        name
        url
        homepageUrl
        description
        repositoryTopics(last:2) {
          nodes {
            topic {
              name
            }
          }
        }
      }
    }
  }
}`;

fetch("https://api.github.com/graphql", {
  method: "POST",
  body: JSON.stringify({ query }),
  headers: {
    Authorization: `Bearer ${accessToken}`
  }
})
  .then(res => res.text())
  .then(body => console.log(body)) // {"data":{"repository":{"issues":{"totalCount":247}}}}
  .catch(error => console.error(error));
