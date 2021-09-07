export default function Header({$target}) {
    const $header = document.createElement('div')

    $header.className = 'Header'

    $target.appendChild($header)

    this.render = () => {
        $header.innerHTML = `
            <div class='HeaderTitle'>기억휴지통</div>
            <button class='menu'>
                <div class='bar bar-1'></div>
                <div class='bar bar-2'></div>
                <div class='bar bar-3'></div>
            </button>
        `
    }
    
    this.render()
}