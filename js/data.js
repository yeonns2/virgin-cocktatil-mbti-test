const qnaList = [
  {
    q: '칵테일이라는 단어를 들으면 무슨 생각이 떠오르나요?',
    a: [
      { answer: '각양각색 무지개빛 화려한', type: [1,2,3,4] },
      { answer: '중후한 느낌의 투명한 갈색빛',type: [1,2,3,4] },
      { answer: '노랑, 주황, 파랑같은 밝은 빛깔의 은은한', type: [1,2,3,4] },
    ],
    tmi : '🍒그거 아시나요?<br>“바베이도스 서프라이즈” 라는 칵테일은 무지개빛 칵테일이랍니다.'
    
  },
  {
    q: '기분좋은 하루였어요.<br>오늘 저녁에는 아주 친한 친구를 <br>우리 집에 초대해 칵테일을 대접하기로 했거든요.',
    a: [
       {answer: '다음',type: []}
    ],
    tmi :'🍒그거 아세요?<br>어떤 아역배우가 칵테일파티에서 음료를 먹고 싶어하자 <br>바텐더가 특별히 제작한 무알콜 칵테일이 있답니다.'
  },
  {
    q: '그러던 도중 전화가 왔어요! <br>이 친구도 친한 친구인데, 오늘 같이 보자고 하면 좋을 것 같아요.그런데 이 친구는 술을 잘 못 먹는 친구에요. 어떻게 말할까요?',
    a: [
      { answer: '야, 칵테일 별로 안 세니까 그냥 마셔', type: [1,2,3,4] },
      { answer: '(바로 수긍하며) 좋아! 그럼 너를 위해서는 버진 칵테일을 만들어줄게', type: [1,2,3,4]},
    ],
    tmi: '🍒그거 아시나요?<br>버진 칵테일은 논알콜 칵테일을 의미해요. 생각보다 엄청 맛있답니다!'
  },
  {
    q: '당신의 친구들이 당신의 집에 놀러와서 레시피를 보여주며 이런 칵테일을 만들어 달라고 합니다. 이때 당신의 반응은?',
    a: [
      { answer: '최대한 많이 넣는 게 좋지! 이왕이면 집에 있는 재료들까지 더 넣어서 만든다.', type: [1,2,3,4] },
      { answer: '레시피는 꼭꼭 지키되 더이상 많이 넣지는 않는다.', type: [1,2,3,4] },
      { answer: '정해진 것이 어딨어! 내가 싫어하는 재료는 빼고 칵테일을 만든다.', type: [1,2,3,4] },
    ],
    tmi :'🍒그거 아시나요?<br>칵테일 맨 위에 올리는 장식을 가니쉬라고 불러요. 이 장식 하나에 맛이 변하곤 한답니다!'
  },
  {
    q: '이런, 친구의 부탁을 받고 칵테일을 만들려고 냉장고를 확인해 봤는데 재료들이 다 상해버렸네요. 주스들은 너무 금방 상해서 문제죠',
    a: [
      { answer: '가만 보자, 우선 출발하기 전에 내가 뭐를 가지고 있는지 뭐를 사야 하는지 따져 보자.', type: [1,2,3,4] },
      { answer: '일단 친구가 기다리고 있으니까 빨리 대형 마트로 출발해!', type: [1,2,3,4]},
    ],
    tmi : '🍒그거 아시나요?<br>얼음 하나만 신중히 골라도 칵테일의 질이 많이 달라진답니다. 편의점에서 파는 큰 덩어리의 돌얼음을 추천해요.'
    
  },
  {
    q: '대형 마트에 도착했어요. 친구가 부탁한 칵테일은 생과일을 직접 손질해서 넣어도 되고, 그냥 주스를 써도 된답니다. 이 친구들은 어차피 칵테일에 익숙하지 않아요. 그래서 아무리 좋은 재료를 써도 큰 차이를 느끼지 못할지도 몰라요. 어떻게 할까요?',
    a: [
      { answer: '친구 기준 말고 내 기준에서 더 맛있는 음료를 먹어야해. 생과일을 사자.', type: [1,2,3,4] },
      { answer: '잘 모르는데 괜찮을거야. 그냥 과일 주스를 사자', type: [1,2,3,4]},
    ],
    tmi : '🍒그거 아시나요? 대체제를 사용할 때마다 생각보다 맛이 드라마틱하게 바뀐답니다.'
    
  },

  {
    q: '마트를 돌았는데 내가 구하려는 재료가 없어요. (파인애플 주스가 도대체 어디 있는거지..)',
    a: [
      { answer: '그냥 다른 칵테일을 만들어준다고 해야겠다.',type: [1,2,3,4] },
      { answer: '파인애플 주스는 없지만 쿨피스같은 대체제를 찾아야겠어.', type: [1,2,3,4]},
      { answer: '아직 포기하긴 일러.. 한 두세군데만 더 가	보자', type: [1,2,3,4] },
      { answer: '이 동네를 다 긁어서라도 어떻게든 찾겠어.', type: [1,2,3,4]},
    ],
    tmi :'🍒그거 아시나요? 광진구의 편의점과 대형마트 30 군데 중에서 생과일 파인애플주스를 판매하는 곳은 딱 4 군데랍니다.'
  },
  {
    q: '휴, 어쨌든 동네 한 바퀴를 돌았네요. 다시 집에 들어가야겠어요.',
    a: [
      { answer: '친구가 이렇게 고생한 것을 알아줘야할텐데!',type: [1,2,3,4] },
      { answer: '그럴수도 있지 뭘, 내가 초대해놓고.', type: [1,2,3,4] },
      
    ],
    tmi: ''
  },
  {
    q: '비가 추적추적 오기 시작하네요. 양손에는 재료가 한가득. 뭐 맞을만하긴 한데, 걸어 갈거에요?',
    a: [
      { answer: '아, 진짜 무거운거 들고 비도 오는데 택시 타자.', type: [1,2,3,4] },
      { answer: '조금 멀어도 돈도 많이 썼는데 걸어가자.', type: [1,2,3,4]},
      
    ],
    tmi: ''
  },
  {
    q: '집에 도착해서 재료들을 주섬주섬, 친구들을 보니 더 맛있는 칵테일과 멋진 모습을 보여주고 싶은걸요.',
    a: [
      {answer:'다음',type: []}
    ],
    tmi: ''
  },
  {
    q: '드디어 만들려고 하는 칵테일은 믹서기를 써야 해요. 하지만 시간이 조금 늦었는걸요? 시끄러울 것 같다는 걱정이 들어요.',
    a: [
      { answer: '믹서기를 못 쓰니까, 맛을 감수해서 그냥 만들려던 것을 만들자.', type: [1,2,3,4]},
      { answer: '믹서기를 안 쓰는 칵테일을 만들어준다고 친구를 설득해 보자.', type: [1,2,3,4] },
      { answer: '윗집에 조금 미안하긴 하지만.. 무조건 원래 계획대로 만들려던 것을 만들자.', type: [1,2,3,4]},
    ],
    tmi:'🍒그거 아시나요? 음료를 믹서에 넣고 가는 방법을 블렌드, 음료를 층지게 따르는 방법을 플로팅 이라고 한답니다.'
  },
  {
    q: '이 칵테일을 어느 잔에 따라줄까요?',
    a: [
      { answer: '유리잔', type: [1,2,3,4] },
      { answer: '와인잔처럼 기둥이 있는 잔', type: [1,2,3,4] },
      { answer: '기둥이 있고 삼각형의 칵테일잔',type: [1,2,3,4]},
      { answer: '종이컵',type: [1,2,3,4] },
    ],
    tmi: '🍒그거 아시나요? 어떤 칵테일을 어떤 잔에 담으면 좋다고 권장하는 경우가 많답니다.'
  },
  {
    q: '휴 힘들다. 이제 칵테일은 다 대접했겠는데, 아참 음식을 안 시켰네요. 뭐를 시켜 먹자고 할까요? 세명이서 예산은 딱 3만원이에요.',
    a: [
      { answer: '안그래도 달콤한 칵테일엔 샐러드와 치즈', type: [1,2,3,4] },
      { answer: '오래 걸리지 않는 패스트푸드',type: [1,2,3,4] },
      { answer: '칵테일에는 든든한 국밥!', type: [1,2,3,4]},
    ],
    tmi:'🍒그거 아시나요? 동네 가게에서 칵테일을 테이크아웃할 수 있는 서비스들이 있답니다.'
  },
  {
    q: '그래도 맛있게 먹는 친구들을 보니 뿌듯한데요? 친구가 이번엔 아무거나 하나만 더 달라고 조르네요. 어떤 칵테일을 대접할까요?',
    a: [
      { answer: '재료가 많이 들어가야 만드는 재미가 있으니까 뭐 많이 들어가는 거!', type: [1,2,3,4] },
      { answer: '멋지게 쉐이킹하는 모습을 보여줄 수 있는 칵테일', type: [1,2,3,4] },
      { answer: '맛은 둘째치고 색 하나는 정말 예쁜 사진촬영용 칵테일',type: [1,2,3,4]},
    ],
    tmi:'🍒그거 아시나요? 샴페인이라는 술은 그냥 탄산 포도주가 아니랍니다. 샴페인이라는 이름을 달기 위해서는 아주 까다로운 규칙에 맞춰야 해요'
  },
  {
    q: '역시 칵테일을 한 번 해 먹자면 너무 많이 남는군요. 반 컵도 안 사용한 것도 있고, 커다란 주스의 절반쯤 사용한 것도 있네요. 이 남은 것들을 어떻게 할까요?',
    a: [
      { answer: '보관법과 유통기한을 알아보고, 철저히 관리보관해야지.', type: [1,2,3,4] },
      { answer: '많이 남은 건 그냥 일단 보관하고, 반보다 안 남은건 그냥 버리자.', type: [1,2,3,4] },
      { answer: '그냥 남은 거 어차피 잘 안먹을텐데 바로 버릴래.', type: [1,2,3,4]},
    ],
    tmi:'🍒그거 아시나요? 몇몇 과일향 시럽들은 너무 달아서 미생물이 번식할 수 없어요. 상온에 두어도 안 상한답니다.'
  },
  {
    q: '아~ 오늘 알차게 놀았다. 시간이 늦었네요.',
    a: [
      { answer: '얘들아! 그냥 여기서 자고 가!', type: [1]},
      { answer: '와 오늘 정말 재밌었어, 이제 다들 헤어질까?', type: [2]},
      { answer: '다른 사람과 분위기가 가는대로 맡겨 두는 중. 흐름타자구~', type: [3]},
    ],
    tmi:'🍒그거 아시나요? 이제 끝났답니다!'
  },
]

const infoList = [
  {
    name: '연애 뭐 식은 죽 먹기죠, 연애 재능 만땅 <쥐>',
    desc: '연애의 프로재능러인 당신! 쥐에 해당하는 당신은 연애의 모든 것들을 알고 있어, 쉽게 연애에 성공하는 스타일이랍니다. 주로 포부가 크고 성격이 낙천적인 성향을 가지고 있고, 논리적이면서 두뇌회전이 매우 빠르다고 할 수 있어요. 말재주 또한 좋아 사교성이 좋고 유쾌하지만 화려한 것을 좋아해 허영심을 부리거나 사치를 부리기 때문에 이 점들을 주의해야 돼요. 뛰어난 능력에 자만하는 경우도 종종 있기 때문에 겸손이 필요하답니다! '
  },
  {
    name: '난 너만 봐, 정직한 연애 스타일의 <소>',
    desc: '연애 유형의 진국인 당신! 소에 해당하는 당신은 상대방만 바라보는 해바라기 연애 스타일이랍니다. 매사에 끈기가 있어 연애를 할 때 성실하고 진심을 다하는 성향을 가지고, 온화하며 따뜻한 마음을 가지고 있어요. 한 번 좋아하면 끝까지 좋아하는 의리파지만 자존심이 쌔 은근히 고집이 강하답니다. 또한 욱하는 성질이 있어 이런 부분들을 조심해야 하고, 질투심이 많아 사랑이 집착으로 바뀔 수 있어 주의해야 된답니다! '
  },
  {
    name: '야 사귀자, 사랑을 쟁취하는 <호랑이>',
    desc: '한 번 좋아하는 사람이 있으면 내 사람으로 만드는 당신! 호랑이에 해당하는 당신은 썸부터 사랑까지 한 번에 직진하는 스타일이랍니다. 연애할 때 주로 이끄는 성향을 가지고 있고, 시원시원한 성격과 유쾌한 성격을 가지고 있어요. 대쪽같은 성격에다 실수를 용납하는 대인배지만 유혹에 약하고 허영때문에 들뜨는 성격이라 다른 이성의 접근에 주의해야 돼요. 또한 내가 한 말로 인해 상대방이 상처를 받을 수 있기 때문에, 항상 말 조심이 필요하답니다!'
  },
  {
    name: '이건 어때? 난 어때? 독특한 매력을 가진 <토끼>',
    desc: '상대방을 홀리게 만드는 당신! 신비롭고 독특한 매력을 가져, 상대방이 푹 빠지게 만드는 스타일이에요. 직감이 발달되어 손재주가 뛰어난 편이고, 연애할 때 통통 튀는 모습들을 많이 보여준답니다. 유순하고 낙천적인 성향이지만, 자칫잘못하면 상대방에게 천진난만한 아이처럼 보일 수 있는 점을 주의해야 돼요. 또한 감정 기복이 심한 편이라 변덕스러운 마음을 가질 수 있어, 이런 부분들에 신경을 쓴다면 좋은 연애를 할 수 있어요.'
  },
  {
    name: '결혼은 언제쯤 할까 신혼여행은 어디로?, 이상적인 연애관의 소유자 <용>',
    desc: '상대방과의 미래를 꿈꾸는 당신! 현실적인 연애보다는, 미래에 대한 이상적인 연애관을 가지고 있어요. 매일매일 사랑하는 사람과 보낼 미래를 생각하기 때문에, 좋은 신랑감이 될 수 있는 자질이 있답니다. 또한 일적으로나 사랑으로나 야망이 커, 크게 성공할 확률이 높고 리더십이 매우 뛰어나답니다. 다만 높은 이상에 비해서 현실이 자신의 마음에 들지 않으면 허세를 부리거나 사람들을 무시하는 경우가 많으니 이점들을 주의하면 좋을 것 같아요!'
  },
  {
    name: '기념일에 무슨 이벤트 할까, 이벤트 플래너 <뱀>',
    desc: '상대방의 기념일을 챙기며 깜짝 놀라게 하는 당신!, 아이디어가 뛰어나고 남다른 감각이 있어, 상대방에게 많은 이벤트를 해주는 스타일이에요. 연애할 때 눈치도 빠르고, 감동을 줄 수 있어 상대방이 매일 행복하답니다. 전체적으로 화려한 연애를 하지만, 은근히 비밀이 많고 우유부단한 성격을 가지고 있답니다. 또한 귀가 매우 얇아 남의 이야기를 곧이 곧대로 믿어, 상대방을 의심하기도 하기 때문에 조심해야 된답니다!'
  },
  {
    name: '어 오늘 머리 바꿨네 잘 어울린다, 센스가 뛰어난 <말>',
    desc: '연애할 때, 센스가 넘쳐나는 당신! 말재주가 뛰어나며 처세술이 뛰어나, 상대방의 호감을 금방 얻는답니다. 낙천적이고 유연한 성격을 가지고 있으며, 구속받는 것을 싫어하는 스타일이에요. 소중한 사람들을 위해 희생할 줄도 알지만, 쾌략 지향적인 경우가 많아 사치와 허영에 물드는 경우가 다반수입니다. 한탕 주의에 빠져 쉽게 망가질 수 있기 때문에 이 점을 주의해야 된답니다!'
  },
  {
    name: '난 너랑 하는 것들 다 좋아, 순종적인 <양>',
    desc: '연애할 때 모든 걸 맞춰주려고 하는 당신! 다정한 느낌과 상냥한 모습을 가지고 있어, 상대방 입장에서 편안한 느낌을 받을 수 있답니다. 타오르는 연애보다는 안정적인 연애를 추구하고, 상대방에게 마음을 여는 순간 진심으로 사랑에 푹 빠질 수 있습니다. 또한 강인한 생존력과 수완이 좋으나, 한편으로는 자신이 원하는 바를 모두 쟁취하려는 고집이 있어요. 이 고집이 심해지면 다른 사람 눈에서는 계산적인 사람처럼 보여 매력을 잃을 수 있습니다!'
  },
  {
    name: '난 당신의 연예인, 끼가 넘치는 재주꾼 <원숭이>',
    desc: '지치고 힘들 때 언제나 행복을 주는 당신! 정말 끼가 많고 말재주가 많다보니 팔방미인이라는 소리를 많이 듣는 편이랍니다. 또한 다재다능하고 총명하여 어떤 일이든지 잘할 수 있고, 유머 감각도 뛰어나 주변 사람들이 많이 따르는 마당발 타입입니다. 연애할 때 상대방의 기분을 잘 맞춰주고 즐거운 분위기를 유지하나, 다소 본인의 체면을 중시하는 경향이 있어요. 이 점 때문에 잔머리를 굴리다 타인에게 교활하다는 인상을 주게 될 수도 있기 때문에 조금 조심하면 좋을 것 같아요!'
  },
  {
    name: '이건 이거고 저건 저거지 , 공과사 확실한 <닭>',
    desc: '깔끔한 연애를 추구하며 맺고 끊는 것이 확실한 당신! 단아하고 고고한 이미지를 가지고 있어 우아한 매력을 표출하는 편이랍니다. 집중력과 기억력이 좋아 상대방과 있었던 일들을 다 기억해주는 편이고, 겉으로는 무뚝뚝하나 은근히 감수성이 풍부하답니다. 다만 자신이 생각한 선을 벗어나면 냉소적으로 바뀌고, 평소 직설적인 편이라 차갑다는 인상을 많이 줄 수 있어요. 섬세한 사람이기 때문에 예민한 경우가 많으니 마음을 평안히 다스리고, 상대방에게 좀만 더 따뜻하게 대하면 좋을 것 같아요!'
  },
  {
    name: '난 네가 좋아 너무 좋아, 애교만땅 <개>',
    desc: '애교쟁이 그 자체인 당신! 둥글둥글하게 처세를 잘 하고, 붙임성이 매우 좋아 사교성이 매우 뛰어난 편이랍니다. 또한 궁금한 것을 참지 못해 호기심이 많고, 강아지같이 상대방에게 찰싹 달라붙는 것을 좋아하는 스타일이에요. 성격이 매우 쾌활하나, 감정의 기복이 은근히 심해 상대방이 하는 말에 대해 크게 상처받는 편입니다. 또한 성격이 급한 경우가 많아, 차분하게 행동을 하지 못하는 편이기 때문에 이 점을 좀만 조심하면 좋을 것 같아요! '
  },
  {
    name: '산은 산이요 연애는 연애로다, 느긋하고 온순한 <돼지>',
    desc: '단아하고 고상한 품격을 가진 당신! 마음을 먹을 때 느긋하게 행동하고, 상대방에 대한 배려가 상당히 많아 온화한 성품을 가지고 있어요. 또한 솔직한 성격으로 신뢰를 받을 수 있는 타입이며, 어떠한 일을 하든 책임감이 강해 무사히 마무리한답니다. 현실적인 성향이 강해 실리를 잘 챙기나, 표현력이 다소 부족해 상대방이 사랑받는다는 감정을 못 느낄수도 있어요. 은근히 질투심이 강하고 고지식한 면이 강해, 누가 자기에게 잘못하면 지구 끝까지 복수 할 수 있을 정도이기 때문에 이 점을 조심해야 한답니다! '
  },
]
