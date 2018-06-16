var n = document.getElementById('Uname')
document.getElementById('button').addEventListener('click', fetchGithubRepos)

function fetchGithubRepos () {
  fetch('https://api.github.com/users/' + n.value + '/repos')
    .then((res) => res.json())
    .then((repos) => {
      var output = ''

      for (var i in repos) {
        output += "<div class='repos'>" +
        '<ul>' +
        '<li>' + repos[i].name + '</li>' +
        '</ul>' + '</div>'
      }
      document.getElementById('repos').innerHTML = output
    })
}