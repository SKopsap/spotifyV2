import { Sidebar } from '../containers/SidebarContainer.js'
import { Playbar } from '../components/PlaybarComponent.js'

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
        <footer>
      ${Playbar()}
    </footer>

      </div>
    `
}

export default SearchPage
