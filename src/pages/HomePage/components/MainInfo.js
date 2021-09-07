export default function MainInfo({$target}) {
    const $mainInfo = document.createElement('div')

    $mainInfo.className = 'MainInfo'

    $target.appendChild($mainInfo)

    this.render = () => {
        $mainInfo.innerHTML = `
            <div>기억휴지통</div>
            <div>잊고 싶은 기억을 0과 1의 세상으로 버리세요!!</div>
        `
    }

    this.render()
}