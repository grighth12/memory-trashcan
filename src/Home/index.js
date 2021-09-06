import Component from "../Components.js";

export default class Home extends Component {
  template() {
    return `
        <div>기억휴지통</div>
        <div>잊고 싶은 기억을 0과 1의 세상으로 버리세요.</div>
        <div>sample image</div>
        <button>지금 버리러 가기</button>
        <div>지금까지 000개의 기억이 기억휴지통으로 사라졌어요</div>
        <div>기획의도</div>`;
  }
}
