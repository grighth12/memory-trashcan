
export default function Footer({$target}) {
    const $footer = document.createElement('div')

    $footer.className = 'Footer'

    $target.appendChild($footer)

    this.render = () => {
        $footer.innerHTML = `
            <div>github</div>
        `
    }
    
    this.render()
}