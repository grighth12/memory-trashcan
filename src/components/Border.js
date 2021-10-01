export default function Border({$target}) {
    const $border = document.createElement('hr')

    $border.className = 'Border'

    $target.append($border)

    this.render = () => {
        $border.innerHTML = `
        <hr>
        `
    }

}