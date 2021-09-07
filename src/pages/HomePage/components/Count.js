export default function Conut({$target, initialState}) {
    const $conut = document.createElement('div')

    $conut.className = 'Count'

    $target.appendChild($conut)

    this.state = initialState
    
    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $conut.innerHTML = `
            <div>지금까지 ${this.state}개의 기억이 기억휴지통으로 사라졌어요</div>
        `
    }

    this.render()
}