import { Sidebar } from '../containers/SidebarContainer.js'
import { Section } from '../containers/SectionContainer.js'
import { Playbar } from '../components/PlaybarComponent.js'

export default function HomePage(state) {
  const renderMain = getInitialData
  return /*html*/ `
    <div class="d-flex">
      <div>
        ${Sidebar()}
      </div>
      <main id="main-homepage" class="container-fluid">
       ${renderMain()}
      </main>
      <footer> 
          ${Playbar()}
      </footer>
    </div>
  `
}

async function getInitialData() {
  const resp1 = await fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/413/albums')
  const resp2 = await fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/414/albums')

  const [data1, data2] = await Promise.all([resp1.json(), resp2.json()])

  document.querySelector('#main-homepage').innerHTML = `
    ${Section('Recently Played', data1.data.slice(0, 5))}
    ${Section('Top 50', data2.data.slice(0, 5))}
  `
}
