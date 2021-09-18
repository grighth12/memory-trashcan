import TopText from '../../components/TopText.js'

export default function WritePage({ $target }) {
  const $page = document.createElement('div')
  $page.className = 'Write'

  new TopText({
    $target: $page,
    text: '버리고 싶은 기억을 적어주세요.',
  })

  const $editor = document.createElement('div')
  $editor.className = 'EditorContainer'
  $page.appendChild($editor)

  this.render = () => {
    $target.appendChild($page)
    $editor.innerHTML = `
      <div contenteditable="true" class="Write__content"> </div>
      <div class="Wrapper--horizontal-left">
        <button class="Write__button" type="button">기억 버리러 가기</button>
      </div>
    `
  }

  $page.addEventListener('click', ({ target }) => {
    if (target.className === 'Write__button') {
      const content = $page.querySelector('[contenteditable="true"]').innerHTML
      console.log(`버리러 갑니다 : ${content}`)
      // TODO: 버리러 가는 페이지로 이동
    }
  })
}
