/*
0 - ISTJ (Prairie Oyster)
1 - ISFJ (Florida)
2 - INFJ (Arnold Palmer)
3 - INTJ (Grasshoper)
4 - ISTP (Cuba Libre)
5 - ISFP (Sunrise)
6 - INFP (Peach Crush)
7 - INTP (Bloody Mary)
8 - ESTP (Strawberry Daiquiri)
9 - ESFP (Barbados Surprise)
10 - ENFP (Blue Hawaiian)
11 - ENTP (Pona Colada)
12 - ESTJ (Cinderella)
13 - ESFJ (Shirley Temple)
14 - ENFJ (Mojito Lime)
15 - ENTJ (Golden Medalist)
*/

const qnaList = [{
        q: '칵테일이라는 단어를 들으면<br>무슨 생각이 떠오르나요?',
        a: [
            { answer: '화려한 각양각색 무지개빛', type: [2, 5, 9, 10, 11, 15] },
            { answer: '중후하고 투명한 갈색빛', type: [3, 4, 7, 11] },
            { answer: '은은하고 투명한 밝은빛 ', type: [0, 1, 2, 6, 8, 9, 12, 13, 14, 15] },
        ],
        tmi: '🍒그거 아시나요?<br>“바베이도스 서프라이즈” 라는 칵테일은 <br>무지개빛 칵테일이랍니다.'

    },
    {
        q: '오늘 저녁에는 친구들을<br>우리 집에 초대해 칵테일 파티를 하기로 했어요.',
        a: [
            { answer: '칵테일을 준비해볼까?', type: [] }
        ],
        tmi: '🍒그거 아시나요?<br>배우들의 칵테일파티에서 어떤 아역배우가 음료를 먹고 싶어했어요.<br>이를 본 바텐더가 특별히 제작한 "셜리 템플"이라는 무알콜 칵테일이 있답니다.'
    },
    {
        q: '술을 잘 못하는 친구에게 칵테일을 만들어주고 싶은데 어떻게 말할까요?',
        a: [
            { answer: '칵테일은 별로 술맛 안 나니까 그냥 마시는게 어때?', type: [0, 4, 8, 12, 3, 7, 11, 15] },
            { answer: '좋아! 그럼 너를 위해서 특별히 버진 칵테일을 만들어줄게', type: [1, 2, 5, 6, 9, 10, 13, 14] },
        ],
        tmi: '🍒그거 아시나요?<br>버진 칵테일은 논알콜 칵테일을 의미해요.<br>생각보다 엄청 맛있답니다!'
    },

    {
        q: '친구가 레시피를 보내주며 이런 칵테일을 만들어 달라고 해요. 재료를 한번 준비해 볼까?',
        a: [
            { answer: '최대한 많이 넣는 게 좋지! 나만의 스타일로 다른 재료들까지 더 넣어서 만든다.', type: [5, 9] },
            { answer: '레시피는 꼭꼭 지켜서 만든다.', type: [0, 12] },
            { answer: '정해진 것이 어딨어! 없는 재료는 빼고 칵테일을 만들자.', type: [6, 10, 3, 15] },
        ],
        tmi: '🍒그거 아시나요?<br>칵테일 맨 위에 올리는 장식을 가니쉬라고 불러요. 이 장식 하나에 맛이 변하곤 한답니다!'
    },
    {
        q: '이런, 냉장고를 확인해 봤는데 재료들이 다 상해버렸네요. 어서 재료를 구하러 가야겠는걸요?',
        a: [
            { answer: '가만 보자, 우선 출발하기 전에 내가 뭐가 있고 뭐를 사야 하는지 따져 보자.', type: [0, 1, 2, 3, 12, 13, 14, 15] },
            { answer: '고민할 시간이 없어! 일단 친구가 곧 오니까 빨리 마트로 출발해!', type: [4, 5, 6, 7, 8, 9, 10, 11] },
        ],
        tmi: '🍒그거 아시나요?<br>얼음 하나만 신중히 골라도 칵테일의 질이 많이 달라진답니다. 편의점에서 파는 큰 덩어리의 돌얼음을 추천해요.'

    },
    {
        q: '휴, 마트에 도착했어요. 맛있는 생과일을 직접 손질할까요? 아니면 간단한 과일 주스를 넣을까요?',
        a: [
            { answer: '더 좋은 재료로 맛있게 먹여야지. 생과일을 사자.', type: [1, 2, 13, 14] },
            { answer: '어차피 맛에서 별로 차이 안나니까 그냥 과일 주스를 사자', type: [4, 7, 8, 11] },
        ],
        tmi: '🍒그거 아시나요?<br>대체제를 사용할 때마다 생각보다 맛이 드라마틱하게 바뀐답니다.'

    },

    {
        q: '마트를 돌았는데 내가 구하려는 재료가 없어요. (파인애플 주스가 도대체 어디 있는거지..)',
        a: [
            { answer: '그냥 다른 칵테일을 만들어준다고 해야겠다.', type: [4, 5, 8, 9] },
            { answer: '파인애플 주스는 없지만 쿨피스같은 대체제를 찾아야겠어.', type: [0, 1, 12, 13] },
            { answer: '아직 포기하긴 일러.. 편의점 두세군데만 더 가	보자', type: [6, 7, 10, 11] },
            { answer: '이 동네를 다 긁어서라도 어떻게든 찾겠어.', type: [2, 3, 14, 15] },
        ],
        tmi: '🍒그거 아시나요?<br>광진구의 편의점과 대형마트 30 군데 중에서 생과일 파인애플주스를 판매하는 곳은 딱 4군데랍니다.'
    },

    {
        q: '휴, 이제 다시 집에 들어가야겠어요. 양손에는 재료가 한가득. 무거운데 걸어 갈거에요?',
        a: [
            { answer: '아, 너무 무거우니까 택시 타자.', type: [0, 4, 8, 12, 3, 7, 11, 15] },
            { answer: '조금 멀어도 돈도 많이 썼는데 걸어가자.', type: [1, 2, 5, 6, 9, 10, 13, 14] },

        ],
        tmi: ''
    },
    {
        q: '집에 도착해서 재료들을 주섬주섬 정리해요.',
        a: [
            { answer: '띵동~ 앗, 친구가 왔어요!', type: [] }
        ],
        tmi: '🍒그거 아시나요?<br>배우들의 칵테일파티에서 어떤 아역배우가 음료를 먹고 싶어했어요.이를 본 바텐더가 특별히 제작한 "셜리 템플"이라는 무알콜 칵테일이 있답니다.'
    },

    {
        q: '친구들을 보니 더 맛있는 칵테일과 멋진 모습을 보여주고 싶은걸요.',
        a: [
            { answer: '친구들의 기대 가득한 눈 👀', type: [] }
        ],
        tmi: ''
    },

    {
        q: '만들려고 하는 칵테일은 믹서기를 써야 하는데 시끄러울 것 같다는 걱정이 들어요.',
        a: [
            { answer: '믹서기를 못 쓰니까, 맛을 감수해서 그냥 만들려던 것을 만들자.', type: [6, 10, 5, 1, 4, 8] },
            { answer: '이거 대신 믹서기를 안 쓰는 칵테일을 만들어준다고 친구를 설득해야겠다.', type: [0, 12, 2, 14, 9, 13] },
            { answer: '윗집에 조금 미안하긴 하지만.. 무조건 원래 계획대로 만들자.', type: [15, 11, 7, 3] },
        ],
        tmi: '🍒그거 아시나요?<br>음료를 믹서에 넣고 가는 방법을 블렌드, 음료를 층지게 따르는 방법을 플로팅이라고 한답니다.'
    },

    {
        q: '완성! 이 칵테일을 어느 잔에 따라줄까요?',
        a: [
            { answer: '평범한 유리잔', type: [0, 1, 2, 4, 6, 12, 13, 14] },
            { answer: '와인잔처럼 가느다란 기둥이 있는 둥근잔', type: [5, 9, 10, 15] },
            { answer: '기둥이 있고 삼각형의 칵테일잔', type: [3, 8] },
            { answer: '종이컵', type: [11, 7] },
        ],
        tmi: '🍒그거 아시나요?<br><br>칵테일마다 담아야하는 잔이 정해져 있는 경우가 많답니다.'
    },

    {
        q: '칵테일을 만들고 나니 재료가 남았어요. 이 남은 것들을 어떻게 할까요?',
        a: [
            { answer: '보관법과 유통기한을 알아보고, 철저히 관리보관해야지.', type: [0, 1, 12, 13] },
            { answer: '많이 남은 건 그냥 일단 보관하고, 반보다 안 남은건 그냥 버리자.', type: [2, 3, 14, 15] },
            { answer: '남은 거 어차피 잘 안먹을텐데 지금 바로 버릴래.', type: [4, 5, 6, 7, 8, 9, 10, 11] },
        ],
        tmi: '🍒그거 아시나요?<br><br>몇몇 과일향 시럽들은 너무 달아서 미생물이 번식할 수 없어요. 상온에 두어도 안 상한답니다.'
    },

    {
        q: '아~ 오늘 알차게 놀았다. 시간이 늦었네요.',
        a: [
            { answer: '얘들아! 너희랑 더 놀고싶어. 그냥 여기서 자고 가!', type: [2, 3, 6, 7, 10, 11, 14, 15] },
            { answer: '와 오늘 정말 재밌었어, 이제 다들 헤어질까?', type: [0, 1, 12, 13, 4, 5, 8, 9] },
        ],
        tmi: '🍒그거 아시나요?<br><br>이제 끝났답니다!'
    },
]

const infoList = [{
        tag: '논리적인',
        name: '프레리 오이스터',
        mbti: 'ISTJ',
        desc: '총명하고 광범위한 분야에 재능이 있으며 인정받기를 좋아해요. 낯선환경이나 변화는 별로 좋아하지 않아요. 대인관계에 맺고 끊음이 확실하며 현실적이에요. 창의성이 부족하지만 정확하며 절약정신이 있어요'
    },
    {
        tag: '온화한',
        name: '플로리다',
        mbti: 'ISFJ',
        desc: '총명하고 광범위한 분야에 재능이 있으며 인정받기를 좋아해요. 낯선환경이나 변화는 별로 좋아하지 않아요. 대인관계에 맺고 끊음이 확실하며 현실적이에요. 창의성이 부족하지만 정확하며 절약정신이 있어요'
    },
    {
        tag: '신비로운',
        name: '신데렐라',
        mbti: 'INFJ',
        desc: '    '
    },
    {
        tag: '냉철한',
        name: '그래스호퍼',
        mbti: 'INTJ',
        desc: '    '
    },
    {
        tag: '만능적인',
        name: '쿠바 리브레',
        mbti: 'ISTP',
        desc: '    '
    },
    {
        tag: '예술적인',
        name: '선라이즈',
        mbti: 'ISFP',
        desc: '    '
    },
    {
        tag: '섬세한',
        name: '피치 크러쉬',
        mbti: 'INFP',
        desc: '    '
    },
    {
        tag: '객관적인',
        name: '블러디 메리',
        mbti: 'INTP',
        desc: '    '
    },
    {
        tag: '자유로운',
        name: '스트로베리 다이키리',
        mbti: 'ESTP',
        desc: '    '
    },
    {
        tag: '화려한',
        name: '바베이도스 서프라이즈',
        mbti: 'ESFP',
        desc: '    '
    },
    {
        tag: '열정적인',
        name: '블루 하와이안',
        mbti: 'ENFP',
        desc: '    '
    },
    {
        tag: '도전적인',
        name: '피나 콜라다',
        mbti: 'ENTP',
        desc: '    '
    },
    {
        tag: '현실적인',
        name: '아놀드 팔머',
        mbti: 'ESTJ',
        desc: '    '
    },
    {
        tag: '사랑스러운',
        name: '셜리 템플',
        mbti: 'ESFJ',
        desc: '    '
    },
    {
        tag: '다정한',
        name: '모히또 라임',
        mbti: 'ENFJ',
        desc: '    '
    },
    {
        tag: '뛰어난',
        name: '골든 메달리스트',
        mbti: 'ENTJ',
        desc: '    '
    },
]