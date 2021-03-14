import { Sidebar } from '../containers/SidebarContainer.js'
import { Section } from '../containers/SectionContainer.js'
import { Playbar } from '../components/PlaybarComponent.js'

export default async function SearchPage({ user }, path) {
  const url1 = 'https://striveschool-api.herokuapp.com/api/deezer/artist/413/albums'
  const url2 = 'https://striveschool-api.herokuapp.com/api/deezer/artist/414/albums'

  const resp1 = await fetch(url1)
  const resp2 = await fetch(url2)

  const [data1, data2] = await Promise.all([resp1.json(), resp2.json()])

  return /*html*/ `
    <div class="d-flex">
      <div>
        ${Sidebar()}
      </div>
      <main class="container-fluid">
        ${Section('Recently Played', data1.data.slice(0, 5))}
        ${Section('Top 50', data2.data.slice(0, 5))}
      </main>
      <footer> 
          ${Playbar()}
      </footer>
    </div>
  `
}
