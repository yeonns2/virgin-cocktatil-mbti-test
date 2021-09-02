const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endpoint = qnaList.length;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function calResult() {
    console.log(select);
    var result = select.indexOf(Math.max(...select));
    return result;
}

function setResult() {
    let point = calResult();
    location.href = './page/result-' + point + '.html';

    // const resultTag = document.querySelector('.resulttag')
    // const resultName = document.querySelector('.resultname');
    // resultName.innerHTML = infoList[point].name;
    // resultTag.innerHTML = infoList[point].tag;

    // var resultImg = document.createElement('img');
    // const imgDiv = document.querySelector('#resultImg');
    // var imgURL = 'img/image-' + point + '.png';
    // resultImg.src = imgURL;
    // resultImg.alt = point;
    // resultImg.width = 200;
    // resultImg.classList.add('img-fluid');
    // imgDiv.appendChild(resultImg);

    // const resultDesc = document.querySelector('.resultDesc');
    // resultDesc.innerHTML = infoList[point].desc;

    // const compatibility = document.querySelector('.compatibility');

    // let best = infoList[point].best;
    // let worst = infoList[point].worst;

    // var bestImg = document.createElement('img');
    // const bestImgDiv = document.querySelector('#bestCocktail');
    // var bestImgURL = 'img/image-' + best + '.png';
    // bestImg.src = bestImgURL;
    // bestImg.alt = best;
    // bestImg.width = 100;
    // bestImg.onclick = function() { location.href = './page/result-' + best + '.html'; }
    // bestImg.classList.add('img-fluid');

    // bestImgDiv.appendChild(bestImg);
    // compatibility.appendChild(bestImgDiv);

    // var worstImg = document.createElement('img');
    // const worstImgDiv = document.querySelector('#worstCocktail');
    // var worstImgURL = 'img/image-' + worst + '.png';
    // worstImg.src = worstImgURL;
    // worstImg.alt = worst;
    // worstImg.width = 100;

    // worstImg.onclick = function() { location.href = './page/result-' + worst + '.html'; }
    // worstImg.classList.add('img-fluid');
    // worstImgDiv.appendChild(worstImg);
    // compatibility.appendChild(worstImgDiv);

    // resultDesc.appendChild(compatibility);

}


function goResult() {
    qna.style.display = "none";
    result.style.display = "block";
    setResult();
}

function addAnswer(answerText, qIdx, idx) {
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    var tmi = document.querySelector('.tmi');

    answer.classList.add('answerList');


    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function() {
        var children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
        }
        setTimeout(() => {
            var target = qnaList[qIdx].a[idx].type;
            for (let i = 0; i < target.length; i++) {
                select[target[i]] += 1;
            }
            for (let i = 0; i < children.length; i++) {
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        }, 500)
    }, false);
    tmi.innerHTML = qnaList[qIdx].tmi;
}

function goNext(qIdx) {
    if (qIdx == endpoint) {
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100 / endpoint) * (qIdx + 1) + '%';
}

function begin() {
    main.style.display = "none";
    qna.style.display = "block";

    let qIdx = 0;
    goNext(qIdx);
}