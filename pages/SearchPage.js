import { Sidebar } from '../containers/SidebarContainer.js'
import { Section } from '../containers/SectionContainer.js'
import { Playbar } from '../components/PlaybarComponent.js'
import { TopNav } from '../components/TopNavComponent.js'

import { _waitForElement } from '../utils/mutationObserver.js'

export default function SearchPage() {
  getInitialData()

  return /*html*/ `
    <div class="d-flex">
      <div>
        ${Sidebar()}
      </div>
      <main class="container-fluid">
        ${TopNav()}
        <div id="filtered">
          ${searchFragment()}
        </div>
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

  document.getElementById('filtered').innerHTML = `
  ${Section('Recently Played', data1.data.slice(0, 5))}
  ${Section('Top 50', data2.data.slice(0, 5))}
  `
}

async function searchFragment() {
  const state = {
    searchTerm: 'inxs'
  }

  let timer
  const timeoutVal = 500

  const elementDidMount = (async () => {
    const element = await _waitForElement('#search-input')
    console.log(element)

    element.addEventListener('keypress', handleKeyPress)
    element.addEventListener('keyup', handleKeyUp)

    function handleKeyPress(e) {
      window.clearTimeout(timer)
      state.searchTerm = e.target.value
      console.log('Typing...')
    }

    function handleKeyUp(e) {
      window.clearTimeout(timer) // prevent errant multiple timeouts from being generated
      timer = window.setTimeout(() => {
        console.log('fetch request sent to API')
        const response = fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${state.searchTerm}`)
          .then((res) => res.json())
          .then(({ data }) => {
            const albums = data.map((res) => res.album)
            const artists = data.map((res) => res.artist)
            console.log(albums)
            const filtered = document.getElementById('filtered')
            filtered.innerHTML = `
            ${Section('Artist', artists)}
            ${Section('Album', albums)}
            `
          })
      }, timeoutVal)
    }
  })()
}
