import { Logo } from '../components/LogoComponent.js'
import { NavLinks } from '../components/NavLinksComponent.js'

function Sidebar() {
  console.log('sidebar rendered')
  const logoURL =
    'https://images-ext-1.discordapp.net/external/D0PHDu_i16q4dHj48lI-M7-4Ce4ovR6BRMKFueVo0BA/https/storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png?width=150&height=45'

  return /*html*/ `
    <div style="min-height: 100%; background-color: black; width: 250px">
      <div class="d-flex flex-column">

        ${Logo(logoURL, 'spotifyLogo')}
        ${NavLinks()}
      </div>
    </div>
  
  `
}

export { Sidebar }
