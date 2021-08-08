const url = "https://virgincocktail.netlify.app/";

function setShare(){
    var resultImg = document.querySelector('#resultImage');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '버진 칵테일 결과';
    const shareDes = infoList[resultAlt].name;
    const shareImage = url + 'img/image-'+resultAlt+'.png';
    const shareURL1 = url + 'index.html';
    const shareURL2 = url + 'page/result-' + resultAlt + '.html';

  

    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
        title: shareTitle,
        description: shareDes,
        imageUrl: shareImage,
        link: {
            mobileWebUrl: shareURL1,
            webUrl: shareURL1,
        },
        },
        
        buttons: [
        {
            title: '결과 확인하기',
            link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: shareURL1,
            },
           

        },
        {
            title: '나도 테스트 하기',
            link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: shareURL2,
            },
        },
        ]
    });
}