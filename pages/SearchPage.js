import { Sidebar } from '../containers/SidebarContainer.js'
import { Section } from '../containers/SectionContainer.js'
import { Playbar } from '../components/PlaybarComponent.js'
import { TopNav } from '../components/TopNavComponent.js'

import { _waitForElement } from '../utils/mutationObserver.js'

export default async function SearchPage({ user }, path) {
  const state = {
    searchTerm: 'inxs',
    prevSearch: [],
    data: {}
  }

  const resp1 = await fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/413/albums')
  const resp2 = await fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/414/albums')
  const [data1, data2] = await Promise.all([resp1.json(), resp2.json()])

  const onElementDidMount = (async () => {
    const element = await _waitForElement(`#search-input`)

    //let searchTerm = ''

    element.addEventListener('keyup', (event) => {
      let searchTerm = event.target.value

      setTimeout(() => {
        state.searchTerm = searchTerm
        console.log('state.searchTerm1: ', state.searchTerm)
      }, 150)

      setTimeout(() => {
        const response = fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${state.searchTerm}`)
          .then((res) => res.json())
          .then(({ data }) => {
            const albums = data.map((res) => res.album)
            console.log(albums)
            const filtered = document.getElementById('filtered')
            console.log(filtered)
            filtered.innerHTML = `
            ${Section('Artist', albums)}
            `
          })
        console.log(state.searchTerm)
      }, 300)
    })
  })()

  return /*html*/ `
    <div class="d-flex">
      <div>
        ${Sidebar()}
      </div>
      <main class="container-fluid">
        ${TopNav()}
        <div id="filtered">
          ${Section('Recently Played', data1.data.slice(0, 5))}
          ${Section('Top 50', data2.data.slice(0, 5))}
        </div>
      </main>
      <footer> 
          ${Playbar()}
      </footer>
    </div>
  `
}
