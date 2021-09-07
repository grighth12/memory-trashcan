export default function Header({$target}) {
    const $header = document.createElement('div')

    $header.className = 'Header'

    $target.appendChild($header)

    this.render = () => {
        $header.innerHTML = `
            <div class='HeaderTitle'>기억휴지통</div>
            <div class='menu'>
                <div class='bar bar-1'></div>
                <div class='bar bar-2'></div>
                <div class='bar bar-3'></div>
            </div>
        `
    }

    // const menu = document.querySelector('.menu')
    // const nav = document.querySelector('.Menu')

    // $target.addEventListener('click', (e) => {
    //     const { className } = e.target

    //     console.log(className)

    //     if (className == menu) {
    //         e.preventDefault();
    //         menu.classList.toggle('open')
    //         nav.classList.toggle('navbar')
    //     }
    // })
    
    this.render()
}