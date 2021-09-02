const url = "https://hellocock-mbti.netlify.app/";
const hellocock_url = "https://www.hellocock.org/redirection/virgin/store";
Kakao.init('758a2a93a292f1a6e09653bebf099def');
Kakao.isInitialized();

function setShare() {
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '취향으로 알아보는 버진 칵테일 ✨';
    const shareDes = infoList[resultAlt].tag + ' ' + infoList[resultAlt].name;
    const shareImage = url + 'img/image-' + resultAlt + '.png';
    const shareURL_home = url + 'index.html';
    const shareURL_result = url + 'page/result-' + resultAlt + '.html';

    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDes,
            imageUrl: shareImage,
            link: {
                mobileWebUrl: hellocock_url,
                webUrl: hellocock_url,
            },
        },

        buttons: [{
                title: '결과 확인하기',
                link: {
                    mobileWebUrl: shareURL_result,
                    webUrl: shareURL_result,
                },
            },
            {
                title: '나도 테스트 하기',
                link: {
                    mobileWebUrl: shareURL_home,
                    webUrl: shareURL_home,
                },
            },
        ]
    });
}