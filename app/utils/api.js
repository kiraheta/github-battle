var axios = require('axios');

// If you get rate limited by Github API, then use the following:
var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var params = "?client_id" + id + "&client_secrets" + sec;

function getProfile (username) {
  return axios.get('https://api.github.com/users/' + username + params)
    .then(function (user) {
      return user.data;
    });
}

function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos'+ params + '&per_page=100')
}

function getStarCount (repos) {
  return repos.data.reduce(function (count, repo) {
    return count + repo.stargazers_count;
  }, 0);
}

function calculateScore (profile, repos) {
  var followers = profile.followers;
  var totalStars = getStarCount(repos);

  return (followers * 3) + totalStars;
}

function handleError (error) {
  console.warn(error);
  return null;
}

// Asynchronously call getProfile & getRepos
function getUserData (player) {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then(function (data) {
    var profile = data[0];
    var repos = data[1];

    return {
      profile: profile,
      score: calculateScore(profile, repos)
    }
  })
}

// returns array where first player is the one with the highest score
function sortPlayers (players) {
  return players.sort(function (a,b) {
    return b.score - a.score;
  })
}

module.exports = {
  battle: function (players) {
    return axios.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError)
  },

  fetchPopularRepos: function (language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.items;
      });
  }
}
