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
  manarola:  { model: '/data/manarola.model.json', cx: '-45', cz: '40', zoom: '2.4' },
  giza:      { model: '/data/giza.model.json', cx: '-70', cz: '70', zoom: '1.1' },
  taj:       { model: '/data/taj.model.json', cx: '-2', cz: '-40', zoom: '2' }, // 뒤 빈 땅 대신 정원이 차게, 타지마할은 왼쪽 위로
  petra:     { model: '/data/petra.model.json', cx: '95', cz: '-33', zoom: '6.5' }, // 앞 광장 여백을 줄이려고 정면을 아래쪽에
  everest:   { model: '/data/everest.model.json', zoom: '0.13' },
  jodhpur:   { model: '/data/jodhpur.model.json', cx: '-110', cz: '-150', zoom: '1.7' },
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
};
