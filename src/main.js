// console.log(jQuery)  测试（不提示错误就是成功）
// console.log($)

$('.addButton')
    .on('click', () => {
        let url = window.prompt('请问你要添加的网址是')
        if (!url) {
            alert('请输入网址')
        } else if (url.indexOf('http') !== 0) {
            //indexOf返回数组中指定字符出现的次数
            url = 'https://' + url
            const $siteList = $('.siteList')
            const $lastLi = $siteList.find('li.last')
            const $li = $(`<li>
            <a href="${url}">
                <div class="site">
                    <div class="logo">${url[8]}</div>
                    <div class="link">${url}</div>
                </div>
            </a>
            </li>`).insertBefore($lastLi);
        }
    })
        // console.log(url)