const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function addAnswer(answerText,qIdx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    var tmi = document.querySelector('.tmi');
    answer.classList.add('answerList');
    answer.classList.add('my-2');
    answer.classList.add('py-3');
    a.appendChild(answer);
    answer.innerHTML = answerText;
    answer.addEventListener("click",function(){
        var children = document.querySelectorAll('.answerList');
        for(let i =0; i< children.length;i++){
            children[i].disabled = true;   
        }
        setTimeout(() => {
            for(let i = 0; i < children.length; i++){
              children[i].style.display = 'none';
            }
            goNext(++qIdx);
          },550)
    }, false);
    tmi.innerHTML = qnaList[qIdx].tmi;
}

function goNext(qIdx){
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer,qIdx);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/17)*(qIdx+1)+'%';
}

function begin(){
    main.style.display = "none";
    qna.style.display = "block";
    let qIdx = 0;
    goNext(qIdx);
}