export default function PageTitle({ $target, title }) {
    const $pageTitle = document.createElement('div')

    $pageTitle.className = 'PageTitle'
  
    $target.appendChild($pageTitle)
  
    this.render = () => {
      $pageTitle.innerText = title
    }
  
    this.render()
  }
  