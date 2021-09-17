export default function InfoText({ $target, text }) {
  const $infoText = document.createElement('div')

  $target.appendChild($infoText)

  this.state = text

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    $infoText.innerText = this.state
  }

  this.render()
}
