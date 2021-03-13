// App imports - my tiny framework specifics to make it all work
import { router } from './router.js'

// pages
import HomePage from './pages/HomePage.js'
import SearchPage from './pages/SearchPage.js'
import AlbumPage from './pages/AlbumPage.js'

function App() {
  const state = {
    data: [
      {
        title: 'Night Nurse',
        artist: 'Gregory Issacs',
        album: '2011',
        image: 'https://i.ytimg.com/vi/uwQT-r-lXWg/hqdefault.jpg',
        length: 4.09
      },
      {
        title: 'Drive',
        artist: 'The Cars',
        album: 'Complete Greatest Hits',
        image: 'https://i.ytimg.com/vi/uwQT-r-lXWg/hqdefault.jpg',
        length: 3.57
      },
      {
        title: 'Hungry for the power',
        artist: 'Jamie Jones',
        album: '2011',
        image: 'https://i.ytimg.com/vi/uwQT-r-lXWg/hqdefault.jpg',
        length: 3.57
      }
    ],
    user: {
      firstname: 'Sean',
      lastname: 'Knowles',
      email: 's@seanknowles.dev'
    }
  }

  const routes = [
    { path: '/', component: HomePage },
    { path: '/search', component: SearchPage },
    { path: '/album', component: AlbumPage }
  ]

  // pass routes object and also global app state down to each page
  router(routes, state)
}

App()
