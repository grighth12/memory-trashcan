export default function MainButton({ $target }) {
    const $mainButton = document.createElement('button')
    $mainButton.className = 'MainButton'
  
    $target.appendChild($mainButton)
  
    this.render = () => {
      $mainButton.innerText = '지금 버리러가기'
    }
  
    this.render()
  }
  