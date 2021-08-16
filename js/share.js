const url = "https://hellocock-virgin.netlify.app/";
const hellocock_url = "https://www.hellocock.org/redirection/virgin/store";

function setShare() {
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '버진 칵테일 결과';
    const shareDes = infoList[resultAlt].name;
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
                    mobileWebUrl: 'https://developers.kakao.com',
                    webUrl: shareURL_result,
                },
            },
            {
                title: '나도 테스트 하기',
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                    webUrl: shareURL_home,
                },
            },
        ]
    });
}