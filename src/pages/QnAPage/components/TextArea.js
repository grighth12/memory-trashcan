export default function TextArea({ $target, title }) {
    const $textArea = document.createElement('div')

    $textArea.className = 'TextArea'

    $target.appendChild($textArea)

    this.render = () => {
        $textArea.innerHTML = `
        <div class="TextAreaTitle">${title}</div>
        <textArea rows="5" class="TextAreaDiv"/>
        `
    }

    this.render()
}