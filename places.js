// 예쁜 명소 프로토: place=이름 하나로 모델과 그 동네에 맞는 클로즈업 카메라(cx, cz, zoom)를 정함.
// 주소의 다른 값(zoom=…)을 같이 주면 그 값이 이김
export const PLACES = {
  seongsu:   { model: '/data/seongsu.model.json', zoom: '3' },
  gamcheon:  { model: '/data/gamcheon.model.json', cx: '-19', cz: '-39', zoom: '2.6' },
  gyeongbok: { model: '/data/gyeongbok.model.json', zoom: '2.4' },
  oia:       { model: '/data/oia.model.json', cx: '-40', cz: '-15', zoom: '2.7' },
  hallstatt: { model: '/data/hallstatt.model.json', cx: '-12', cz: '-42', zoom: '4.2' },
  venice:    { model: '/data/venice.model.json', zoom: '2.6' },
  kyoto:     { model: '/data/kyoto.model.json', cx: '-105', cz: '-112', zoom: '3.2' },
  manarola:  { model: '/data/manarola.model.json', cx: '-55', cz: '30', zoom: '3.2' }, // 오른쪽 빈 땅이 안 보이게 당김
  giza:      { model: '/data/giza.model.json', cx: '-70', cz: '70', zoom: '1.1' },
  taj:       { model: '/data/taj.model.json', cx: '-2', cz: '-40', zoom: '2' }, // 뒤 빈 땅 대신 정원이 차게, 타지마할은 왼쪽 위로
  petra:     { model: '/data/petra.model.json', cx: '95', cz: '-33', zoom: '6.5' }, // 앞 광장 여백을 줄이려고 정면을 아래쪽에
  everest:   { model: '/data/everest.model.json', zoom: '0.13' },
  jodhpur:   { model: '/data/jodhpur.model.json', cx: '-110', cz: '-150', zoom: '1.7' },
  // 새 명소 20곳 (engine/place.mjs로 만듦. 기차·트램 있는 곳은 wallpaper/railfocus.mjs로 선로를 화면 가운데에)
  burano:      { model: '/data/burano.model.json', zoom: '3.2' },
  lisbon:      { model: '/data/lisbon.model.json', cx: '35', cz: '20', zoom: '3' }, // 트램
  shibuya:     { model: '/data/shibuya.model.json', zoom: '2.6' },
  amsterdam:   { model: '/data/amsterdam.model.json', zoom: '3' },
  bruges:      { model: '/data/bruges.model.json', zoom: '3' },
  colmar:      { model: '/data/colmar.model.json', zoom: '3.4' },
  krumlov:     { model: '/data/krumlov.model.json', zoom: '3' },
  portofino:   { model: '/data/portofino.model.json', cx: '56', cz: '-56', zoom: '3.4' },
  vernazza:    { model: '/data/vernazza.model.json', zoom: '3.4' },
  mykonos:     { model: '/data/mykonos.model.json', zoom: '3' },
  chefchaouen: { model: '/data/chefchaouen.model.json', cx: '-70', cz: '70', zoom: '3' },
  jeonju:      { model: '/data/jeonju.model.json', zoom: '3' },
  bukchon:     { model: '/data/bukchon.model.json', zoom: '3' },
  kamakura:    { model: '/data/kamakura.model.json', cx: '35', cz: '36', zoom: '3' }, // 에노덴
  hongkong:    { model: '/data/hongkong.model.json', cx: '98', cz: '-75', zoom: '3' }, // 트램
  hoian:       { model: '/data/hoian.model.json', zoom: '3' },
  dubrovnik:   { model: '/data/dubrovnik.model.json', zoom: '3' },
  annecy:      { model: '/data/annecy.model.json', zoom: '3.4' },
  ttukseom:    { model: '/data/ttukseom.model.json', zoom: '3' }, // 2호선 고가
  hangang:     { model: '/data/hangang.model.json', cx: '-50', cz: '-89', zoom: '2.6' },
};

// 갤러리에 보이는 이름 (순서 = 갤러리 순서)
export const INFO = {
  venice: ['베네치아', '이탈리아'],
  oia: ['이아', '그리스 산토리니'],
  hallstatt: ['할슈타트', '오스트리아'],
  manarola: ['마나롤라', '이탈리아 친퀘테레'],
  jodhpur: ['블루시티', '인도 조드푸르'],
  taj: ['타지마할', '인도 아그라'],
  giza: ['기자 피라미드', '이집트'],
  petra: ['페트라', '요르단'],
  everest: ['에베레스트', '네팔'],
  kyoto: ['히가시야마', '일본 교토'],
  gyeongbok: ['경복궁', '서울'],
  gamcheon: ['감천문화마을', '부산'],
  seongsu: ['성수동', '서울'],
  ttukseom: ['뚝섬역', '서울'],
  hangang: ['뚝섬한강공원', '서울'],
  bukchon: ['북촌 한옥마을', '서울'],
  jeonju: ['전주 한옥마을', '전북 전주'],
  lisbon: ['알파마', '포르투갈 리스본'],
  kamakura: ['가마쿠라코코마에', '일본 가마쿠라'],
  hongkong: ['센트럴', '홍콩'],
  shibuya: ['시부야', '일본 도쿄'],
  burano: ['부라노', '이탈리아'],
  portofino: ['포르토피노', '이탈리아'],
  vernazza: ['베르나차', '이탈리아 친퀘테레'],
  dubrovnik: ['두브로브니크', '크로아티아'],
  mykonos: ['미코노스', '그리스'],
  chefchaouen: ['셰프샤우엔', '모로코'],
  amsterdam: ['암스테르담 운하', '네덜란드'],
  bruges: ['브뤼헤', '벨기에'],
  colmar: ['콜마르', '프랑스 알자스'],
  annecy: ['안시', '프랑스'],
  krumlov: ['체스키크룸로프', '체코'],
  hoian: ['호이안', '베트남'],
};
