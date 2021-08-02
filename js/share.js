const url = "https://virgincocktail.netlify.app/";

function setShare(){
    // var resultImg = document.querySelector('#resultImage');
    // var resultAlt = resultImg.firstElementChild.lastElementChild;
    // const shareTitle = '버진 칵테일 결과';
    // const shareDes = infoList[resultAlt].name;
    // const shareImage = url + 'img/image-'+resultAlt+'.png';
    // const shareURL = url + 'index.html';
  
    const shareTitle = '버진 칵테일 결과';
    const shareDes = '당신과 어울리는 버진 칵테일은?'
    const shareImage = url + 'img/main.png';
    const shareURL = url + 'index.html';

    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
        title: shareTitle,
        description: shareDes,
        imageUrl: shareImage,
        link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
        },
        },
        
        buttons: [
        {
            title: '결과 확인하기',
            link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: shareURL,
            },

        },
        ]
    });
}