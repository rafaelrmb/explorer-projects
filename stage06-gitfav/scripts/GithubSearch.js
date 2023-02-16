export class GitHubSearch {
  async getGitHubUser(username) {
    const url = `https://api.github.com/users/${username}`

    const data = await fetch(url)
    const { login, name, public_repos, followers, avatar_url } = await data.json()
    return ({
      login,
      name,
      public_repos,
      followers,
      avatar_url
    })
  }
}