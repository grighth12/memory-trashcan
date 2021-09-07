import RouterUtils from '../../utils/router.js'
import Header from '../../components/Header.js'
import Menu from '../../components/Menu.js'
import MainInfo from './components/MainInfo.js'
import SampleImage from './components/SampleImage.js'
import MainButton from './components/MainButton.js'
import Count from './components/Count.js'

export default function HomePage({ $target, initialState }) {
  const $page = document.createElement('div')
  $page.className = 'HomePage'

  this.state = {
    currentCount: 0,
  }

  this.render = () => {
    $target.appendChild($page)
  }

  // const menu = document.querySelector('.menu')
  // menu.addEventListener('click', () => {
  //   menu.classList.toggle('open')
  // })

  new Header({
    $target : $page
  })
  
  new Menu ({
    $target : $page
  })

  const $mainContent = document.createElement('div')
  $mainContent.className = 'Content'

  $page.appendChild($mainContent)

  new MainInfo({
    $target : $mainContent
  })

  new SampleImage({
    $target : $mainContent
  })

  new MainButton({
    $target: $mainContent
  })

  $page.addEventListener('click', (e) => {
    const { className } = e.target
    console.log(className)

    switch (className) {
      case 'MainButton' :
        RouterUtils.push('/info')
      break
      case 'menu' :
        const menu = document.querySelector('.menu')
        const nav = document.querySelector('.Menu')
        e.preventDefault()
        menu.classList.toggle('open')
        nav.classList.toggle('navbar')
        e.preventDefault()
        break  
      case 'menu open' :
        const menuOpen = document.querySelector('.menu.open')
        const navBar = document.querySelector('.nav.navbar')
        e.preventDefault()
        menuOpen.classList.toggle('open')
        navBar.classList.toggle('navbar')
        e.preventDefault()
    }
   
  })

  const count = new Count({
    $target: $mainContent,
    initialState: this.state.currentCount
  })

  this.setState = (nextState) => {
    this.state = nextState
    const { currentCount } = this.state
    count.setState(currentCount)
  }

}
