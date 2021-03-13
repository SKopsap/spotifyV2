import { Sidebar } from '../containers/Sidebar.js'

export default async function AlbumPage() {
  return /*html*/ `
  <div class="d-flex">
    ${Sidebar()}
    <main>
      <h3>AlbumPage</h3>
      <h6></h6>
    </main>
  </div>
  `
}
