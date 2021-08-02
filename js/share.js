const url = "https://virgincocktail.netlify.app/";

function setShare(){
    var resultImg = document.querySelector('#resultImage');
    var resultAlt = resultImg.firstElementChild.lastElementChild;
    const shareTitle = '버진 칵테일 결과';
    const shareDes = infoList[resultAlt].name;
    const shareImage = url + 'img/image-'+resultAlt+'.png';
    const shareURL = url + 'index.html';

    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
        title: shareTitle,
        description: shareDes,
        imageUrl: shareImage,
        link: {
            mobileWebUrl: shareURL,
            WebUrl: shareURL,
        },
        },
        
        buttons: [
        {
            title: '결과 확인하기',
            link: {
            mobileWebUrl: 'https://developers.kakao.com',
            WebUrl: shareURL,
            },

        },
        ]
    });
}