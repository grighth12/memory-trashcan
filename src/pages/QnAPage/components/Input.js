export default function Input({ $target, title }) {
    const $input = document.createElement('div')

    $input.className = 'Input'

    $target.appendChild($input)

    this.render = () => {
        $input.innerHTML = `
        <div class="InputTitle">${title}</div>
        <input type="text" class="InputDiv"/>
        `
    }

    this.render()
}