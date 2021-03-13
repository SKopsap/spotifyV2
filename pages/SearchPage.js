import { Sidebar } from '../containers/Sidebar.js'

function SearchPage({ user }, path) {
  const state = {}

  return /*html*/ `
      <div class="d-flex">
        <div>
          ${Sidebar(path)}
        </div>
        <main>
          <h3>Profile</h3>
          <h6>${user.firstname}</h6>
        </main>
      </div>
    `
}

export default SearchPage
