import { ErrorComponent } from './components/ErrorComponent.js'
// This is the page router service for the application
// 1. takes in a routes object and state object
// 2. parses the hash url location using the dom api
// 3. finds component by path matches using simple regex
// 4. router function gets path, finds matching component, sets inner html with component/page html
// 5. passes global application state to each page component and also the current path
export async function router(routes, state) {
  const hashLocation = (hash) => hash.substring(1).toLocaleLowerCase() || '/'

  const path = () => {
    return hashLocation(document.location.hash)
  }

  const findComponentByPath = (path) => routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, 'gmi'))) || false

  const router = async () => {
    const path = hashLocation(document.location.hash)
    const { component = ErrorComponent } = findComponentByPath(path, routes) || {}
    document.getElementById('app').innerHTML = await component(state, path)
  }

  window.addEventListener('hashchange', router)
  window.addEventListener('load', router)
}
