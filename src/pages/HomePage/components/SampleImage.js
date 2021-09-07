export default function SampleImage({$target}) {
    const $sampleImage = document.createElement('div')

    $sampleImage.className = 'SampleImage'

    $target.appendChild($sampleImage)

    this.render = () => {
        $sampleImage.innerHTML = `
            <div>SampleImage</div>
        `
    }

    this.render()
}