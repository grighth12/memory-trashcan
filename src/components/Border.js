export default function Border({$target}) {
    const $border = document.createElement('div')

    $border.className = 'Border'

    $target.append($border)

}