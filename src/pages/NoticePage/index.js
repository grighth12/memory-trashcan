import RouterUtils from "../../utils/router.js";
import Header from "../../components/Header.js";
import Menu from "../../components/Menu.js";
import PageTitle from "../../components/PageTitle.js";
import Border from "../../components/Border.js";

export default function NoticePage({ $target }) {
    const $page = document.createElement('div')
    $page.className = 'NoticePage'

    this.render = () => {
        $target.appendChild($page)
    }

    new Header({
        $target : $page
    })
      
    new Menu ({
        $target : $page
    })

    const $noticeContent = document.createElement('div')
    $noticeContent.className = 'NoticeContent'

    $page.appendChild($noticeContent)

    new PageTitle({
        $target: $noticeContent,
        title : '공지사항',
    })

    new Border({
        $target : $noticeContent,
    })
    
    const $noticeInfo = document.createElement('div')
    $noticeInfo.className = 'NoticeInfo'

    $noticeContent.appendChild($noticeInfo)

    new Border({
        $target : $noticeContent,
    })
}