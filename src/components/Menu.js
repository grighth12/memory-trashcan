export default function Menu({$target}) {
    const $menu = document.createElement('div')

    $menu.className = 'Menu'
    $menu.id = 'Menu'

    $target.appendChild($menu)

    this.render = () => {
        $menu.innerHTML = `
            <!-- <div class='menu'>
                <div class='bar bar-1'></div>
                <div class='bar bar-2'></div>
                <div class='bar bar-3'></div>
            </div> -->
            <div class='notice'>공지사항</div>
            <div class='qna'>문의</div>
        `
    }

    

    this.render()
}