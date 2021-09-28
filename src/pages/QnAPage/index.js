import RouterUtils from "../../utils/router.js";
import Header from "../../components/Header.js";
import Menu from "../../components/Menu.js";
import PageTitle from "../../components/PageTitle.js";
import Border from "../../components/Border.js";

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
}