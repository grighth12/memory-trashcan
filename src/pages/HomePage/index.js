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

    switch (className) {
      case 'MainButton' :
        RouterUtils.push('/info')
      break
      case 'menu' :
        const menu = document.querySelector('.menu')
        const nav = document.querySelector('.Menu')
        e.preventDefault();
        menu.classList.toggle('open')
        // e.preventDefault();
        nav.classList.toggle('navbar')
      break  
      // case 'CloseButton' :
      //   const menu = document.querySelector('#Menu')
      //   if(menu.classList.contains('hidden')) {
      //     menu.classList.remove('hidden')
      //   } else {
      //     menu.classList.add('hidden')
      //   }
      // break
      // case 'MenuButton' :
      //   // const menu = document.querySelector('#Menu')
      //   e.preventDefault()
      //   menu.classList.add('active')
      // break
      // case 'CloseButton' :
      //   const menu = document.querySelector('#Menu')
      //   e.preventDefault()
      //   menu.classList.add('hidden')
      // break
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
