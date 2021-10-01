export default function Button({ $target, buttonTitle }) {
    const $button = document.createElement('button')
    $button.className = 'Button'
  
    $target.appendChild($button)
  
    this.render = () => {
      $button.innerText = buttonTitle
    }
  
    this.render()
  }
  