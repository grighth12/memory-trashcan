export default function InfoContent({ $target, initialState }) {
  const $infoContent = document.createElement('div')

  $infoContent.className = 'InfoContent'

  $target.appendChild($infoContent)

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    $infoContent.innerHTML = `
        <div>${this.state.imageSrc}</div>
    `
  }

  this.render()
}

// scss
