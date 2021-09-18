import HomePage from './pages/HomePage/index.js'
import InfoPage from './pages/InfoPage/index.js'
import WritePage from './pages/WritePage/index.js'
import RouterUtils from './utils/router.js'

export default function App({ $target }) {
  const homePage = new HomePage({
    $target,
    initialState: '테스트 상태',
  })

  const infoPage = new InfoPage({
    $target,
  })

  const writePage = new WritePage({
    $target,
  })

  this.route = () => {
    const { pathname } = location
    $target.innerHTML = ''
    if (pathname === '/') {
      homePage.render()
    } else if (pathname === '/info') {
      infoPage.render()
    } else if (pathname === '/write') {
      writePage.render()
    }
  }

  this.route()

  RouterUtils.initRoute(this.route)
}
