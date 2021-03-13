import { Sidebar } from '../containers/SidebarContainer.js'
import { Playbar } from '../components/PlaybarComponent.js'

export default async function LibraryPage() {
  return /*html*/ `
  <div class="d-flex">
    <div>
      ${Sidebar()}
    </div>
    <main>
    </main>
    <footer>
      ${Playbar()}
    </footer>
  </div>
  `
}
