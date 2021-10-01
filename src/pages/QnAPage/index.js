import RouterUtils from "../../utils/router.js";
import Header from "../../components/Header.js";
import Menu from "../../components/Menu.js";
import PageTitle from "../../components/PageTitle.js";
import Border from "../../components/Border.js";
import Input from "./components/Input.js";
import TextArea from "./components/TextArea.js";
import Button from "./components/Button.js";

export default function QnAPage({ $target }) {
    const $page = document.createElement('div')
    $page.className = 'QnAPage'

    this.render = () => {
        $target.appendChild($page)
    }

    new Header({
        $target : $page
    })
      
    new Menu ({
        $target : $page
    })

    const $qnaContent = document.createElement('div')
    $qnaContent.className = 'QnAContent'

    $page.appendChild($qnaContent)

    new PageTitle({
        $target: $qnaContent,
        title : '문의',
    })
    
    new Border({
        $target : $qnaContent,
    })

    new Input({
        $target: $qnaContent,
        title: '문의 제목',
    })

    new TextArea({
        $target: $qnaContent,
        title: '문의 내용',
    })

    new Input({
        $target: $qnaContent,
        title: '응답 받을 이메일',
    })

    new Button({
        $target: $qnaContent,
        buttonTitle: '전송하기',
    })
    
}