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

const qnaList = [
  {
    q: '칵테일이라는 단어를 들으면<br>무슨 생각이 떠오르나요?',
    a: [
      { answer: '각양각색 무지개빛 화려한', type: [2,5,9,10,11,15] },
      { answer: '중후한 느낌의 투명한 갈색빛',type: [3,4,7,11] },
      { answer: '노랑, 주황, 파랑같은 밝은 빛깔의 은은한', type: [0,1,2,6,8,9,12,13,14,15] },
    ],
    tmi : '🍒그거 아시나요?<br>“바베이도스 서프라이즈” 라는 칵테일은 <br>무지개빛 칵테일이랍니다.'
    
  },
  {
    q: '기분좋은 하루였어요.<br>오늘 저녁에는 아주 친한 친구를 <br>우리 집에 초대해 칵테일을 대접하기로 했거든요.',
    a: [
       {answer: '다음',type: []}
    ],
    tmi :'🍒그거 아세요?<br>어떤 아역배우가 칵테일파티에서 음료를 먹고 싶어하자 <br>바텐더가 특별히 제작한 무알콜 칵테일이 있답니다.'
  },
  {
    q: '그러던 도중 전화가 왔어요! <br>이 친구도 친한 친구인데, 오늘 같이 보자고 하네요.<br>그런데 이 친구는 술을 잘 못 먹는 친구에요.<br>어떻게 말할까요?',
    a: [
      { answer: '야, 칵테일 별로 안 세니까 그냥 마셔', type: [0] },
      { answer: '(바로 수긍하며) 좋아! <br>그럼 너를 위해서는 버진 칵테일을 만들어줄게', type: [0,1,2,3,4]},
    ],
    tmi: '🍒그거 아시나요?<br>버진 칵테일은 논알콜 칵테일을 의미해요.<br>생각보다 엄청 맛있답니다!'
  },
  // {
  //   q: '당신의 친구들이 당신의 집에 놀러와서 레시피를 보여주며 이런 칵테일을 만들어 달라고 합니다. 이때 당신의 반응은?',
  //   a: [
  //     { answer: '최대한 많이 넣는 게 좋지! 이왕이면 집에 있는 재료들까지 더 넣어서 만든다.', type: [1,2,3,4] },
  //     { answer: '레시피는 꼭꼭 지키되 더이상 많이 넣지는 않는다.', type: [1,2,3,4] },
  //     { answer: '정해진 것이 어딨어! 내가 싫어하는 재료는 빼고 칵테일을 만든다.', type: [1,2,3,4] },
  //   ],
  //   tmi :'🍒그거 아시나요?<br>칵테일 맨 위에 올리는 장식을 가니쉬라고 불러요. 이 장식 하나에 맛이 변하곤 한답니다!'
  // },
  // {
  //   q: '이런, 친구의 부탁을 받고 칵테일을 만들려고 냉장고를 확인해 봤는데 재료들이 다 상해버렸네요. 주스들은 너무 금방 상해서 문제죠',
  //   a: [
  //     { answer: '가만 보자, 우선 출발하기 전에 내가 뭐를 가지고 있는지 뭐를 사야 하는지 따져 보자.', type: [1,2,3,4] },
  //     { answer: '일단 친구가 기다리고 있으니까 빨리 대형 마트로 출발해!', type: [1,2,3,4]},
  //   ],
  //   tmi : '🍒그거 아시나요?<br>얼음 하나만 신중히 골라도 칵테일의 질이 많이 달라진답니다. 편의점에서 파는 큰 덩어리의 돌얼음을 추천해요.'
    
  // },
  // {
  //   q: '대형 마트에 도착했어요. 친구가 부탁한 칵테일은 생과일을 직접 손질해서 넣어도 되고, 그냥 주스를 써도 된답니다. 이 친구들은 어차피 칵테일에 익숙하지 않아요. 그래서 아무리 좋은 재료를 써도 큰 차이를 느끼지 못할지도 몰라요. 어떻게 할까요?',
  //   a: [
  //     { answer: '친구 기준 말고 내 기준에서 더 맛있는 음료를 먹어야해. 생과일을 사자.', type: [1,2,3,4] },
  //     { answer: '잘 모르는데 괜찮을거야. 그냥 과일 주스를 사자', type: [1,2,3,4]},
  //   ],
  //   tmi : '🍒그거 아시나요? 대체제를 사용할 때마다 생각보다 맛이 드라마틱하게 바뀐답니다.'
    
  // },

  // {
  //   q: '마트를 돌았는데 내가 구하려는 재료가 없어요. (파인애플 주스가 도대체 어디 있는거지..)',
  //   a: [
  //     { answer: '그냥 다른 칵테일을 만들어준다고 해야겠다.',type: [1,2,3,4] },
  //     { answer: '파인애플 주스는 없지만 쿨피스같은 대체제를 찾아야겠어.', type: [1,2,3,4]},
  //     { answer: '아직 포기하긴 일러.. 한 두세군데만 더 가	보자', type: [1,2,3,4] },
  //     { answer: '이 동네를 다 긁어서라도 어떻게든 찾겠어.', type: [1,2,3,4]},
  //   ],
  //   tmi :'🍒그거 아시나요? 광진구의 편의점과 대형마트 30 군데 중에서 생과일 파인애플주스를 판매하는 곳은 딱 4 군데랍니다.'
  // },
  // {
  //   q: '휴, 어쨌든 동네 한 바퀴를 돌았네요. 다시 집에 들어가야겠어요.',
  //   a: [
  //     { answer: '친구가 이렇게 고생한 것을 알아줘야할텐데!',type: [1,2,3,4] },
  //     { answer: '그럴수도 있지 뭘, 내가 초대해놓고.', type: [1,2,3,4] },
      
  //   ],
  //   tmi: ''
  // },
  // {
  //   q: '비가 추적추적 오기 시작하네요. 양손에는 재료가 한가득. 뭐 맞을만하긴 한데, 걸어 갈거에요?',
  //   a: [
  //     { answer: '아, 진짜 무거운거 들고 비도 오는데 택시 타자.', type: [1,2,3,4] },
  //     { answer: '조금 멀어도 돈도 많이 썼는데 걸어가자.', type: [1,2,3,4]},
      
  //   ],
  //   tmi: ''
  // },
  // {
  //   q: '집에 도착해서 재료들을 주섬주섬, 친구들을 보니 더 맛있는 칵테일과 멋진 모습을 보여주고 싶은걸요.',
  //   a: [
  //     {answer:'다음',type: []}
  //   ],
  //   tmi: ''
  // },
  // {
  //   q: '드디어 만들려고 하는 칵테일은 믹서기를 써야 해요. 하지만 시간이 조금 늦었는걸요? 시끄러울 것 같다는 걱정이 들어요.',
  //   a: [
  //     { answer: '믹서기를 못 쓰니까, 맛을 감수해서 그냥 만들려던 것을 만들자.', type: [1,2,3,4]},
  //     { answer: '믹서기를 안 쓰는 칵테일을 만들어준다고 친구를 설득해 보자.', type: [1,2,3,4] },
  //     { answer: '윗집에 조금 미안하긴 하지만.. 무조건 원래 계획대로 만들려던 것을 만들자.', type: [1,2,3,4]},
  //   ],
  //   tmi:'🍒그거 아시나요? 음료를 믹서에 넣고 가는 방법을 블렌드, 음료를 층지게 따르는 방법을 플로팅 이라고 한답니다.'
  // },
  // {
  //   q: '이 칵테일을 어느 잔에 따라줄까요?',
  //   a: [
  //     { answer: '유리잔', type: [1,2,3,4] },
  //     { answer: '와인잔처럼 기둥이 있는 잔', type: [1,2,3,4] },
  //     { answer: '기둥이 있고 삼각형의 칵테일잔',type: [1,2,3,4]},
  //     { answer: '종이컵',type: [1,2,3,4] },
  //   ],
  //   tmi: '🍒그거 아시나요? 어떤 칵테일을 어떤 잔에 담으면 좋다고 권장하는 경우가 많답니다.'
  // },
  // {
  //   q: '휴 힘들다. 이제 칵테일은 다 대접했겠는데, 아참 음식을 안 시켰네요. 뭐를 시켜 먹자고 할까요? 세명이서 예산은 딱 3만원이에요.',
  //   a: [
  //     { answer: '안그래도 달콤한 칵테일엔 샐러드와 치즈', type: [1,2,3,4] },
  //     { answer: '오래 걸리지 않는 패스트푸드',type: [1,2,3,4] },
  //     { answer: '칵테일에는 든든한 국밥!', type: [1,2,3,4]},
  //   ],
  //   tmi:'🍒그거 아시나요? 동네 가게에서 칵테일을 테이크아웃할 수 있는 서비스들이 있답니다.'
  // },
  // {
  //   q: '그래도 맛있게 먹는 친구들을 보니 뿌듯한데요? 친구가 이번엔 아무거나 하나만 더 달라고 조르네요. 어떤 칵테일을 대접할까요?',
  //   a: [
  //     { answer: '재료가 많이 들어가야 만드는 재미가 있으니까 뭐 많이 들어가는 거!', type: [1,2,3,4] },
  //     { answer: '멋지게 쉐이킹하는 모습을 보여줄 수 있는 칵테일', type: [1,2,3,4] },
  //     { answer: '맛은 둘째치고 색 하나는 정말 예쁜 사진촬영용 칵테일',type: [1,2,3,4]},
  //   ],
  //   tmi:'🍒그거 아시나요? 샴페인이라는 술은 그냥 탄산 포도주가 아니랍니다. 샴페인이라는 이름을 달기 위해서는 아주 까다로운 규칙에 맞춰야 해요'
  // },
  // {
  //   q: '역시 칵테일을 한 번 해 먹자면 너무 많이 남는군요. 반 컵도 안 사용한 것도 있고, 커다란 주스의 절반쯤 사용한 것도 있네요. 이 남은 것들을 어떻게 할까요?',
  //   a: [
  //     { answer: '보관법과 유통기한을 알아보고, 철저히 관리보관해야지.', type: [1,2,3,4] },
  //     { answer: '많이 남은 건 그냥 일단 보관하고, 반보다 안 남은건 그냥 버리자.', type: [1,2,3,4] },
  //     { answer: '그냥 남은 거 어차피 잘 안먹을텐데 바로 버릴래.', type: [1,2,3,4]},
  //   ],
  //   tmi:'🍒그거 아시나요? 몇몇 과일향 시럽들은 너무 달아서 미생물이 번식할 수 없어요. 상온에 두어도 안 상한답니다.'
  // },
  {
    q: '아~ 오늘 알차게 놀았다. 시간이 늦었네요.',
    a: [
      { answer: '얘들아! 그냥 여기서 자고 가!', type: [0]},
      { answer: '와 오늘 정말 재밌었어, 이제 다들 헤어질까?', type: [1]},
      { answer: '다른 사람과 분위기가 가는대로 맡겨 두는 중. 흐름타자구~', type: [2]},
    ],
    tmi:'🍒그거 아시나요? 이제 끝났답니다!'
  },
]

const infoList = [
  {
    name: '블러디 메리',
    desc: '🍒 성취를 통해 행복을 느끼는 것이 가장 즐거워요.<br>\
    🍒 다양한 문제에 논리적으로 생각하고 해결책을 내는 편이에요.<br>\
    🍒 호기심이 많고 지적욕구가 강하며 완벽주의자에요.<br> \
    🍒 삶이 늘 바쁘고 일을 잘하며 머리가 똑똑해요.<br>\
    🍒 비효율적인 관습을 이해할 수 없어요.<br> \
    🍒 논쟁을 좋아하고 승부욕도 강해 지적받는 걸 안 좋아해요.<br>\
    🍒 비전 있고 나를 인정해주는 사람을 좋아해요.<br>\
    '
  },
  {
    name: '신데렐라',
    desc: '🍒 성취를 통해 행복을 느끼는 것이 가장 즐거워요.<br>\
    🍒 다양한 문제에 논리적으로 생각하고 해결책을 내는 편이에요.<br>\
    🍒 호기심이 많고 지적욕구가 강하며 완벽주의자에요.<br> \
    🍒 삶이 늘 바쁘고 일을 잘하며 머리가 똑똑해요.<br>\
    🍒 비효율적인 관습을 이해할 수 없어요.<br> \
    🍒 논쟁을 좋아하고 승부욕도 강해 지적받는 걸 안 좋아해요.<br>\
    🍒 비전 있고 나를 인정해주는 사람을 좋아해요.<br>\
    '
  },
  {
    name: '골든 메달리스트',
    desc: '🍒 성취를 통해 행복을 느끼는 것이 가장 즐거워요.<br>\
    🍒 다양한 문제에 논리적으로 생각하고 해결책을 내는 편이에요.<br>\
    🍒 호기심이 많고 지적욕구가 강하며 완벽주의자에요.<br> \
    🍒 삶이 늘 바쁘고 일을 잘하며 머리가 똑똑해요.<br>\
    🍒 비효율적인 관습을 이해할 수 없어요.<br> \
    🍒 논쟁을 좋아하고 승부욕도 강해 지적받는 걸 안 좋아해요.<br>\
    🍒 비전 있고 나를 인정해주는 사람을 좋아해요.<br>\
    '
  },
  {
    name: '선라이즈',
    desc: '🍒 성취를 통해 행복을 느끼는 것이 가장 즐거워요.<br>\
    🍒 다양한 문제에 논리적으로 생각하고 해결책을 내는 편이에요.<br>\
    🍒 호기심이 많고 지적욕구가 강하며 완벽주의자에요.<br> \
    🍒 삶이 늘 바쁘고 일을 잘하며 머리가 똑똑해요.<br>\
    🍒 비효율적인 관습을 이해할 수 없어요.<br> \
    🍒 논쟁을 좋아하고 승부욕도 강해 지적받는 걸 안 좋아해요.<br>\
    🍒 비전 있고 나를 인정해주는 사람을 좋아해요.<br>\
    '
  },
  {
    name: '셜리 템플',
    desc: '🍒 성취를 통해 행복을 느끼는 것이 가장 즐거워요.<br>\
    🍒 다양한 문제에 논리적으로 생각하고 해결책을 내는 편이에요.<br>\
    🍒 호기심이 많고 지적욕구가 강하며 완벽주의자에요.<br> \
    🍒 삶이 늘 바쁘고 일을 잘하며 머리가 똑똑해요.<br>\
    🍒 비효율적인 관습을 이해할 수 없어요.<br> \
    🍒 논쟁을 좋아하고 승부욕도 강해 지적받는 걸 안 좋아해요.<br>\
    🍒 비전 있고 나를 인정해주는 사람을 좋아해요.<br>\
    '
  },
  {
    name: '프레리 오이스터',
    desc: '🍒 성취를 통해 행복을 느끼는 것이 가장 즐거워요.<br>\
    🍒 다양한 문제에 논리적으로 생각하고 해결책을 내는 편이에요.<br>\
    🍒 호기심이 많고 지적욕구가 강하며 완벽주의자에요.<br> \
    🍒 삶이 늘 바쁘고 일을 잘하며 머리가 똑똑해요.<br>\
    🍒 비효율적인 관습을 이해할 수 없어요.<br> \
    🍒 논쟁을 좋아하고 승부욕도 강해 지적받는 걸 안 좋아해요.<br>\
    🍒 비전 있고 나를 인정해주는 사람을 좋아해요.<br>\
    '
  },
  {
    name: '피나 콜라다',
    desc: '🍒 성취를 통해 행복을 느끼는 것이 가장 즐거워요.<br>\
    🍒 다양한 문제에 논리적으로 생각하고 해결책을 내는 편이에요.<br>\
    🍒 호기심이 많고 지적욕구가 강하며 완벽주의자에요.<br> \
    🍒 삶이 늘 바쁘고 일을 잘하며 머리가 똑똑해요.<br>\
    🍒 비효율적인 관습을 이해할 수 없어요.<br> \
    🍒 논쟁을 좋아하고 승부욕도 강해 지적받는 걸 안 좋아해요.<br>\
    🍒 비전 있고 나를 인정해주는 사람을 좋아해요.<br>\
    '
  },
  {
    name: '쿠바 리브레',
    desc: '🍒 성취를 통해 행복을 느끼는 것이 가장 즐거워요.<br>\
    🍒 다양한 문제에 논리적으로 생각하고 해결책을 내는 편이에요.<br>\
    🍒 호기심이 많고 지적욕구가 강하며 완벽주의자에요.<br> \
    🍒 삶이 늘 바쁘고 일을 잘하며 머리가 똑똑해요.<br>\
    🍒 비효율적인 관습을 이해할 수 없어요.<br> \
    🍒 논쟁을 좋아하고 승부욕도 강해 지적받는 걸 안 좋아해요.<br>\
    🍒 비전 있고 나를 인정해주는 사람을 좋아해요.<br>\
    '
  }, {
    name: '플로리다',
    desc: '🍒 성취를 통해 행복을 느끼는 것이 가장 즐거워요.<br>\
    🍒 다양한 문제에 논리적으로 생각하고 해결책을 내는 편이에요.<br>\
    🍒 호기심이 많고 지적욕구가 강하며 완벽주의자에요.<br> \
    🍒 삶이 늘 바쁘고 일을 잘하며 머리가 똑똑해요.<br>\
    🍒 비효율적인 관습을 이해할 수 없어요.<br> \
    🍒 논쟁을 좋아하고 승부욕도 강해 지적받는 걸 안 좋아해요.<br>\
    🍒 비전 있고 나를 인정해주는 사람을 좋아해요.<br>\
    '
  }, {
    name: '모히또 라임',
    desc: '🍒 성취를 통해 행복을 느끼는 것이 가장 즐거워요.<br>\
    🍒 다양한 문제에 논리적으로 생각하고 해결책을 내는 편이에요.<br>\
    🍒 호기심이 많고 지적욕구가 강하며 완벽주의자에요.<br> \
    🍒 삶이 늘 바쁘고 일을 잘하며 머리가 똑똑해요.<br>\
    🍒 비효율적인 관습을 이해할 수 없어요.<br> \
    🍒 논쟁을 좋아하고 승부욕도 강해 지적받는 걸 안 좋아해요.<br>\
    🍒 비전 있고 나를 인정해주는 사람을 좋아해요.<br>\
    '
  }, {
    name: '바베도스 서프라이즈',
    desc: '🍒 성취를 통해 행복을 느끼는 것이 가장 즐거워요.<br>\
    🍒 다양한 문제에 논리적으로 생각하고 해결책을 내는 편이에요.<br>\
    🍒 호기심이 많고 지적욕구가 강하며 완벽주의자에요.<br> \
    🍒 삶이 늘 바쁘고 일을 잘하며 머리가 똑똑해요.<br>\
    🍒 비효율적인 관습을 이해할 수 없어요.<br> \
    🍒 논쟁을 좋아하고 승부욕도 강해 지적받는 걸 안 좋아해요.<br>\
    🍒 비전 있고 나를 인정해주는 사람을 좋아해요.<br>\
    '
  }, {
    name: '피치 크러쉬',
    desc: '🍒 성취를 통해 행복을 느끼는 것이 가장 즐거워요.<br>\
    🍒 다양한 문제에 논리적으로 생각하고 해결책을 내는 편이에요.<br>\
    🍒 호기심이 많고 지적욕구가 강하며 완벽주의자에요.<br> \
    🍒 삶이 늘 바쁘고 일을 잘하며 머리가 똑똑해요.<br>\
    🍒 비효율적인 관습을 이해할 수 없어요.<br> \
    🍒 논쟁을 좋아하고 승부욕도 강해 지적받는 걸 안 좋아해요.<br>\
    🍒 비전 있고 나를 인정해주는 사람을 좋아해요.<br>\
    '
  }, {
    name: '스트로베리 다이키리',
    desc: '🍒 성취를 통해 행복을 느끼는 것이 가장 즐거워요.<br>\
    🍒 다양한 문제에 논리적으로 생각하고 해결책을 내는 편이에요.<br>\
    🍒 호기심이 많고 지적욕구가 강하며 완벽주의자에요.<br> \
    🍒 삶이 늘 바쁘고 일을 잘하며 머리가 똑똑해요.<br>\
    🍒 비효율적인 관습을 이해할 수 없어요.<br> \
    🍒 논쟁을 좋아하고 승부욕도 강해 지적받는 걸 안 좋아해요.<br>\
    🍒 비전 있고 나를 인정해주는 사람을 좋아해요.<br>\
    '
  }, {
    name: '블루 하와이안',
    desc: '🍒 성취를 통해 행복을 느끼는 것이 가장 즐거워요.<br>\
    🍒 다양한 문제에 논리적으로 생각하고 해결책을 내는 편이에요.<br>\
    🍒 호기심이 많고 지적욕구가 강하며 완벽주의자에요.<br> \
    🍒 삶이 늘 바쁘고 일을 잘하며 머리가 똑똑해요.<br>\
    🍒 비효율적인 관습을 이해할 수 없어요.<br> \
    🍒 논쟁을 좋아하고 승부욕도 강해 지적받는 걸 안 좋아해요.<br>\
    🍒 비전 있고 나를 인정해주는 사람을 좋아해요.<br>\
    '
  }, {
    name: '그래스호퍼',
    desc: '🍒 성취를 통해 행복을 느끼는 것이 가장 즐거워요.<br>\
    🍒 다양한 문제에 논리적으로 생각하고 해결책을 내는 편이에요.<br>\
    🍒 호기심이 많고 지적욕구가 강하며 완벽주의자에요.<br> \
    🍒 삶이 늘 바쁘고 일을 잘하며 머리가 똑똑해요.<br>\
    🍒 비효율적인 관습을 이해할 수 없어요.<br> \
    🍒 논쟁을 좋아하고 승부욕도 강해 지적받는 걸 안 좋아해요.<br>\
    🍒 비전 있고 나를 인정해주는 사람을 좋아해요.<br>\
    '
  }, {
    name: '아놀드 파머',
    desc: '🍒 성취를 통해 행복을 느끼는 것이 가장 즐거워요.<br>\
    🍒 다양한 문제에 논리적으로 생각하고 해결책을 내는 편이에요.<br>\
    🍒 호기심이 많고 지적욕구가 강하며 완벽주의자에요.<br> \
    🍒 삶이 늘 바쁘고 일을 잘하며 머리가 똑똑해요.<br>\
    🍒 비효율적인 관습을 이해할 수 없어요.<br> \
    🍒 논쟁을 좋아하고 승부욕도 강해 지적받는 걸 안 좋아해요.<br>\
    🍒 비전 있고 나를 인정해주는 사람을 좋아해요.<br>\
    '
  },
 
]
