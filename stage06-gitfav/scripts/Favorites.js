import { GitHubSearch } from "./GithubSearch.js";
const gitHubRequest = new GitHubSearch();

export class Favorites {
  constructor(rootDocument) {
    this.rootDocument = document.querySelector(rootDocument);
    this.userList = [];
  }

  async addGitHubUser(username) {
    try {
      const githubUser = await gitHubRequest.getGitHubUser(username);
      const isPresent = this.userList.find(user => user.login === githubUser.login);

      if (isPresent) {
        throw new Error('User already exists!');
      }

      if (githubUser.login === undefined) {
        throw new Error('User not found!');
      }

      this.userList = [githubUser, ...this.userList];
      this.updateTable();
    }
    catch (error) {
      alert(error.message);
    }
  }

  removeGitHubUser(username) {
    this.userList = this.userList.filter(user => user.login !== username);
    this.updateTable();
  }
}

export class FavoritesView extends Favorites {
  constructor(rootDocument) {
    super(rootDocument);
    this.tableBody = this.rootDocument.querySelector('tbody');
    this.updateTable();
    this.clickToAdd();
  }

  clickToAdd() {
    const searchBtn = this.rootDocument.querySelector('.search-btn');
    searchBtn.addEventListener('click', () => {
      const searchInput = this.rootDocument.querySelector('.search-input');
      const searchValue = searchInput.value;
      this.addGitHubUser(searchValue);
    })
  }

  updateTable() {
    this.clearTable();

    this.userList.forEach(user => {
      const newRow = this.createTableRow(
        user.avatar_url,
        user.name,
        user.login,
        user.public_repos,
        user.followers);

      const removeBtn = newRow.querySelector('.remove-btn');
      removeBtn.addEventListener('click', () => {
        this.removeGitHubUser(user.login);
      });

      this.tableBody.appendChild(newRow);
    });

  }

  createTableRow(avatar_url, name, login, public_repos, followers) {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML =
      `<tr>
      <td>
        <img class="avatar" src="${avatar_url}" alt="Foto de perfil de ${name}" />
        <div class="user-info">
        <span class="nome">${name ?? login}</span>
        <span class="username">${login}</span>
      </div>
      </td>
      <td>${public_repos}</td>
      <td>${followers}</td>
      <td><button class="remove-btn">Remover</button></td>
    </tr>`
    return tableRow;
  }

  clearTable() {
    this.tableBody.querySelectorAll('tr')
      .forEach(row => row.remove());
  }
}