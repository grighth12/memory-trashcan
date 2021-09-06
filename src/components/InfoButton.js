export default function LinkButton({ $target, className }) {
  const $linkButton = document.createElement('button')
  $linkButton.className = className

  $target.appendChild($linkButton)

  this.render = () => {
    $linkButton.innerText = className
  }

  this.render()
}
