import RouterUtils from '../../utils/router.js'

export default function HomePage({ $target, initialState }) {
  const $page = document.createElement('div')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    $target.appendChild($page)
    $page.innerHTML = `
        <h1>메인 페이지 입니다.</h1>
        <div>메인 페이지 콘텐츠 입니다.${this.state}</div>
        <button class="btn">시작하기</button>
      `
  }

  $page.addEventListener('click', (e) => {
    const { className } = e.target
    if (className === 'btn') {
      RouterUtils.push('/info/1')
    }
  })
}
