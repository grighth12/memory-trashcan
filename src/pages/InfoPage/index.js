import Header from '../../components/Header.js'
import InfoContent from '../../components/InfoContent.js'
import InfoText from '../../components/InfoText.js'
import LinkButton from '../../components/InfoButton.js'
import RouterUtils from '../../utils/router.js'

const INFO_DATA = [
  {
    text: '잊고싶은 기억을 적어요.',
    imageSrc: '이미지 1💕',
  },
  {
    text: '그리고 어떻게 없애버릴지 선택합시다!',
    imageSrc: '이미지 2🚀',
  },
  {
    text: '기억이 영영 돌아오지 않도록 날려버릴게요.',
    imageSrc: '이미지 3💦',
  },
]

export default function InfoPage({ $target }) {
  const $page = document.createElement('div')
  $page.className = 'InfoPage'

  this.state = {
    currentIndex: 0,
  }

  this.render = () => {
    $target.appendChild($page)
  }

  new Header({
    $target : $page
  })

  const $mainContent = document.createElement('div')
  $mainContent.className = 'MainContent'

  $page.appendChild($mainContent)

  new LinkButton({
    $target: $mainContent,
    className: 'prev',
  })

  const infoContent = new InfoContent({
    $target: $mainContent,
    initialState: INFO_DATA[this.state.currentIndex],
  })

  new LinkButton({
    $target: $mainContent,
    className: 'next',
  })

  const infoText = new InfoText({
    $target: $page,
    text: INFO_DATA[this.state.currentIndex].text,
  })

  this.setState = (nextState) => {
    this.state = nextState
    const { currentIndex } = this.state
    infoContent.setState(INFO_DATA[currentIndex])
    infoText.setState(INFO_DATA[currentIndex].text)
  }

  $page.addEventListener('click', (e) => {
    const { className } = e.target

    switch (className) {
      case 'prev':
        if (this.state.currentIndex > 0) {
          const nextIndex = this.state.currentIndex - 1

          this.setState({
            currentIndex: nextIndex,
          })

          RouterUtils.push(`/info/${nextIndex + 1}`)
        }
        break
      case 'next':
        if (this.state.currentIndex < INFO_DATA.length - 1) {
          const nextIndex = this.state.currentIndex + 1

          this.setState({
            currentIndex: nextIndex,
          })
        }
        break
    }
  })
}
