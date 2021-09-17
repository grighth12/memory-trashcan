export default function PlanIntention({$target}) {
    const $planIntention = document.createElement('div')

    $planIntention.className = 'PlanIntention'

    $target.appendChild($planIntention)

    this.render = () => {
        $planIntention.innerHTML = `
            <div>기획의도</div>
            </br>
            <div>어디에 털어놓고 싶지만 털어놓기 싫을 때,</br>
                누군가에게 말하기 어려운 이야기를 쏟아낼 곳이 필요할 때</br>
                기억 휴지통을 찾아주세요</br>
                </br>
                안 좋은 기억들을 분해해서 버리고 나면</br> 
                기분이 한결 가벼워질 거예요😊</br>
            </h1>
        `
    }

    this.render()
}