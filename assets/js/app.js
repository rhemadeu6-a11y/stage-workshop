  (function() {
    'use strict';

    /* =====================================================
       DATA
    ===================================================== */
    const projectData = {
      dominick: {
        title: 'Dominick Jocker "One Love Night" — KBS 아레나 콘서트',
        desc: 'KBS 아레나 대형 콘서트 — 무빙헤드 조명, LED 월, 음향 시스템 통합 운영',
        tags: ['Concert', 'Lighting', 'LED', 'Sound'],
        venue: 'KBS 아레나',
        media: [
          { type: 'img', src: '/assets/dominick/new-01.webp', alt: 'KBS 아레나 도미닉 조커 콘서트 무대 전경', full: true },
          { type: 'img', src: '/assets/dominick/new-05.webp', alt: 'KBS 아레나 조명 클로즈업' },
          { type: 'img', src: '/assets/dominick/new-08.webp', alt: '도미닉 조커 공연 무대 조명' },
          { type: 'img', src: '/assets/dominick/new-12.webp', alt: 'KBS 아레나 LED 스크린과 조명' },
          { type: 'img', src: '/assets/dominick/new-20.webp', alt: 'KBS 아레나 무대 특수 효과' }
        ]
      },
      dujeonku: {
        title: '두쫀쿠 콘서트 — 상암 숲 콜로세움',
        desc: '상암 숲 콜로세움 — 헥사곤 LED 패널, 무빙 라이트, LED 스크린 연출',
        tags: ['Concert', 'Lighting', 'LED Screen'],
        venue: '상암 숲 콜로세움',
        media: [
          { type: 'img', src: '/assets/dujeonku/new-01.webp', alt: '상암 두쫀쿠 콘서트 무대 전경', full: true },
          { type: 'img', src: '/assets/dujeonku/new-04.webp', alt: '두쫀쿠 콘서트 LED 스크린 연출' },
          { type: 'img', src: '/assets/dujeonku/new-08.webp', alt: '상암 숲 콜로세움 조명 디자인' },
          { type: 'img', src: '/assets/dujeonku/new-12.webp', alt: '두쫀쿠 콘서트 무대 조명' },
          { type: 'img', src: '/assets/dujeonku/new-16.webp', alt: '상암 두쫀쿠 공연 전경' }
        ]
      },
      kanoimiyu: {
        title: '\u30AB\u30CE\u30A4\u30DF\u30E6 (KANO MIYU) 내한 콘서트',
        desc: '카노이미유 서울 내한 콘서트 — PAR 조명, LED 백드롭, 음향 시스템',
        tags: ['Concert', 'Lighting', 'Sound'],
        venue: '서울',
        media: [
          { type: 'img', src: '/assets/kanoimiyu/new-01.webp', alt: '카노이미유 홍대 스테이지 공연', full: true },
          { type: 'img', src: '/assets/kanoimiyu/new-04.webp', alt: '카노이미유 무대 조명 연출' },
          { type: 'img', src: '/assets/kanoimiyu/new-08.webp', alt: '카노이미유 콘서트 관객과 무대' },
          { type: 'img', src: '/assets/kanoimiyu/new-12.webp', alt: '카노이미유 서울 공연 전경' },
          { type: 'img', src: '/assets/kanoimiyu/new-15.webp', alt: '카노이미유 콘서트 무대 전경' }
        ]
      },
      fourplay: {
        title: '포플레이 & 밥 제임스 내한공연',
        desc: '재즈 거장들의 내한공연 — 피아노, 색소폰, 베이스, 드럼 쿼르텟 조명 연출',
        tags: ['Concert', 'Jazz', 'Lighting'],
        venue: '공연장',
        media: [
          { type: 'img', src: '/assets/fourplay/stage-01.webp', alt: '포플레이 쿼르텟 무대 전경, 원형 조명 오브제', full: true },
          { type: 'img', src: '/assets/fourplay/stage-03.webp', alt: '밥 제임스 피아노 연주 무대' },
          { type: 'img', src: '/assets/fourplay/stage-05.webp', alt: '포플레이 공연 전경' },
          { type: 'img', src: '/assets/fourplay/stage-08.webp', alt: '포플레이 내한 공연 조명 디자인' },
          { type: 'img', src: '/assets/fourplay/stage-10.webp', alt: '포플레이 앙코르 무대' }
        ]
      },
      hiromi: {
        title: 'Hiromi\'s Sonicwonder 2026 내한공연',
        desc: '마포아트센터 아트홀 맥 — 히로미 소닉원더 재즈 콘서트 조명 연출',
        tags: ['Concert', 'Jazz', 'Lighting'],
        venue: '마포아트센터',
        media: [
          { type: 'img', src: '/assets/hiromi/stage-03.webp', alt: '히로미 소닉원더 무대 전경, 블루 원형 조명', full: true },
          { type: 'img', src: '/assets/hiromi/stage-06.webp', alt: '히로미 콘서트 블루 조명 연출' },
          { type: 'img', src: '/assets/hiromi/stage-12.webp', alt: '히로미 공연 무대 전경' },
          { type: 'img', src: '/assets/hiromi/stage-15.webp', alt: '히로미 콘서트 조명 앰비언스' },
          { type: 'img', src: '/assets/hiromi/stage-21.webp', alt: '히로미 공연 마무리 전경' }
        ]
      },
      welove2022: {
        title: '위러브 2022 페스티벌',
        desc: '대형 페스티벌 무대 — 꽃과 식물 세트, 빔 조명, 무대 설치 통합 연출',
        tags: ['Festival', 'Lighting', 'Stage Setup'],
        venue: '페스티벌 현장',
        media: [
          { type: 'img', src: '/assets/welove2022/stage-01.webp', alt: '위러브 2022 꽃 장식 무대와 빔 조명', full: true },
          { type: 'img', src: '/assets/welove2022/stage-04.webp', alt: '위러브 무대 식물 세트 디자인' },
          { type: 'img', src: '/assets/welove2022/stage-08.webp', alt: '위러브 페스티벌 조명 연출' },
          { type: 'img', src: '/assets/welove2022/stage-10.webp', alt: '위러브 2022 무대 전경' },
          { type: 'img', src: '/assets/welove2022/stage-14.webp', alt: '위러브 공연 클로즈업' }
        ]
      },
      finkl: {
        title: 'JTBC 캠핑클럽 핑클 무대',
        desc: 'JTBC 캠핑클럽 — 핑클 야외 무대 조명, LED 스크린, 트러스 설치',
        tags: ['Broadcasting', 'Lighting', 'LED Screen', 'Stage Setup'],
        venue: '야외 특설 무대',
        media: [
          { type: 'img', src: '/assets/finkl/stage-01.webp', alt: 'JTBC 캠핑클럽 핑클 야외 무대, LED 스크린과 컬러풀 조명', full: true },
          { type: 'img', src: '/assets/finkl/stage-05.webp', alt: '핑클 야외 무대 조명 연출' },
          { type: 'img', src: '/assets/finkl/stage-12.webp', alt: '핑클 공연 무대 전경' },
          { type: 'img', src: '/assets/finkl/stage-20.webp', alt: '핑클 무대 조명 디자인' },
          { type: 'img', src: '/assets/finkl/stage-24.webp', alt: '캠핑클럽 무대 설치 전경' }
        ]
      },
      koreauniv: {
        title: '고려대학교 공과대학 60주년 기념행사',
        desc: '고려대학교 공과대학 60주년 — 만찬 행사 무대 조명, LED 스크린 연출',
        tags: ['Event', 'Lighting', 'LED Screen'],
        venue: '고려대학교',
        media: [
          { type: 'img', src: '/assets/korea-univ/stage-01.webp', alt: '고려대 공대 60주년 기념행사 무대 전경, 대형 LED 스크린', full: true },
          { type: 'img', src: '/assets/korea-univ/stage-04.webp', alt: '60주년 기념 무대 조명 연출' },
          { type: 'img', src: '/assets/korea-univ/stage-06.webp', alt: '고려대 행사 LED 스크린 디자인' },
          { type: 'img', src: '/assets/korea-univ/stage-10.webp', alt: '고려대 공대 60주년 행사 조명' },
          { type: 'img', src: '/assets/korea-univ/stage-14.webp', alt: '고려대 60주년 행사 전경' }
        ]
      },
      ailee: {
        title: '딩고 에일리 뮤직비디오 촬영',
        desc: '딩고 뮤직 에일리 — 스튜디오 뮤직비디오 촬영 조명, 빔 라이트 연출',
        tags: ['MV Shooting', 'Lighting', 'Broadcasting'],
        venue: '촬영 스튜디오',
        media: [
          { type: 'img', src: '/assets/ailee/stage-01.webp', alt: '에일리 뮤비 촬영, 블루 빔 조명과 카메라', full: true },
          { type: 'img', src: '/assets/ailee/stage-03.webp', alt: '딩고 에일리 촬영 무대 전경' },
          { type: 'img', src: '/assets/ailee/stage-05.webp', alt: '에일리 촬영 빔 라이트' },
          { type: 'img', src: '/assets/ailee/stage-07.webp', alt: '에일리 뮤비 촬영 전경' },
          { type: 'img', src: '/assets/ailee/stage-08.webp', alt: '에일리 뮤직비디오 조명 디자인' }
        ]
      },
      ywam: {
        title: '예수전도단 크리스마스 앨범 뮤비촬영',
        desc: '예수전도단 크리스마스 앨범 — 뮤직비디오 촬영 조명, 원형 오브제 연출',
        tags: ['MV Shooting', 'Lighting'],
        venue: '촬영 현장',
        media: [
          { type: 'img', src: '/assets/ywam/stage-01.webp', alt: '예수전도단 뮤비 촬영, 따뜻한 조명과 크리스마스 세트', full: true },
          { type: 'img', src: '/assets/ywam/stage-03.webp', alt: '크리스마스 앨범 촬영 조명 연출' },
          { type: 'img', src: '/assets/ywam/stage-07.webp', alt: '크리스마스 뮤비 조명 디자인' },
          { type: 'img', src: '/assets/ywam/stage-09.webp', alt: '예수전도단 촬영 전경' },
          { type: 'img', src: '/assets/ywam/stage-13.webp', alt: '예수전도단 뮤비 조명' }
        ]
      },
      hamchunho: {
        title: '함춘호 & 송창식 콘서트',
        desc: '부천시민회관 — 함춘호, 송창식 포크 & 재즈 콘서트 조명, LED 연출',
        tags: ['Concert', 'Lighting', 'LED Screen'],
        venue: '부천시민회관',
        media: [
          { type: 'img', src: '/assets/hamchunho/stage-03.webp', alt: '함춘호 송창식 콘서트 무대, 별 패턴 고보 조명과 LED', full: true },
          { type: 'img', src: '/assets/hamchunho/stage-04.webp', alt: '함춘호 콘서트 무대 조명 연출' },
          { type: 'img', src: '/assets/hamchunho/stage-08.webp', alt: '함춘호 콘서트 조명 디자인' },
          { type: 'img', src: '/assets/hamchunho/stage-12.webp', alt: '함춘호 송창식 공연 전경' },
          { type: 'img', src: '/assets/hamchunho/stage-15.webp', alt: '콘서트 무대 조명 앰비언스' }
        ]
      },
      woolpla: {
        title: '울플러 콘서트',
        desc: '울플러 밴드 콘서트 — 드라마틱 백라이트, 헤이즈 조명 연출',
        tags: ['Concert', 'Lighting', 'Sound'],
        venue: '공연장',
        media: [
          { type: 'img', src: '/assets/woolpla/stage-01.webp', alt: '울플러 콘서트, 실루엣 백라이트와 헤이즈', full: true },
          { type: 'img', src: '/assets/woolpla/stage-03.webp', alt: '울플러 공연 조명 디자인' },
          { type: 'img', src: '/assets/woolpla/stage-05.webp', alt: '울플러 밴드 무대' },
          { type: 'img', src: '/assets/woolpla/stage-07.webp', alt: '울플러 콘서트 조명' },
          { type: 'img', src: '/assets/woolpla/stage-08.webp', alt: '울플러 공연 전경' }
        ]
      },
      sandle: {
        title: '산들 & B1A4 Music Collection 콘서트',
        desc: 'BTOB 서은광 × B1A4 산들 — Music Collection 콘서트 조명, LED 연출',
        tags: ['Concert', 'Lighting', 'LED Screen'],
        venue: '공연장',
        media: [
          { type: 'img', src: '/assets/sandle/stage-01.webp', alt: '산들 B1A4 Music Collection 무대, 대형 LED 스크린', full: true },
          { type: 'img', src: '/assets/sandle/stage-04.webp', alt: 'B1A4 공연 LED 디자인' },
          { type: 'img', src: '/assets/sandle/stage-09.webp', alt: 'Music Collection 조명' },
          { type: 'img', src: '/assets/sandle/stage-12.webp', alt: '산들 콘서트 무대 연출' },
          { type: 'img', src: '/assets/sandle/stage-18.webp', alt: 'Music Collection 콘서트 조명' }
        ]
      },
      shakers: {
        title: '쉐이커스 캠프 페스티벌',
        desc: '쉐이커스 캠프 — 토탈 시스템 운영 (조명, 음향, LED, 무대 설치)',
        tags: ['Festival', 'Lighting', 'Sound', 'Stage Setup'],
        venue: '페스티벌 현장',
        media: [
          { type: 'img', src: '/assets/shakers/stage-01.webp', alt: '쉐이커스 캠프 무대 전경, 퍼플 빔 조명과 관객', full: true },
          { type: 'img', src: '/assets/shakers/stage-02.webp', alt: '쉐이커스 캠프 무대 조명' },
          { type: 'img', src: '/assets/shakers/stage-03.webp', alt: '쉐이커스 페스티벌 전경' },
          { type: 'img', src: '/assets/shakers/stage-05.webp', alt: '쉐이커스 캠프 무대' },
          { type: 'img', src: '/assets/shakers/stage-06.webp', alt: '쉐이커스 캠프 공연 전경' }
        ]
      },
      oktopjazz: {
        title: '옥탑재즈 — 아트센터 인천',
        desc: '인천 아트센터 옥탑재즈 2024-2026 — 재즈 공연 무대 조명 연출',
        tags: ['Concert', 'Jazz', 'Lighting'],
        venue: '아트센터 인천',
        media: [
          { type: 'img', src: '/assets/oktopjazz/stage-01.webp', alt: '옥탑재즈 무대, 레드 고보 패턴 조명과 밴드', full: true },
          { type: 'img', src: '/assets/oktopjazz/stage-03.webp', alt: '인천 아트센터 재즈 공연' },
          { type: 'img', src: '/assets/oktopjazz/stage-05.webp', alt: '옥탑재즈 공연 전경' },
          { type: 'img', src: '/assets/oktopjazz/stage-07.webp', alt: '인천 옥탑재즈 조명' },
          { type: 'img', src: '/assets/oktopjazz/stage-08.webp', alt: '옥탑재즈 밴드 공연' }
        ]
      }
    };
    const projectOrder = ['dominick', 'dujeonku', 'kanoimiyu', 'hiromi', 'fourplay', 'sandle', 'finkl', 'welove2022', 'koreauniv', 'ailee', 'ywam', 'hamchunho', 'woolpla', 'shakers', 'oktopjazz'];

    const productData = {
      lighting: {
        title: '조명 렌탈 패키지',
        subtitle: 'CH 01 — Stage Lighting',
        icon: '\u{1F4A1}',
        products: [
          { name: 'PAR LIGHT PACKAGE 1', desc: '기본은 강하게, 연출은 섬세하게. 파라이트 8대면 무대 분위기 완성.\n버스킹 / 소규모 행사 추천', price: '500,000원', icon: '\u{1F506}', image: '/assets/lighting-packages/1.webp', specs: ['조명감독 1인 상주', '기본 조명콘솔 포함', '딤머 / 분배전원 포함', '조명스탠드 1조(소형)', '1일 기준, 전일설치시 50% 비용 추가'] },
          { name: '소규모 조명렌탈 패키지', desc: '기본 무빙 8대 구성으로 \'공연느낌\' 완성\n버스킹 / 기업행사 / 학교행사 / 소규모 공연 추천', price: '600,000원', icon: '\u{1F526}', image: '/assets/lighting-packages/2.webp', specs: ['조명감독 1인 상주', '기본 조명콘솔 포함', '딤머 / 분배전원 포함', '특수효과 포그머신 포함', '1일 기준, 전일설치시 50% 비용 추가'] },
          { name: '소규모 조명 렌탈 패키지B', desc: '무대기본 조명 + 컬러 + 빔연출 "균형형"\n학교행사 / 기업행사 / 미니콘서트 / 소규모 공연 추천', price: '800,000원', icon: '\u2728', image: '/assets/lighting-packages/3.webp', specs: ['조명감독 1인 상주', '기본 조명콘솔 포함', '딤머 / 포그머신 포함', '조명스탠드 1조(소형)', '#조명스탠드는 현장상황에 따라 사용 유무를 결정할 수 있습니다.', '1일 기준, 전일설치시 50% 비용 추가'] },
          { name: '기본조명 렌탈 패키지A', desc: '16대 무빙 구성 본격 무대 연출가능\n학교행사 / 기업행사 / 콘서트 / 중규모 공연 추천', price: '1,000,000원', icon: '\u{1F526}', image: '/assets/lighting-packages/4.webp', specs: ['조명감독 1인 보조감독 1인', '기본 조명콘솔 포함', '딤머 / 포그머신 포함', '조명스탠드 1조(대형)', '#빔무빙 8대, 워시무빙 8대, LED파 4대', '#조명스탠드는 현장상황에 따라 사용 유무를 결정할 수 있습니다.', '1일 기준, 전일설치시 50% 비용 추가'] },
          { name: '기본조명 렌탈 패키지B', desc: '16대 무빙, 스트로브 구성 임팩트 추가형\n학교행사 / 기업행사 / 콘서트 / 중규모 공연 추천', price: '1,200,000원', icon: '\u{1F526}', image: '/assets/lighting-packages/5.webp', specs: ['조명감독 1인 보조감독 1인', '기본 조명콘솔 포함', '딤머 / 포그머신 포함', '조명스탠드 1조(대형)', '#빔무빙 8대, 워시무빙 8대, LED파 4대, 스트로브 4대', '#조명스탠드는 현장상황에 따라 사용 유무를 결정할 수 있습니다.', '1일 기준, 전일설치시 50% 비용 추가'] },
          { name: '중형 조명 렌탈 패키지A — BEST 조명패키지1', desc: '20대 무빙, 스트로브 BEST 조명패키지\n대학교행사 / 기업행사 / 콘서트 / 지역축제 추천', price: '1,500,000원', icon: '\u{1F31F}', image: '/assets/lighting-packages/6.webp', specs: ['조명감독 1인 보조감독 1인', '기본 조명콘솔 포함', '딤머 / 포그머신 포함', '조명스탠드 1조(대형)', '#빔무빙 12대, 워시무빙 8대, LED파 8대, 스트로브 4대', '#조명스탠드는 현장상황에 따라 사용 유무를 결정할 수 있습니다.', '1일 기준, 전일설치시 50% 비용 추가'] },
          { name: '중형 조명 렌탈 패키지B — BEST 조명패키지2', desc: '인물강조 + 감성연출 특화 16대 무빙(스팟무빙 8대)\n기업행사 / 재즈공연 / 클래식공연 / 종교행사 추천', price: '1,500,000원', icon: '\u{1F31F}', image: '/assets/lighting-packages/7.webp', specs: ['조명감독 1인 보조감독 1인', '기본 조명콘솔 포함', '딤머 / 포그머신 포함', '조명스탠드 1조(대형)', '#스팟무빙 8대, 워시무빙 8대, LED파 8대, 스트로브 4대', '#조명스탠드는 현장상황에 따라 사용 유무를 결정할 수 있습니다.', '1일 기준, 전일설치시 50% 비용 추가'] },
          { name: '중형 조명 렌탈 패키지C — BEST 조명패키지3', desc: '공연 무대 완성 세트 24대 무빙(스팟무빙 12대)\n중형콘서트 / 재즈공연 / 클래식공연 / 종교행사 추천', price: '1,800,000원', icon: '\u{1F31F}', image: '/assets/lighting-packages/8.webp', specs: ['조명감독 1인 보조감독 2인', '기본 조명콘솔 포함', '딤머 / 포그머신 포함', '조명스탠드 1조(대형)', '#스팟무빙 12대, 워시무빙 12대, LED파 8대, 스트로브 4대', '#조명스탠드는 현장상황에 따라 사용 유무를 결정할 수 있습니다.', '1일 기준, 전일설치시 50% 비용 추가'] },
          { name: '대형 조명 렌탈 패키지A — BEST 조명패키지4', desc: '대형 콘서트 무대 세트 24대 무빙(스팟무빙 12대)\n대형콘서트 / 지역 메인축제 / 갈라쇼 / 대형 종교행사 추천', price: '2,000,000원', icon: '\u{1F525}', image: '/assets/lighting-packages/9.webp', specs: ['조명감독 1인 보조감독 2인', '기본 조명콘솔 포함', '딤머 / 포그머신 포함', '조명스탠드 1조(대형)', '#스팟무빙 12대, 워시무빙 12대, LED파 8대, 스트로브 12대', '#조명스탠드는 현장상황에 따라 사용 유무를 결정할 수 있습니다.', '1일 기준, 전일설치시 50% 비용 추가'] },
          { name: '대형 조명 렌탈 패키지B — BEST 조명패키지5', desc: '대형 페스티벌 무대 세트 28대 무빙(스팟무빙 16대)\n대형콘서트 / 지역 메인축제 / 갈라쇼 / 대형 종교행사 추천', price: '2,300,000원', icon: '\u{1F525}', image: '/assets/lighting-packages/10.webp', specs: ['조명감독 1인 보조감독 2인', '기본 조명콘솔 포함', '딤머 / 포그머신 포함', '조명스탠드 2조(대형)', '#스팟무빙 16대, 워시무빙 12대, LED파 8대, 스트로브 12대', '#조명스탠드는 현장상황에 따라 사용 유무를 결정할 수 있습니다.', '1일 기준, 전일설치시 50% 비용 추가'] },
          { name: '추가 옵션 패키지A — 레트로라이트', desc: '감성 + 공간체움 레트로라이트 6대 스텐드형 대형라이트\n재즈공연 / 클래식 / 뮤직비디오 / 종교행사 추천', price: '300,000원', icon: '\u{1F31F}', image: '/assets/lighting-packages/11.webp', specs: ['설치 감독 1인', '기본 조명콘솔 포함', '대형 파라이트 6개', '조명스탠드 6개(소형)', '* 조명패키지 선택시 추가로 선택가능한 옵션', '#레트로라이트만 단독으로 렌탈시 20만원 추가비용 발생'] },
          { name: '추가 옵션 패키지B — 레트로 바라이트', desc: '세워도 멋있고 눕혀도 멋있고 레트로 바라이트\n락 / 힙합 / 재즈공연 / 클래식 / 대학행사 / 종교행사 추천', price: '300,000원', icon: '\u{1F31F}', image: '/assets/lighting-packages/12.webp', specs: ['설치 감독 1인', '기본 조명콘솔 포함', '스텐드형 바라이트 8개', '조명지지대 8개', '* 조명패키지 선택시 추가로 선택가능한 옵션', '#레트로 바라이트만 단독으로 렌탈시 20만원 추가비용 발생'] },
          { name: '추가 옵션 패키지C — 레트로 라이트 / 바라이트 패키지', desc: '감성 + 임팩트 공연 퀄리티 업그레이드\n락 / 힙합 / 재즈공연 / 클래식 / 대학행사 / 종교행사 추천', price: '400,000원', icon: '\u{1F31F}', image: '/assets/lighting-packages/13.webp', specs: ['설치 감독 1인', '기본 조명콘솔 포함', '레트로 라이트 6개', '레트로 바라이트 8개', '* 조명패키지 선택시 추가로 선택가능한 옵션', '#레트로 패키지만 단독으로 렌탈시 20만원 추가비용 발생'] }
        ]
      },
      led: {
        title: 'LED 스크린 장비', subtitle: 'CH 02 — LED Screen', icon: '\u{1F4FA}',
        products: [
          { name: 'LED 스크린 P2.6', desc: '고해상도 실내 LED 패널, 근거리 시청 최적화', price: '별도 견적', icon: '\u{1F5B5}' },
          { name: 'LED 스크린 P3.9', desc: '실내외 겸용 LED 패널, 다용도 활용', price: '별도 견적', icon: '\u{1F4BB}' },
          { name: 'LED 스크린 P4.8', desc: '야외 대형 LED 패널', price: '별도 견적', icon: '\u{1F4F1}' },
          { name: '미디어 서버', desc: '영상 콘텐츠 송출 및 제어 시스템', price: '렌탈 문의', icon: '\u{1F5A5}' }
        ]
      },
      sound: {
        title: '무대 음향 렌탈 패키지', subtitle: 'CH 03 — Stage Sound', icon: '\u{1F3B5}',
        products: [
          { name: '음향 렌탈 패키지 A', desc: '공연 패키지 700~1000명 커버 | 타소 T2 라인어레이 / 젠하이져 무선마이크 패키지\n락 / 힙합 / 재즈공연 / 클래식 / 대학행사 / 종교행사 추천', price: '1,500,000원', originalPrice: '1,800,000원', icon: '\u{1F50A}', image: '/assets/sound-packages/package-a.webp', specs: ['마이다스 M32R 음향콘솔', '타소 T2 라인어레이', '젠하이져 EWD 무선마이크 8개 / 벨트팩 6개', '무선인이어 PMS300 4개 또는 젠하이져 SR2050 4개', 'FIX 12인치 동축모니터 스피커 6개', '음향감독 1인 / 보조감독 1인', '음향콘솔 M32 / 무선마이크 8개 / 악기마이크 FULLSET', '스피커스텐드 1조', '마이크라인 및 전용전기팩 및 소모품 일체 포함'] },
          { name: '음향 렌탈 패키지 B', desc: '공연 패키지 1000~1500명 커버 | 타소 T2 라인어레이 / 젠하이져 무선마이크 패키지\n락 / 힙합 / 재즈공연 / 클래식 / 대학행사 / 종교행사 추천', price: '1,800,000원', originalPrice: '2,000,000원', icon: '\u{1F50A}', image: '/assets/sound-packages/package-b.webp', specs: ['마이다스 M32R 음향콘솔', '타소 T2 라인어레이', '젠하이져 EWD 무선마이크 8개 / 벨트팩 6개', '무선인이어 PMS300 4개 또는 젠하이져 SR2050 4개', 'FIX 12인치 동축모니터 스피커 6개', '딜레이 스피커 1조', '음향감독 1인 / 보조감독 1인', '음향콘솔 M32 / 무선마이크 8개 / 악기마이크 FULLSET', '스피커스텐드 1조'] },
          { name: '음향 렌탈 패키지 C', desc: '공연 패키지 300~700명 커버 | 타소 T2 라인어레이 / 젠하이져 무선마이크 패키지\n락 / 힙합 / 재즈공연 / 클래식 / 대학행사 / 종교행사 추천', price: '1,200,000원', originalPrice: '1,500,000원', icon: '\u{1F50A}', image: '/assets/sound-packages/package-c.webp', specs: ['마이다스 M32R 음향콘솔', '타소 T2 라인어레이 1조', '젠하이져 EWD 무선마이크 8개 / 벨트팩 6개', '무선인이어 PMS300 2개 또는 젠하이져 SR2050 2개', 'FIX 12인치 동축모니터 스피커 6개', '음향감독 1인 / 보조감독 1인', '음향콘솔 M32 / 무선마이크 8개 / 악기마이크 FULLSET', '스피커스텐드 1조'] },
          { name: '음향 렌탈 패키지 D', desc: '공연 패키지 300명 커버 | 타소 컬럼어레이 / 젠하이져 무선마이크 패키지\n세미나 / 힙합 / 재즈공연 / 클래식 / 학교행사 / 종교행사 추천', price: '800,000원', originalPrice: '1,200,000원', icon: '\u{1F3B6}', image: '/assets/sound-packages/package-d.webp', specs: ['마이다스 M32R 음향콘솔', '타소 브릴리언트 컬럼어레이 1조', '젠하이져 EWD 무선마이크 6개', '무선인이어 PMS300 2개 또는 젠하이져 SR2050 2개', 'FIX 12인치 동축모니터 스피커 4개', '음향감독 1인 / 보조감독 1인', '음향콘솔 M32 / 무선마이크 6개 / 악기마이크 FULLSET', '스피커스텐드 1조'] },
          { name: '학교축제 패키지 A — 공연무대 완성세트', desc: '음향장비 / 악기세트 / 조명장비 통합\n지역축제 / 밴드공연 / 학교행사 / 종교행사 추천', price: '2,500,000원', originalPrice: '3,000,000원', icon: '\u{1F3B8}', image: '/assets/sound-packages/school-a.webp', specs: ['음향콘솔 M32R / 무선마이크 8개', '타소 T2 라인어레이 1조 / 모니터 스피커 6개', '무선인이어 2개', '빔무빙라이트 8개 / 워시무빙라이트 8개', '스트로브 4개 / 파라이트 8개(화이트용)', '조명콘솔 타이거터치 / 조명스텐드 2개', '기타앰프 / 베이스앰프 / 건반 PC2X / 리얼드럼세트', '음향감독 1인 보조감독 1인 / 조명감독 1인 보조감독 1인', '악기마이크 / 포그머신 포함', '당일행사 기준 / 전날 설치 및 리허설시 60만원 추가 (인건비)'] },
          { name: '학교축제 패키지 B — 음향 조명 패키지', desc: '음향장비 / 조명장비 통합\n지역축제 / 콘서트 / 학교행사 / 종교행사 추천', price: '2,200,000원', originalPrice: '2,500,000원', icon: '\u{1F3A4}', image: '/assets/sound-packages/school-b.webp', specs: ['음향콘솔 M32R / 무선마이크 8개', '타소 T2 라인어레이 / 모니터 스피커 6개', '무선인이어 4개 SURE PSM300', '빔무빙라이트 8개 / 워시무빙라이트 8개', 'LED 스트로브 8개 / 파라이트 8개(화이트용)', '조명콘솔 타이거터치 / 조명스텐드 2개', '음향감독 1인 보조감독 1인 / 조명감독 1인 보조감독 1인', '악기마이크 / 포그머신 포함', '당일행사 기준 / 전날 설치 및 리허설시 60만원 추가 (인건비)'] }
        ]
      },
      broadcast: {
        title: '중계/송출 장비', subtitle: 'CH 04 — Broadcasting', icon: '\u{1F4F9}',
        products: [
          { name: '멀티캠 시스템', desc: '다중 카메라 실시간 스위칭 시스템', price: '렌탈 문의', icon: '\u{1F3AC}' },
          { name: '라이브 스트리밍 장비', desc: '온라인 송출 인코더 & 스위처', price: '렌탈 문의', icon: '\u{1F4E1}' },
          { name: '프로페셔널 카메라', desc: '방송용 캠코더', price: '렌탈 문의', icon: '\u{1F4F7}' }
        ]
      },
      sfx: {
        title: '특수 효과 장비', subtitle: 'CH 05 — Special Effects', icon: '\u{1F386}',
        products: [
          { name: 'CO2 제트', desc: '무대 특수효과 CO2 분사기', price: '렌탈 문의', icon: '\u{1F4A8}' },
          { name: '불꽃 머신', desc: '스파크 & 화염 연출 장비', price: '렌탈 문의', icon: '\u{1F525}' },
          { name: '컨페티 머신', desc: '색종이 발사기', price: '렌탈 문의', icon: '\u{1F389}' },
          { name: '레이저 시스템', desc: '공연용 레이저 연출 장비', price: '렌탈 문의', icon: '\u{1F4A0}' },
          { name: '헤이즈 머신', desc: '조명 빔 가시화 연무기', price: '렌탈 문의', icon: '\u{1F32B}' }
        ]
      },
      stage: {
        title: '무대 설치', subtitle: 'CH 06 — Stage Setup', icon: '\u{1F3D7}',
        products: [
          { name: '무대 구조물', desc: '맞춤형 무대 제작 및 설치', price: '별도 견적', icon: '\u{1F3D7}' },
          { name: '트러스 시스템', desc: '조명·음향 설치를 위한 트러스 구조물', price: '렌탈 문의', icon: '\u{1F529}' },
          { name: '리깅 시스템', desc: '장비 공중 설치 및 안전 리깅', price: '렌탈 문의', icon: '\u{26D3}' },
          { name: '백드롭 / 무대막', desc: '무대 배경막 및 커튼 설치', price: '렌탈 문의', icon: '\u{1F3AD}' }
        ]
      },
      install: {
        title: '음향 조명 시공', subtitle: 'CH 07 — Installation', icon: '\u{1F3D7}',
        products: [
          { name: '교회 음향 시공', desc: '예배 환경에 최적화된 음향 시스템 설계 및 시공', price: '현장 견적', icon: '\u{26EA}' },
          { name: '교회 조명 시공', desc: '예배·공연 겸용 조명 시스템 설계 및 설치', price: '현장 견적', icon: '\u{1F4A1}' },
          { name: '대강당 음향 시스템', desc: '강연·세미나·공연 겸용 대강당 음향 구축', price: '현장 견적', icon: '\u{1F3DB}' },
          { name: '공연장 조명 시스템', desc: '공연장 전용 조명 시스템 설계 및 설치', price: '현장 견적', icon: '\u{1F3AD}' },
          { name: '학교 강당 음향 조명', desc: '학교 강당 음향·조명 통합 시공', price: '현장 견적', icon: '\u{1F3EB}' },
          { name: 'LED 스크린 시공', desc: 'LED 스크린 화면 설계 및 영구 설치', price: '현장 견적', icon: '\u{1F4FA}' },
          { name: '라이브예배 영상 시스템', desc: '실시간 중계·송출 영상 시스템 구축', price: '현장 견적', icon: '\u{1F4F9}' },
          { name: '기업 세미나 음향', desc: '기업 회의실·세미나룸 음향 시스템 시공', price: '현장 견적', icon: '\u{1F3E2}' }
        ]
      }
    };

    const teamData = [
      { ix: '01', name: '무대 공작소', person: '안윤근 대표', role: '무대 조명, 토탈 시스템, 총괄 디렉터', group: 'tech' },
      { ix: '02', name: 'LUXGRID', person: '안준형 부장', role: 'LED 스크린 렌탈, 시공 및 납품', group: 'tech' },
      { ix: '03', name: 'CHI', person: '임철하 실장', role: '무대 조명, LED 스크린 렌탈', group: 'tech' },
      { ix: '04', name: 'WITH J', person: '이종환 매니저', role: '온맘시어터 매니저, 무대 조명, LED', group: 'tech' },
      { ix: '05', name: 'HANVIT MEDIATECH', person: '박영서 팀장', role: '무대 조명, 음향, LED, 설계 및 도면 제작', group: 'tech' },
      { ix: '06', name: 'MEDIACUBE', person: '윤주영 팀장', role: '무대 조명, 음향, 방송, 영상 디자인', group: 'tech' },
      { ix: '07', name: 'CONNECTED HK', person: '이환희 팀장', role: '무대 연출, 행사 기획, PM, 영업, 마케팅', group: 'planning' },
      { ix: '08', name: '소리쟁이', person: '정지원 팀장', role: '무대 음향, 음향 시공', group: 'tech', nameStyle: 'font-size:clamp(20px,2.2vw,30px)' },
      { ix: '09', name: 'INMATE', person: '박주향 대표', role: '공연 기획, 아티스트 매니지먼트', group: 'planning' }
    ];

    const serviceChannels = [
      { key: 'lighting', num: 'CH 01', ko: '무대 조명', en: 'Stage Lighting', desc: '무빙헤드, PAR, 스팟, 팔로우 — 무대 위를 빛으로 디자인합니다', iconSvg: '<path d="M22 6 L14 20 L18 20 L18 28 L26 28 L26 20 L30 20 Z" stroke-width="1.2" opacity="0.6"/><line x1="19" y1="32" x2="25" y2="32" stroke-width="1" opacity="0.4"/><line x1="20" y1="35" x2="24" y2="35" stroke-width="1" opacity="0.3"/><circle cx="22" cy="16" r="2" fill="currentColor" opacity="0.3" stroke="none"/>' },
      { key: 'led', num: 'CH 02', ko: 'LED 스크린', en: 'LED Screen', desc: '고해상도 LED 월, 미디어 서버, 영상 송출 시스템', iconSvg: '<rect x="8" y="12" width="28" height="20" rx="1.5" stroke-width="1.2" opacity="0.5"/><rect x="12" y="16" width="8" height="5" fill="currentColor" opacity="0.15" stroke="none"/><rect x="24" y="16" width="8" height="5" fill="currentColor" opacity="0.1" stroke="none"/><rect x="12" y="24" width="8" height="5" fill="currentColor" opacity="0.1" stroke="none"/><rect x="24" y="24" width="8" height="5" fill="currentColor" opacity="0.15" stroke="none"/>' },
      { key: 'sound', num: 'CH 03', ko: '무대 음향', en: 'Stage Sound', desc: '라인 어레이, 모니터, 무선 마이크, 디지털 믹서 운영', iconSvg: '<circle cx="22" cy="22" r="10" stroke-width="1.2" opacity="0.4"/><circle cx="22" cy="22" r="6" stroke-width="1" opacity="0.3"/><circle cx="22" cy="22" r="2.5" fill="currentColor" opacity="0.35" stroke="none"/>' },
      { key: 'broadcast', num: 'CH 04', ko: '중계/송출', en: 'Broadcasting', desc: '멀티캠 촬영, 실시간 스위칭, 라이브 스트리밍 송출', iconSvg: '<circle cx="18" cy="22" r="8" stroke-width="1.2" opacity="0.4"/><circle cx="18" cy="22" r="3" stroke-width="0.8" opacity="0.3"/><rect x="24" y="18" width="14" height="8" rx="1" stroke-width="1" opacity="0.4"/>' },
      { key: 'sfx', num: 'CH 05', ko: '특수 효과', en: 'Special Effects', desc: 'CO2, 불꽃, 컨페티, 레이저 — 무대의 순간을 극대화합니다', iconSvg: '<path d="M22 8 L25 18 L22 16 L19 18 Z" fill="currentColor" opacity="0.15" stroke="none"/><path d="M22 8 L28 20" stroke-width="0.8" opacity="0.3"/><path d="M22 8 L16 20" stroke-width="0.8" opacity="0.3"/><line x1="22" y1="22" x2="22" y2="36" stroke-width="1.2" opacity="0.3"/><circle cx="22" cy="12" r="3.5" stroke-width="1.2" opacity="0.4"/>' },
      { key: 'stage', num: 'CH 06', ko: '무대 설치', en: 'Stage Setup', desc: '무대 구조물 설치, 트러스, 리깅, 안전 관리까지 책임집니다', iconSvg: '<rect x="10" y="24" width="24" height="4" rx="1" stroke-width="1.2" opacity="0.5"/><line x1="14" y1="28" x2="14" y2="34" stroke-width="1.2" opacity="0.4"/><line x1="30" y1="28" x2="30" y2="34" stroke-width="1.2" opacity="0.4"/><line x1="22" y1="14" x2="22" y2="24" stroke-width="1" opacity="0.3"/><line x1="16" y1="18" x2="28" y2="18" stroke-width="1" opacity="0.3"/>' },
      { key: 'install', num: 'CH 07', ko: '음향 조명 시공', en: 'Installation', desc: '교회·강당·공연장 음향 조명 설계 시공, LED 스크린 시공까지', iconSvg: '<rect x="10" y="14" width="24" height="16" rx="2" stroke-width="1.2" opacity="0.5"/><line x1="22" y1="30" x2="22" y2="36" stroke-width="1.2" opacity="0.4"/><line x1="16" y1="36" x2="28" y2="36" stroke-width="1" opacity="0.3"/><circle cx="22" cy="22" r="4" stroke-width="1" opacity="0.4"/><line x1="22" y1="18" x2="22" y2="26" stroke-width="0.8" opacity="0.3"/><line x1="18" y1="22" x2="26" y2="22" stroke-width="0.8" opacity="0.3"/>' }
    ];

    /* =====================================================
       SPA ROUTER
    ===================================================== */
    const routes = {};
    const app = document.getElementById('app');

    function escHtml(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

    function updateMeta(title, desc) {
      document.title = title;
      const url = 'https://stage-workshop.vercel.app' + location.pathname;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && desc) metaDesc.setAttribute('content', desc);
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc && desc) ogDesc.setAttribute('content', desc);
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', url);
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', title);
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc && desc) twDesc.setAttribute('content', desc);
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute('href', url);
    }

    // Dynamic BreadcrumbList JSON-LD
    function updateBreadcrumbSchema(items) {
      var existing = document.getElementById('breadcrumbSchema');
      if (existing) existing.remove();
      if (!items || items.length < 2) return;
      var baseUrl = 'https://stage-workshop.vercel.app';
      var schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map(function(item, i) {
          return {
            "@type": "ListItem",
            "position": i + 1,
            "name": item.label,
            "item": baseUrl + item.href
          };
        })
      };
      var script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'breadcrumbSchema';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    function updateActiveNav(path) {
      document.querySelectorAll('.nav-links a[data-link], .mobile-menu a[data-link]').forEach(a => {
        const href = a.getAttribute('href');
        if (href === '/contact' && a.classList.contains('nav-cta')) return;
        if (href === '/contact' && a.classList.contains('mobile-cta')) return;
        const isActive = path === href || (href !== '/' && path.startsWith(href));
        a.classList.toggle('active', isActive);
      });
    }

    function renderBreadcrumb(items) {
      updateBreadcrumbSchema(items);
      return '<nav class="breadcrumb" aria-label="경로">' + items.map((item, i) => {
        if (i === items.length - 1) return '<span class="bc-current">' + escHtml(item.label) + '</span>';
        return '<a href="' + item.href + '" data-link>' + escHtml(item.label) + '</a><span class="bc-sep">/</span>';
      }).join('') + '</nav>';
    }

    function channelCard(ch, delay) {
      return '<div class="ch rv d' + delay + '" role="listitem" data-category="' + ch.key + '" tabindex="0"><div class="ch-num">' + ch.num + '</div><svg class="ch-icon" viewBox="0 0 44 44" fill="none" stroke="currentColor" aria-hidden="true">' + ch.iconSvg + '</svg><div class="ch-ko">' + ch.ko + '</div><div class="ch-en">' + ch.en + '</div><div class="ch-desc">' + ch.desc + '</div><div class="ch-hint">클릭하여 장비 보기</div><div class="fader" aria-hidden="true"></div></div>';
    }

    function contactFormHtml() {
      return '<p style="text-align:center;color:var(--text2);font-size:var(--fs-body);margin-bottom:32px;">평균 <span style="color:var(--gold);font-weight:700;">2시간 이내</span> 전화 또는 이메일로 회신드립니다</p>' +
        '<form class="contact-form" id="contactForm" action="https://api.web3forms.com/submit" method="POST">' +
        '<input type="hidden" name="access_key" value="b5ae2226-54fc-4696-be68-2f8d99f62055">' +
        '<input type="hidden" name="subject" value="[무대 공작소] 새 프로젝트 문의">' +
        '<input type="hidden" name="from_name" value="무대 공작소 웹사이트">' +
        '<input type="hidden" name="redirect" value="https://stage-workshop.vercel.app/contact">' +
        '<input type="checkbox" name="botcheck" style="display:none">' +
        '<div class="form-group"><label for="cf-name" class="form-label">이름 / 회사명 <span style="color:var(--gold);">*</span></label><input type="text" id="cf-name" name="name" placeholder="예: 홍길동 또는 ABC 이벤트" required /></div>' +
        '<div class="form-group"><label for="cf-phone" class="form-label">전화번호 <span style="color:var(--gold);">*</span></label><input type="tel" id="cf-phone" name="phone" placeholder="예: 010-1234-5678" required /></div>' +
        '<div class="form-group"><label for="cf-email" class="form-label">이메일</label><input type="email" id="cf-email" name="email" placeholder="예: contact@company.com" /></div>' +
        '<div class="form-group"><label for="cf-event" class="form-label">행사 유형 <span style="color:var(--gold);">*</span></label><select id="cf-event" name="event_type" required><option value="">선택하세요</option><option value="콘서트">콘서트 / 내한공연</option><option value="학교축제">학교축제</option><option value="야외행사">야외행사 / 페스티벌</option><option value="기업행사">기업행사 / 세미나</option><option value="교회행사">교회 / 종교 행사</option><option value="방송촬영">방송 촬영 / MV</option><option value="시공">음향 조명 시공</option><option value="기타">기타</option></select></div>' +
        '<div class="form-group"><label for="cf-date" class="form-label">행사 예정일</label><input type="date" id="cf-date" name="event_date" /></div>' +
        '<div class="form-group"><label for="cf-scale" class="form-label">예상 규모</label><select id="cf-scale" name="scale"><option value="">선택하세요</option><option value="100명 이하">100명 이하</option><option value="100-500명">100~500명</option><option value="500-1000명">500~1,000명</option><option value="1000명 이상">1,000명 이상</option></select></div>' +
        '<div class="form-group full"><label class="form-label">필요한 서비스 (복수 선택)</label>' +
        '<div class="service-checkboxes">' +
        '<label><input type="checkbox" name="services" value="lighting"><span>무대 조명</span></label>' +
        '<label><input type="checkbox" name="services" value="led"><span>LED 스크린</span></label>' +
        '<label><input type="checkbox" name="services" value="sound"><span>무대 음향</span></label>' +
        '<label><input type="checkbox" name="services" value="broadcast"><span>중계/송출</span></label>' +
        '<label><input type="checkbox" name="services" value="sfx"><span>특수 효과</span></label>' +
        '<label><input type="checkbox" name="services" value="stage"><span>무대 설치</span></label>' +
        '<label><input type="checkbox" name="services" value="install"><span>음향 조명 시공</span></label>' +
        '</div></div>' +
        '<div class="form-group"><label for="cf-budget" class="form-label">예상 예산</label><select id="cf-budget" name="budget"><option value="">선택하세요</option><option value="50만원 미만">50만원 미만</option><option value="50-100만원">50~100만원</option><option value="100-200만원">100~200만원</option><option value="200-500만원">200~500만원</option><option value="500만원 이상">500만원 이상</option><option value="상담 필요">상담 후 결정</option></select></div>' +
        '<div class="form-group"><label for="cf-venue" class="form-label">행사 장소</label><input type="text" id="cf-venue" name="venue" placeholder="예: KBS 아레나, 학교 강당" /></div>' +
        '<div class="form-group full"><label for="cf-message" class="form-label">프로젝트 상세</label><textarea id="cf-message" name="message" placeholder="필요한 연출, 특별 요청사항 등 자유롭게 적어주세요" rows="4"></textarea></div>' +
        '<div class="form-group full" style="margin-top:8px;"><label style="display:flex;align-items:flex-start;gap:10px;font-size:var(--fs-small);cursor:pointer;color:var(--text2);"><input type="checkbox" name="agree_privacy" required style="margin-top:3px;flex-shrink:0;"><span>개인정보 수집 및 이용에 동의합니다 <span style="color:var(--gold);">*</span></span></label></div>' +
        '<button class="btn btn-primary" id="submitCta" type="submit" style="grid-column:1/-1;justify-self:center;margin-top:8px;">무료 견적 받기<svg viewBox="0 0 16 16"><path d="M1 8h13M10 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
        '</form>' +
        '<div class="form-success" id="formSuccess"><div class="check-circle"><svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 7" stroke-linecap="round" stroke-linejoin="round"/></svg></div><p>문의가 접수되었습니다</p><small>평균 2시간 이내 응답드립니다</small><div style="margin-top:20px;"><a href="tel:+8201077370387" style="display:inline-flex;align-items:center;gap:8px;color:var(--gold);text-decoration:none;font-size:var(--fs-body);font-weight:600;letter-spacing:0.04em;padding:10px 20px;border:1px solid rgba(240,220,160,0.2);border-radius:var(--radius-full);transition:all 0.3s;">급한 문의는 전화로 — 010-7737-0387</a></div></div>';
    }

    function footerHtml() {
      return '<footer role="contentinfo">' +
        '<div class="footer-company" onclick="navigateTo(\'/\')">무대 공작소</div>' +
        '<div class="footer-subtitle">STAGE WORKS</div>' +
        '<div class="footer-phone"><a href="tel:+8201077370387">010-7737-0387</a></div>' +
        '<div class="footer-nav">' +
        '<a href="/about" data-link>소개</a>' +
        '<a href="/services" data-link>서비스</a>' +
        '<a href="/portfolio" data-link>프로젝트</a>' +
        '<a href="/team" data-link>파트너</a>' +
        '<a href="/contact" data-link>문의</a>' +
        '</div>' +
        '<div class="footer-bottom"><span>&copy; 2026 무대 공작소</span><span style="opacity:0.3;font-size:10px;">&middot;</span><span>Seoul, Korea</span></div>' +
        '</footer>';
    }

    /* === PAGE TEMPLATES === */

    // HOME
    routes['/'] = function() {
      updateMeta('무대 조명 음향 렌탈 · LED 스크린 · 시공 | 무대공작소 조명음향렌탈연합', '무대공작소 조명음향렌탈연합 — 콘서트·내한공연·야외행사·학교축제 음향 조명 렌탈, 교회·강당·공연장 시공, 자체 공연장 운영. 지금 바로 견적을 받아보세요.');
      updateBreadcrumbSchema(null);
      return '<section class="hero" id="hero" aria-label="메인 히어로">' +
        '<div class="hero-slides" aria-hidden="true"><div class="hero-slide active" style="background-image:url(/assets/hiromi/stage-03.webp)"></div><div class="hero-slide" style="background-image:url(/assets/dominick/new-01.webp)"></div></div>' +
        '<div class="hero-beam" aria-hidden="true"></div><div class="hero-beam2" aria-hidden="true"></div><div class="hero-beam3" aria-hidden="true"></div><div class="hero-beam4" aria-hidden="true"></div><div class="hero-beam5" aria-hidden="true"></div>' +
        '<h1 class="hero-title"><span class="hero-word"><span class="char">S</span><span class="char">T</span><span class="char">A</span><span class="char">G</span><span class="char">E</span></span><span class="hero-word"><span class="char">W</span><span class="char hero-o">O<span class="hero-o-dot"></span><span class="hero-o-ray-h"></span><span class="hero-o-ray-v"></span></span><span class="char">R</span><span class="char">K</span><span class="char">S</span></span></h1>' +
        '<div class="hero-line"></div>' +
        '<p class="hero-sub">무대 공작소</p>' +
        '<p class="hero-tag" id="heroTag">당신의 무대, 우리가 완성합니다</p>' +
        '<a href="/contact" data-link class="hero-cta">무료 견적 받기<svg viewBox="0 0 16 16"><path d="M1 8h12M9 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round"/></svg></a>' +
        '<div class="hero-caption" id="heroCaption">Hiromi Sonicwonder 2026 — 마포아트센터</div>' +
        '<div class="hero-scroll" aria-hidden="true"><span>Scroll</span><div class="tick"></div></div>' +
        '</section>' +

        '<div class="marquee-wrap" aria-hidden="true"><div class="marquee-track">' +
        '<span>무대조명</span><span class="dot">&bull;</span><span>LED스크린</span><span class="dot">&bull;</span><span>음향시스템</span><span class="dot">&bull;</span><span>라이브중계</span><span class="dot">&bull;</span><span>특수효과</span><span class="dot">&bull;</span><span>콘서트</span><span class="dot">&bull;</span><span>페스티벌</span><span class="dot">&bull;</span><span>교회음향시공</span><span class="dot">&bull;</span><span>강당조명시공</span><span class="dot">&bull;</span><span>공연장설계</span><span class="dot">&bull;</span><span>야외행사</span><span class="dot">&bull;</span><span>학교축제</span><span class="dot">&bull;</span><span>내한공연</span><span class="dot">&bull;</span><span>무대설치</span><span class="dot">&bull;</span>' +
        '<span>무대조명</span><span class="dot">&bull;</span><span>LED스크린</span><span class="dot">&bull;</span><span>음향시스템</span><span class="dot">&bull;</span><span>라이브중계</span><span class="dot">&bull;</span><span>특수효과</span><span class="dot">&bull;</span><span>콘서트</span><span class="dot">&bull;</span><span>페스티벌</span><span class="dot">&bull;</span><span>교회음향시공</span><span class="dot">&bull;</span><span>강당조명시공</span><span class="dot">&bull;</span><span>공연장설계</span><span class="dot">&bull;</span><span>야외행사</span><span class="dot">&bull;</span><span>학교축제</span><span class="dot">&bull;</span><span>내한공연</span><span class="dot">&bull;</span><span>무대설치</span><span class="dot">&bull;</span>' +
        '</div></div>' +

        // About preview
        '<section class="about" id="about" aria-label="회사 소개"><div class="about-left rv"><div class="cue" aria-hidden="true">Q.01 — 소개</div><h2>당신의 무대,<br>우리가<br><em>완성합니다</em></h2><img class="about-img" src="/assets/dominick/console.webp" alt="KBS 아레나 조명 콘솔" loading="lazy" decoding="async"></div><div class="about-right rv d2">' +
        '<p style="font-size:var(--fs-body);color:var(--text2);line-height:1.9;margin-bottom:24px;">무대공작소 조명음향렌탈연합은 단순 장비 대여 업체가 아닌, 조명·음향·LED스크린·무대 시스템 설계·공연기획까지 함께 운영하는 <span style="color:var(--gold)">전문 제작 협업 네트워크 기반 공연 기술팀</span>입니다.</p>' +
        '<div style="margin-bottom:32px;">' +
        '<div style="margin-bottom:24px;"><p style="font-size:var(--fs-small);color:var(--dim);line-height:1.8;margin-bottom:8px;">"조명은 A업체, 음향은 B업체, LED는 C업체... 소통이 안 됩니다"</p><p style="font-size:var(--fs-body);color:var(--text);line-height:1.8;">→ 조명·음향·영상·특수효과를 <span style="color:var(--gold)">하나의 팀이 통합 운영</span>합니다.</p></div>' +
        '<div style="margin-bottom:24px;"><p style="font-size:var(--fs-small);color:var(--dim);line-height:1.8;margin-bottom:8px;">"렌탈만 하고 끝인가요?"</p><p style="font-size:var(--fs-body);color:var(--text);line-height:1.8;">→ 교회·강당·공연장 <span style="color:var(--gold)">음향 조명 시공</span>부터 공연장 시스템 설계까지 진행합니다.</p></div>' +
        '<div style="margin-bottom:24px;"><p style="font-size:var(--fs-small);color:var(--dim);line-height:1.8;margin-bottom:8px;">"행사 당일 문제가 생기면 누가 책임지나요?"</p><p style="font-size:var(--fs-body);color:var(--text);line-height:1.8;">→ 전문 감독·보조감독이 <span style="color:var(--gold)">현장에 상주</span>합니다. 10년+ 경험의 즉각 대응력.</p></div>' +
        '</div>' +
        '<div class="stats" role="list" aria-label="주요 수치"><div class="stat" role="listitem"><b data-count="200" data-suffix="+" aria-label="연간 200+ 프로젝트">0</b><small>연간 프로젝트</small></div><div class="stat" role="listitem"><b data-count="10" data-suffix="+" aria-label="10년+ 현장 경험">0</b><small>년+ 현장 경험</small></div><div class="stat" role="listitem"><b data-count="9" data-suffix="" aria-label="9개 전문 팀">0</b><small>전문 팀</small></div></div><div style="margin-top:32px;"><a href="/about" data-link class="btn btn-ghost">자세히 보기 &rarr;</a></div></div></section>' +

        '<div class="divider" aria-hidden="true"></div>' +

        // Services preview
        '<section class="services" id="services" aria-label="서비스"><div class="services-in"><div class="rv"><div class="cue" aria-hidden="true">Q.02 — 서비스</div><h2 class="section-heading">서비스</h2></div><div class="channels" role="list">' +
        serviceChannels.map((ch, i) => channelCard(ch, (i % 6) + 1)).join('') +
        '</div><div style="text-align:center;margin-top:40px;" class="rv"><a href="/services" data-link class="btn btn-ghost">모든 서비스 보기 &rarr;</a></div></div></section>' +

        // Social proof
        '<section style="padding:var(--section-py) var(--page-gutter);max-width:var(--max-w);margin:0 auto;" aria-label="고객 후기"><div class="rv"><div class="cue" aria-hidden="true">고객 후기</div><h2 class="section-heading">현장의 목소리</h2></div>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:40px;">' +
        '<div class="about-value-card rv d1"><div style="color:var(--gold);margin-bottom:12px;letter-spacing:2px;">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p style="color:var(--text2);line-height:1.9;margin-bottom:16px;">"조명, 음향, LED 스크린까지 한 팀이 전부 해결해줘서 소통이 정말 편했습니다. 현장 대응력도 최고였어요."</p><div style="font-weight:600;">콘서트 기획사 대표</div><div style="font-size:var(--fs-small);color:var(--dim);">KBS 아레나 콘서트</div></div>' +
        '<div class="about-value-card rv d2"><div style="color:var(--gold);margin-bottom:12px;letter-spacing:2px;">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p style="color:var(--text2);line-height:1.9;margin-bottom:16px;">"교회 음향 시공을 맡겼는데, 공간 특성을 정확히 파악하고 최적의 시스템을 설계해주셨습니다. 만족도 100%."</p><div style="font-weight:600;">교회 운영위원장</div><div style="font-size:var(--fs-small);color:var(--dim);">서울 교회 음향 시공</div></div>' +
        '<div class="about-value-card rv d3"><div style="color:var(--gold);margin-bottom:12px;letter-spacing:2px;">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p style="color:var(--text2);line-height:1.9;margin-bottom:16px;">"대학교 축제 음향조명을 3년째 맡기고 있습니다. 매년 퀄리티가 올라가요. 학생들 반응이 너무 좋습니다."</p><div style="font-weight:600;">대학교 총학생회</div><div style="font-size:var(--fs-small);color:var(--dim);">대학교 축제</div></div>' +
        '</div></section>' +

        // Trust badges
        '<div style="padding:48px var(--page-gutter);max-width:var(--max-w);margin:0 auto;">' +
        '<div class="rv" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:16px;text-align:center;">' +
        '<div style="padding:20px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);"><div style="font-size:var(--fs-h3);color:var(--gold);font-weight:800;">24h</div><div style="font-size:var(--fs-small);color:var(--text2);margin-top:4px;">견적 응답 보장</div></div>' +
        '<div style="padding:20px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);"><div style="font-size:var(--fs-h3);color:var(--gold);font-weight:800;">All-in</div><div style="font-size:var(--fs-small);color:var(--text2);margin-top:4px;">설치/운영/철거 포함</div></div>' +
        '<div style="padding:20px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);"><div style="font-size:var(--fs-h3);color:var(--gold);font-weight:800;">전국</div><div style="font-size:var(--fs-small);color:var(--text2);margin-top:4px;">출장 운영 가능</div></div>' +
        '<div style="padding:20px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);"><div style="font-size:var(--fs-h3);color:var(--gold);font-weight:800;">10Y+</div><div style="font-size:var(--fs-small);color:var(--text2);margin-top:4px;">현장 경험</div></div>' +
        '</div></div>' +

        // Mid CTA
        '<div class="mid-cta" aria-label="문의 배너"><p class="rv">다음 무대를 함께 만들어 볼까요?</p><a href="/contact" data-link class="btn btn-primary rv d1">지금 상담하기<svg viewBox="0 0 16 16"><path d="M1 8h13M10 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a></div>' +

        // Portfolio preview
        '<section class="portfolio" id="portfolio" aria-label="프로젝트"><div class="portfolio-in"><div class="rv"><div class="cue" aria-hidden="true">Q.03 — 프로젝트</div><h2 class="section-heading">대표<br>프로젝트</h2></div><div class="portfolio-grid">' +
        '<div class="portfolio-card rv d1" data-project="dominick"><div class="card-img-wrap"><img class="card-img" src="/assets/dominick/new-01.webp" alt="Dominick Jocker KBS 아레나 콘서트" loading="lazy"><div class="card-img-overlay"></div></div><div class="card-body"><div class="card-tag">Concert &middot; Lighting &middot; LED &middot; Sound</div><div class="card-title">Dominick Jocker "One Love Night" — KBS 아레나 콘서트</div><div class="card-desc">KBS 아레나 대형 콘서트 — 무빙헤드 조명, LED 월, 음향 시스템 통합 운영</div></div></div>' +
        '<div class="portfolio-card rv d2" data-project="dujeonku"><div class="card-img-wrap"><img class="card-img" src="/assets/dujeonku/new-01.webp" alt="두쫀쿠 콘서트 상암 숲 콜로세움" loading="lazy"><div class="card-img-overlay"></div></div><div class="card-body"><div class="card-tag">Concert &middot; Lighting &middot; LED Screen</div><div class="card-title">두쫀쿠 콘서트 — 상암 숲 콜로세움</div><div class="card-desc">상암 숲 콜로세움 — 헥사곤 LED 패널, 무빙 라이트, LED 스크린 연출</div></div></div>' +
        '<div class="portfolio-card rv d3" data-project="kanoimiyu"><div class="card-img-wrap"><img class="card-img" src="/assets/kanoimiyu/new-01.webp" alt="KANO MIYU 내한 콘서트" loading="lazy"><div class="card-img-overlay"></div></div><div class="card-body"><div class="card-tag">Concert &middot; Lighting &middot; Sound</div><div class="card-title">\u30AB\u30CE\u30A4\u30DF\u30E6 (KANO MIYU) 내한 콘서트</div><div class="card-desc">카노이미유 서울 내한 콘서트 — PAR 조명, LED 백드롭, 음향 시스템</div></div></div>' +
        '</div><div style="text-align:center;margin-top:40px;" class="rv"><a href="/portfolio" data-link class="btn btn-ghost">전체 프로젝트 보기 &rarr;</a></div></div></section>' +

        // Team preview
        '<section class="team" id="team" aria-label="팀 소개"><div class="rv"><div class="cue" aria-hidden="true">Q.04 — 파트너</div><h2 class="section-heading">파트너<br>네트워크</h2></div><div class="modules" role="list">' +
        teamData.map((m, i) => '<div class="mod rv d' + ((i % 3) + 1) + '" role="listitem"><div class="mod-ix">' + m.ix + '</div><div class="mod-name"' + (m.nameStyle ? ' style="' + m.nameStyle + '"' : '') + '>' + m.name + '</div><div class="mod-person">' + m.person + '</div><div class="mod-role">' + m.role + '</div></div>').join('') +
        '</div><div style="text-align:center;margin-top:40px;" class="rv"><a href="/team" data-link class="btn btn-ghost">팀 자세히 보기 &rarr;</a></div></section>' +

        // Contact preview
        '<section class="contact" id="contact" aria-label="문의"><div class="rv"><div class="cue" style="justify-content:center" aria-hidden="true">Q.05 — 문의</div><h2>무대 위의 다음 순간,<br>함께 만들어갑니다</h2><p class="contact-subtitle">프로젝트 문의 및 견적 요청</p>' + contactFormHtml() + '</div></section>' +

        footerHtml();
    };

    // ABOUT
    routes['/about'] = function() {
      updateMeta('무대공작소 조명음향렌탈연합 | 렌탈·시공·공연장 운영', '무대공작소 조명음향렌탈연합 — 콘서트·내한공연·야외행사·학교축제 음향 조명 렌탈부터 교회·강당·공연장 시공까지. 자체 공연장 운영, 통합 무대 시스템 전문팀.');
      return '<div class="about-page"><div class="rv">' + renderBreadcrumb([{href:'/',label:'홈'},{href:'/about',label:'소개'}]) + '</div>' +
        '<div class="about-hero rv"><h1>무대장비 렌탈부터<br>공연장 시공까지,<br><em>통합 무대 시스템</em></h1>' +
        '<p>무대공작소 조명음향렌탈연합은 야외행사, 학교축제, 콘서트, 내한공연, 기업행사, 방송촬영, 교회 및 대강당 음향렌탈, 조명렌탈, LED스크린 렌탈 및 시공까지 진행하는 통합 무대 시스템 전문팀입니다.</p>' +
        '<p style="margin-top:20px;">단순 장비 대여 업체가 아닌, 조명·음향·LED스크린·무대 시스템 설계·공연기획까지 함께 운영하는 전문 제작 협업 네트워크 기반 공연 기술팀입니다.</p></div>' +

        '<div class="stats rv" role="list" style="margin-bottom:64px;"><div class="stat" role="listitem"><b data-count="200" data-suffix="+">0</b><small>연간 프로젝트</small></div><div class="stat"><b data-count="10" data-suffix="+">0</b><small>년+ 현장 경험</small></div><div class="stat"><b data-count="3" data-suffix="">0</b><small>자체 공연장</small></div><div class="stat"><b data-count="9" data-suffix="">0</b><small>전문 팀</small></div></div>' +

        // 주요 서비스 분야
        '<h2 class="section-heading rv">주요 서비스 분야</h2>' +
        '<div class="about-values" style="grid-template-columns:1fr;">' +
        '<div class="about-value-card rv d1"><h3>렌탈 · 행사 운영</h3><ul style="list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:8px 24px;">' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">공연 음향 렌탈</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">무대 조명 렌탈</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">LED스크린 렌탈</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">야외행사 음향 조명 시스템 구축</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">학교축제 음향 조명 운영</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">콘서트 무대 연출</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">라이브스트리밍 및 방송 촬영 지원</li>' +
        '</ul></div>' +
        '<div class="about-value-card rv d2"><h3>시공 · 시스템 설계</h3><ul style="list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:8px 24px;">' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">교회 음향 조명 시공</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">학교 강당 음향 조명 시공</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">회사 대강당 음향 조명 시공</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">공연장 시스템 설계 시공</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">LED 스크린 화면 시공</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">기업 세미나 음향 시스템 시공</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">라이브예배 영상 시스템 구축</li>' +
        '</ul></div>' +
        '</div>' +

        '<img class="about-img rv" src="/assets/dominick/rig.webp" alt="무대 공작소 무대 장비 셋업" loading="lazy" decoding="async" style="margin-top:48px;height:auto;max-height:400px;">' +

        // 대표 레퍼런스
        '<h2 class="section-heading rv" style="margin-top:80px;">대표 레퍼런스</h2>' +
        '<div class="about-values">' +
        '<div class="about-value-card rv d1"><h3>콘서트 · 내한공연</h3><ul style="list-style:none;padding:0;margin:0;">' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">함춘호 콘서트</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">포플레이 Bob James 내한공연</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">포플레이 Nathan East 내한공연</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">임형주 콘서트 <span style="color:var(--gold);font-size:var(--fs-small);">진행중</span></li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">우에하라 히로미 Sonicwonder 내한공연</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">아트센터 인천 재즈콘서트 <span style="color:var(--gold);font-size:var(--fs-small);">진행중</span></li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">산들 & B1A4 Music Collection 콘서트</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">도미닉 조커 One Love Night KBS 아레나</li>' +
        '</ul></div>' +
        '<div class="about-value-card rv d2"><h3>방송 · 프로젝트</h3><ul style="list-style:none;padding:0;margin:0;">' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">믹스나인</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">겁없는 녀석들</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">쇼미더머니 시즌6 게릴라 콘서트</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">아이돌 팬미팅 다수 진행</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">딩고 뮤직비디오 제작 참여</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">힐송 내한공연 예배 진행</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">JTBC 캠핑클럽 핑클 무대</li>' +
        '</ul></div>' +
        '<div class="about-value-card rv d3"><h3>야외행사 · 학교축제</h3><ul style="list-style:none;padding:0;margin:0;">' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">대학교 축제 무대 음향조명 렌탈</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">지자체 야외행사 음향 렌탈</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">콘서트 및 내한공연 무대 진행</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">기업행사 및 브랜드 행사 운영</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">아이돌 팬미팅 음향 조명 렌탈</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2.2;">아이돌 기획공연 제작</li>' +
        '</ul></div>' +
        '</div>' +
        '<p class="rv" style="font-size:var(--fs-body);color:var(--text2);text-align:center;margin-top:24px;">행사 규모에 맞는 맞춤형 장비 설계와 현장 운영이 가능합니다.</p>' +

        // 자체 공연장 운영
        '<h2 class="section-heading rv" style="margin-top:80px;">자체 공연장 운영</h2>' +
        '<p class="section-subheading rv">무대공작소 조명음향렌탈연합은 직접 공연장을 운영하는 제작팀입니다.</p>' +
        '<div class="about-values">' +
        '<div class="about-value-card rv d1"><h3>온맘씨어터</h3><p style="color:var(--gold);font-size:var(--fs-small);margin-bottom:8px;">홍대 · 100석</p><p>소규모 콘서트, 공연, 이벤트에 최적화된 홍대 공연장</p></div>' +
        '<div class="about-value-card rv d2"><h3>가온라이팅</h3><p style="color:var(--gold);font-size:var(--fs-small);margin-bottom:8px;">홍대 · 70석</p><p>친밀한 공연 경험을 위한 아담한 규모의 공연 공간</p></div>' +
        '<div class="about-value-card rv d3"><h3>목동 공연장</h3><p style="color:var(--gold);font-size:var(--fs-small);margin-bottom:8px;">목동 · 600석 · 회전무대 완비</p><p>내한공연, 뮤지컬 등 대형 공연이 가능한 전문 공연장</p></div>' +
        '</div>' +

        // 교회·강당·공연장 시공
        '<h2 class="section-heading rv" style="margin-top:80px;">음향 조명 시공 전문</h2>' +
        '<div class="about-value-card rv" style="margin:var(--space-xl) 0;">' +
        '<p style="font-size:var(--fs-body-lg);color:var(--text);line-height:2;margin-bottom:24px;">무대공작소 조명음향렌탈연합은 단기 렌탈뿐 아니라, 공간 구조에 맞는 맞춤형 음향 조명 설계 시공까지 진행합니다.</p>' +
        '<ul style="list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:8px 24px;">' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">교회 음향 · 조명 시공</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">대강당 음향 시스템 구축</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">공연장 조명 시스템 설치</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">학교 강당 음향 · 조명 시공</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">라이브예배 영상 시스템 구축</li>' +
        '<li style="font-size:var(--fs-body);color:var(--text2);line-height:2;">기업 세미나 음향 시스템</li>' +
        '</ul>' +
        '<p style="font-size:var(--fs-body);color:var(--text2);line-height:2;margin-top:24px;">실제 공연 제작 경험 기반으로 설계하기 때문에, 예배·강연·공연·기업세미나 등 다양한 사용 환경에 최적화된 시스템 구축이 가능합니다.</p>' +
        '</div>' +

        // 차별화 포인트
        '<h2 class="section-heading rv" style="margin-top:80px;">차별화 포인트</h2>' +
        '<div class="about-values">' +
        '<div class="about-value-card rv d1"><h3>협업 네트워크</h3><p>공연 전문 기술 인력이 협업 구조로 움직입니다. 분절 없는 통합 운영.</p></div>' +
        '<div class="about-value-card rv d2"><h3>원스톱 렌탈</h3><p>음향·조명·LED스크린·영상을 하나의 팀이 통합 렌탈. 별도 업체 조율 불필요.</p></div>' +
        '<div class="about-value-card rv d3"><h3>검증된 실적</h3><p>내한공연·콘서트·방송·학교축제 등 다양한 현장 운영 경험 다수.</p></div>' +
        '<div class="about-value-card rv d1"><h3>시공 전문</h3><p>교회·강당·공연장 음향 조명 시공. 렌탈부터 설치까지 원스톱.</p></div>' +
        '<div class="about-value-card rv d2"><h3>자체 인프라</h3><p>홍대·목동 자체 공연장 3곳 운영. 리허설부터 공연까지 자체 해결.</p></div>' +
        '<div class="about-value-card rv d3"><h3>맞춤 설계</h3><p>행사 규모별 맞춤 시스템 설계. 소규모 버스킹부터 600석 대형 공연까지.</p></div>' +
        '</div>' +

        // 연혁
        '<h2 class="section-heading rv" style="margin-top:80px;">연혁</h2>' +
        '<div class="timeline rv">' +
        '<div class="timeline-item"><div class="timeline-year">2015</div><div class="timeline-text">무대 공작소 설립. 무대 조명 렌탈 사업 시작</div></div>' +
        '<div class="timeline-item"><div class="timeline-year">2017</div><div class="timeline-text">LED 스크린, 음향 시스템 사업 확장. 연간 100+ 프로젝트 달성</div></div>' +
        '<div class="timeline-item"><div class="timeline-year">2019</div><div class="timeline-text">중계/송출 및 특수 효과 부문 신설. 통합 무대 시스템 운영 체계 확립</div></div>' +
        '<div class="timeline-item"><div class="timeline-year">2022</div><div class="timeline-text">KBS 아레나, 상암 숲 콜로세움 등 대형 공연장 프로젝트 수행</div></div>' +
        '<div class="timeline-item"><div class="timeline-year">2024</div><div class="timeline-text">9개 전문 팀 체계 구축. 자체 공연장 운영 시작. 연간 200+ 프로젝트</div></div>' +
        '<div class="timeline-item"><div class="timeline-year">2026</div><div class="timeline-text">조명음향렌탈연합 체계 확립. 렌탈·시공·공연장 운영 통합 서비스 제공</div></div>' +
        '</div>' +

        '<div style="text-align:center;margin-top:56px;padding:48px 0;border-top:1px solid var(--border);" class="rv"><p style="font-size:var(--fs-body-lg);color:var(--text);margin-bottom:24px;line-height:1.8;">무대장비 렌탈부터 공연장 음향 조명 시공까지<br>행사의 완성도를 높이는 <span style="color:var(--gold);">전문 무대 시스템 파트너</span>입니다.</p>' +
        '<div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;"><a href="/services" data-link class="btn btn-ghost">서비스 보기 &rarr;</a><a href="/portfolio" data-link class="btn btn-ghost">프로젝트 보기 &rarr;</a><a href="/contact" data-link class="btn btn-primary">견적 문의 &rarr;</a></div></div>' +
        '</div>' + footerHtml();
    };

    // SERVICES
    routes['/services'] = function() {
      updateMeta('무대 조명·음향·LED 렌탈 서비스 | 무대 공작소', '무대 조명, LED 스크린, 음향, 중계, 특수효과, 무대 설치 — 6개 전문 채널. 패키지 가격 50만원부터. 견적 문의하세요.');
      return '<div class="service-detail-page"><div class="rv">' + renderBreadcrumb([{href:'/',label:'홈'},{href:'/services',label:'서비스'}]) + '</div>' +
        '<h1 class="section-heading rv">서비스</h1>' +
        '<p class="section-subheading rv">7개 전문 채널을 통해 무대 위의 모든 기술적 요소를 통합 설계하고 운영합니다. 렌탈부터 시공까지 — 어떤 무대든 맞춤 솔루션을 제공합니다.</p>' +
        '<div class="channels" role="list" style="margin-bottom:64px;">' +
        serviceChannels.map((ch, i) => channelCard(ch, (i % 6) + 1)).join('') +
        '</div>' +
        serviceChannels.map(ch => {
          const cat = productData[ch.key];
          return '<div style="margin-bottom:64px;" class="rv"><h2 style="font-family:Syne,sans-serif;font-weight:800;font-size:var(--fs-h3);text-transform:uppercase;margin-bottom:8px;">' + ch.ko + ' <span style="color:var(--dim);font-weight:400;font-size:var(--fs-small);">' + ch.en + '</span></h2><p style="font-size:var(--fs-small);color:var(--text2);margin-bottom:24px;">' + cat.products.length + '개 장비/패키지</p>' +
          '<a href="/services/' + ch.key + '" data-link class="btn btn-ghost">장비 보기 &rarr;</a></div>';
        }).join('<div class="divider" aria-hidden="true" style="margin-bottom:48px;"></div>') +
        '</div>' + footerHtml();
    };

    // SERVICE DETAIL PAGES
    ['lighting', 'led', 'sound', 'broadcast', 'sfx', 'stage', 'install'].forEach(function(key) {
      routes['/services/' + key] = function() {
        var cat = productData[key];
        var ch = serviceChannels.find(function(c) { return c.key === key; });
        updateMeta(ch.ko + ' 렌탈 | 무대 공작소', ch.desc + ' — 지금 견적 문의하세요.');
        return '<div class="service-detail-page"><div class="rv">' + renderBreadcrumb([{href:'/',label:'홈'},{href:'/services',label:'서비스'},{href:'/services/'+key,label:ch.ko}]) + '</div>' +
          '<div class="pm-header rv"><div class="pm-category-icon">' + cat.icon + '</div><h1 class="pm-title">' + cat.title + '</h1><p class="pm-subtitle">' + cat.subtitle + '</p></div>' +
          '<div class="pm-grid" id="serviceGrid_' + key + '">' +
          cat.products.map(function(p, i) {
            var hasImg = !!p.image;
            return '<div class="pm-card rv' + (hasImg ? ' has-image' : '') + '" data-svc-category="' + key + '" data-svc-index="' + i + '">' +
              (hasImg ? '<img class="pm-card-img" src="' + p.image + '" alt="' + escHtml(p.name) + '" loading="lazy" decoding="async">' : '') +
              (hasImg ? '<div class="pm-card-body">' : '') +
              (!hasImg ? '<div class="pm-card-icon">' + (p.icon || '') + '</div>' : '') +
              '<div class="pm-card-name">' + escHtml(p.name) + '</div>' +
              '<div class="pm-card-desc">' + escHtml(p.desc ? p.desc.split('\n')[0] : '') + '</div>' +
              '<div class="pm-card-prices"><div class="pm-card-price">' + p.price + '</div>' +
              (p.originalPrice ? '<div class="pm-card-price-original">' + p.originalPrice + '</div>' : '') + '</div>' +
              '<a href="/contact" data-link class="pm-card-btn">문의하기</a>' +
              (hasImg ? '</div>' : '') + '</div>';
          }).join('') + '</div>' +
          '<div style="text-align:center;margin-top:48px;" class="rv"><a href="/contact" data-link class="btn btn-primary">맞춤 견적 요청 &rarr;</a></div>' +
          // Related portfolio
          (function() {
            var keyMap = { lighting: 'Lighting', led: 'LED', sound: 'Sound', broadcast: 'Broadcasting', sfx: 'Effect', stage: 'Stage Setup', install: 'Installation' };
            var tag = keyMap[key] || '';
            var related = projectOrder.filter(function(pid) {
              var p = projectData[pid];
              return p && p.tags && p.tags.some(function(t) { return t.toLowerCase().indexOf(tag.toLowerCase()) !== -1; });
            }).slice(0, 3);
            if (!related.length) return '';
            return '<div style="margin-top:64px;" class="rv"><h2 class="section-heading">관련 프로젝트</h2>' +
              '<div class="portfolio-grid">' + related.map(function(pid) {
                var p = projectData[pid];
                return '<div class="portfolio-card rv" data-project="' + pid + '" tabindex="0" role="link"><div class="card-img-wrap"><img class="card-img" src="' + p.media[0].src + '" alt="' + escHtml(p.title) + '" loading="lazy" decoding="async"><div class="card-img-overlay"></div></div><div class="card-body"><div class="card-title">' + p.title + '</div></div></div>';
              }).join('') + '</div></div>';
          })() +
          '</div>' + footerHtml();
      };
    });

    // PORTFOLIO
    routes['/portfolio'] = function() {
      updateMeta('포트폴리오 — 콘서트·축제·기업행사 실적 | 무대 공작소', 'KBS 아레나, 상암 숲 콜로세움 등 대형 공연장 실적. 15개 이상 대표 프로젝트 갤러리를 확인하세요.');
      var allProjects = [
        { id: 'dominick', img: '/assets/dominick/new-01.webp', tag: 'Concert / Lighting / LED / Sound', title: 'Dominick Jocker "One Love Night" — KBS 아레나 콘서트', type: 'concert' },
        { id: 'dujeonku', img: '/assets/dujeonku/new-01.webp', tag: 'Concert / Lighting / LED Screen', title: '두쫀쿠 콘서트 — 상암 숲 콜로세움', type: 'concert' },
        { id: 'kanoimiyu', img: '/assets/kanoimiyu/new-01.webp', tag: 'Concert / Lighting / Sound', title: '\u30AB\u30CE\u30A4\u30DF\u30E6 (KANO MIYU) 내한 콘서트', type: 'concert' },
        { id: 'hiromi', img: '/assets/hiromi/stage-03.webp', tag: 'Concert / Jazz / Lighting', title: 'Hiromi\'s Sonicwonder 2026 내한공연', type: 'concert' },
        { id: 'fourplay', img: '/assets/fourplay/stage-01.webp', tag: 'Concert / Jazz / Lighting', title: '포플레이 & 밥 제임스 내한공연', type: 'concert' },
        { id: 'sandle', img: '/assets/sandle/stage-01.webp', tag: 'Concert / Lighting / LED Screen', title: '산들 & B1A4 Music Collection 콘서트', type: 'concert' },
        { id: 'finkl', img: '/assets/finkl/stage-01.webp', tag: 'Broadcasting / Lighting / LED / Stage Setup', title: 'JTBC 캠핑클럽 핑클 무대', type: 'broadcast' },
        { id: 'welove2022', img: '/assets/welove2022/stage-01.webp', tag: 'Festival / Lighting / Stage Setup', title: '위러브 2022 페스티벌', type: 'festival' },
        { id: 'koreauniv', img: '/assets/korea-univ/stage-01.webp', tag: 'Event / Lighting / LED Screen', title: '고려대학교 공과대학 60주년 기념행사', type: 'event' },
        { id: 'ailee', img: '/assets/ailee/stage-01.webp', tag: 'MV Shooting / Lighting / Broadcasting', title: '딩고 에일리 뮤직비디오 촬영', type: 'broadcast' },
        { id: 'ywam', img: '/assets/ywam/stage-01.webp', tag: 'MV Shooting / Lighting', title: '예수전도단 크리스마스 앨범 뮤비촬영', type: 'broadcast' },
        { id: 'hamchunho', img: '/assets/hamchunho/stage-03.webp', tag: 'Concert / Lighting / LED Screen', title: '함춘호 & 송창식 콘서트', type: 'concert' },
        { id: 'woolpla', img: '/assets/woolpla/stage-01.webp', tag: 'Concert / Lighting / Sound', title: '울플러 콘서트', type: 'concert' },
        { id: 'shakers', img: '/assets/shakers/stage-01.webp', tag: 'Festival / Lighting / Sound / Stage Setup', title: '쉐이커스 캠프 페스티벌', type: 'festival' },
        { id: 'oktopjazz', img: '/assets/oktopjazz/stage-01.webp', tag: 'Concert / Jazz / Lighting', title: '옥탑재즈 — 아트센터 인천', type: 'concert' },
        { img: '', tag: 'Concert / Lighting / Sound', title: '임형주 콘서트', type: 'concert', desc: '진행중' },
        { img: '', tag: 'Concert / Jazz / Lighting', title: '포플레이 Nathan East 내한공연', type: 'concert' },
        { img: '', tag: 'Broadcasting / Lighting / Sound', title: '믹스나인', type: 'broadcast' },
        { img: '', tag: 'Broadcasting / Lighting / Sound', title: '겁없는 녀석들', type: 'broadcast' },
        { img: '', tag: 'Concert / Lighting / Sound / Stage Setup', title: '쇼미더머니 시즌6 게릴라 콘서트', type: 'concert' },
        { img: '', tag: 'Concert / Lighting / Worship', title: '힐송 내한공연 예배', type: 'concert' }
      ];
      return '<div class="portfolio-page"><div class="rv">' + renderBreadcrumb([{href:'/',label:'홈'},{href:'/portfolio',label:'프로젝트'}]) + '</div>' +
        '<h1 class="section-heading rv">전체 프로젝트</h1>' +
        '<div class="portfolio-filters rv" id="portfolioFilters">' +
        '<button class="portfolio-filter-btn active" data-filter="all">All</button>' +
        '<button class="portfolio-filter-btn" data-filter="concert">Concert</button>' +
        '<button class="portfolio-filter-btn" data-filter="broadcast">Broadcasting / MV</button>' +
        '<button class="portfolio-filter-btn" data-filter="festival">Festival</button>' +
        '<button class="portfolio-filter-btn" data-filter="event">Event</button>' +
        '</div>' +
        '<div class="portfolio-grid" id="portfolioGrid">' +
        allProjects.map(function(p, i) {
          var hasLink = !!p.id;
          return '<div class="portfolio-card rv d' + ((i % 3) + 1) + '" data-type="' + p.type + '"' + (hasLink ? ' data-project="' + p.id + '" tabindex="0" role="link" aria-label="' + escHtml(p.title) + ' 프로젝트 보기"' : '') + '>' +
            '<div class="card-img-wrap"' + (!p.img ? ' style="background:linear-gradient(135deg,#1a1028 0%,#0e0e16 40%,#1a1520 100%);"' : '') + '>' +
            (p.img ? '<img class="card-img" src="' + p.img + '" alt="' + escHtml(p.title) + '" loading="lazy" decoding="async">' : '') +
            '<div class="card-img-overlay"' + (!p.img ? ' style="background:linear-gradient(180deg,rgba(26,16,40,0.3) 0%,rgba(10,10,15,0.6) 100%);opacity:1;"' : '') + '></div></div>' +
            '<div class="card-body"><div class="card-tag">' + p.tag + '</div><div class="card-title">' + p.title + '</div>' +
            (p.desc ? '<div class="card-desc" style="opacity:0.7;">' + p.desc + '</div>' : '') +
            '</div></div>';
        }).join('') + '</div></div>' + footerHtml();
    };

    // PORTFOLIO DETAIL
    projectOrder.forEach(function(pid) {
      routes['/portfolio/' + pid] = function() {
        var p = projectData[pid];
        updateMeta(p.title + ' | 무대 공작소', p.desc);
        var idx = projectOrder.indexOf(pid);
        var prevId = idx > 0 ? projectOrder[idx - 1] : null;
        var nextId = idx < projectOrder.length - 1 ? projectOrder[idx + 1] : null;
        return '<div class="portfolio-detail-page"><div class="rv">' + renderBreadcrumb([{href:'/',label:'홈'},{href:'/portfolio',label:'프로젝트'},{href:'/portfolio/'+pid,label:p.title.split('—')[0].trim().substring(0,30)}]) + '</div>' +
          '<h1 class="rv" style="font-weight:800;font-size:var(--fs-h1);margin-bottom:12px;">' + p.title + '</h1>' +
          '<p class="rv" style="font-size:var(--fs-body-lg);color:var(--text2);margin-bottom:24px;">' + p.desc + '</p>' +
          '<div class="portfolio-detail-meta rv"><div class="meta-item"><strong>Venue:</strong> ' + (p.venue || 'Seoul') + '</div><div class="meta-item"><strong>Services:</strong> ' + p.tags.join(', ') + '</div></div>' +
          '<div class="portfolio-detail-gallery rv" id="portfolioDetailGallery">' +
          p.media.map(function(item) {
            var cls = item.full ? ' gallery-full' : '';
            if (item.type === 'video') return '<video class="' + cls + '" controls preload="metadata"><source src="' + item.src + '" type="video/mp4"></video>';
            return '<img class="' + cls + '" src="' + item.src + '" alt="' + escHtml(item.alt || '') + '" loading="lazy" decoding="async" data-gallery-img>';
          }).join('') + '</div>' +
          '<div class="portfolio-nav rv">' +
          (prevId ? '<a href="/portfolio/' + prevId + '" data-link>&larr; 이전 프로젝트</a>' : '<span></span>') +
          (nextId ? '<a href="/portfolio/' + nextId + '" data-link>다음 프로젝트 &rarr;</a>' : '<span></span>') +
          '</div></div>' + footerHtml();
      };
    });

    // TEAM
    routes['/team'] = function() {
      updateMeta('파트너 네트워크 — 9개 전문 팀 | 무대 공작소', '조명·음향·영상·기획 — 9개 전문 팀이 하나의 네트워크로 움직입니다. 무대 공작소의 파트너를 소개합니다.');
      return '<div class="team-page"><div class="rv">' + renderBreadcrumb([{href:'/',label:'홈'},{href:'/team',label:'파트너'}]) + '</div>' +
        '<h1 class="section-heading rv">파트너 네트워크</h1>' +
        '<p class="section-subheading rv">각 분야 최고의 전문가들이 하나의 네트워크로 움직입니다. 조명, 음향, 영상, 기획 — 하나의 목표를 위해 하나로 움직입니다.</p>' +
        '<div class="modules" role="list">' +
        teamData.map(function(m, i){return '<div class="mod rv d' + ((i%3)+1) + '" role="listitem"><div class="mod-ix">' + m.ix + '</div><div class="mod-name"' + (m.nameStyle ? ' style="' + m.nameStyle + '"' : '') + '>' + m.name + '</div><div class="mod-person">' + m.person + '</div><div class="mod-role">' + m.role + '</div></div>';}).join('') +
        '</div>' +
        '<div style="text-align:center;margin-top:56px;" class="rv"><a href="/contact" data-link class="btn btn-primary">함께 일하기 &rarr;</a></div>' +
        '</div>' + footerHtml();
    };

    // CONTACT
    routes['/contact'] = function() {
      updateMeta('견적 문의 | 무대 공작소 — 010-7737-0387', '무대 조명·음향·LED 렌탈 견적을 무료로 받아보세요. 24시간 이내 응답. 전화 010-7737-0387.');
      return '<div class="contact-page"><div class="rv">' + renderBreadcrumb([{href:'/',label:'홈'},{href:'/contact',label:'문의'}]) + '</div>' +
        '<h1 class="rv" style="font-weight:900;font-size:var(--fs-h1);line-height:1.25;margin-bottom:var(--space-md);">무대 위의 다음 순간,<br>함께 만들어갑니다</h1>' +
        '<p class="rv contact-subtitle">프로젝트 문의 및 견적 요청</p>' +
        '<div class="rv">' + contactFormHtml() + '</div>' +

        '<div class="faq-section rv"><h2 class="section-heading" style="font-size:var(--fs-h3);margin-bottom:24px;">자주 묻는 질문</h2>' +
        '<div class="faq-item"><button class="faq-question">견적은 어떻게 받을 수 있나요?<span class="faq-toggle">+</span></button><div class="faq-answer"><div class="faq-answer-inner">위 문의 양식을 통해 행사 유형, 규모, 일정을 알려주시면<br>24시간 이내에 맞춤 견적을 보내드립니다.<br><br>전화 문의도 가능합니다: 010-7737-0387</div></div></div>' +
        '<div class="faq-item"><button class="faq-question">어떤 규모의 행사까지 가능한가요?<span class="faq-toggle">+</span></button><div class="faq-answer"><div class="faq-answer-inner">소규모 버스킹부터 KBS 아레나 규모의 대형 콘서트까지<br>모든 규모의 행사에 대응 가능합니다.<br><br>장비와 인력을 행사 규모에 맞게 편성합니다.</div></div></div>' +
        '<div class="faq-item"><button class="faq-question">설치와 철거는 포함인가요?<span class="faq-toggle">+</span></button><div class="faq-answer"><div class="faq-answer-inner">네, 모든 패키지에 설치 / 운영 / 철거가 포함됩니다.<br><br>전일 설치가 필요한 경우 추가 비용이 발생할 수 있습니다.</div></div></div>' +
        '<div class="faq-item"><button class="faq-question">지방 행사도 가능한가요?<span class="faq-toggle">+</span></button><div class="faq-answer"><div class="faq-answer-inner">네, 전국 어디든 출장 가능합니다.<br>지방 행사의 경우 운송비와 숙박비가 별도로 발생합니다.<br><br>부천시민회관, 아트센터 인천 등<br>수도권 및 지방 공연장 실적이 있습니다.</div></div></div>' +
        '<div class="faq-item"><button class="faq-question">무대 조명 렌탈 비용은 얼마인가요?<span class="faq-toggle">+</span></button><div class="faq-answer"><div class="faq-answer-inner">조명 렌탈 패키지는 규모에 따라 다양하게 준비되어 있습니다.<br><br>&middot; 소규모 (버스킹/행사) — 50~80만원대<br>&middot; 중형 (콘서트/기업행사) — 100~180만원대<br>&middot; 대형 (콘서트/축제) — 200만원 이상<br><br>조명감독 상주, 콘솔, 포그머신 등이 기본 포함됩니다.</div></div></div>' +
        '<div class="faq-item"><button class="faq-question">음향 렌탈 패키지에 무엇이 포함되나요?<span class="faq-toggle">+</span></button><div class="faq-answer"><div class="faq-answer-inner">음향 패키지에는 다음이 포함됩니다.<br><br>&middot; 마이다스 M32R 음향콘솔<br>&middot; 타소 T2 라인어레이 스피커<br>&middot; 젠하이져 무선마이크 (6~8개)<br>&middot; 무선인이어 모니터<br>&middot; 동축 모니터 스피커 / 악기마이크 풀세트<br><br>음향감독 및 보조감독이 현장에 상주합니다.<br>300명 커버 80만원부터 1,500명 커버 180만원까지 선택 가능합니다.</div></div></div>' +
        '<div class="faq-item"><button class="faq-question">학교 축제 전용 패키지가 있나요?<span class="faq-toggle">+</span></button><div class="faq-answer"><div class="faq-answer-inner">네, 학교축제 전용 패키지가 2종 준비되어 있습니다.<br><br>&middot; 패키지 A (250만원) — 음향 + 악기세트 + 조명 통합<br>&nbsp;&nbsp;밴드공연에 최적화<br>&middot; 패키지 B (220만원) — 음향 + 조명 통합 세트<br><br>두 패키지 모두 음향감독, 조명감독, 보조감독이 상주하며<br>당일 행사 기준입니다.</div></div></div>' +
        '<div class="faq-item"><button class="faq-question">취소나 일정 변경이 가능한가요?<span class="faq-toggle">+</span></button><div class="faq-answer"><div class="faq-answer-inner">행사 14일 전까지 무료 변경/취소가 가능합니다.<br>7일 전까지는 계약금 환불이 가능하며,<br>그 이후에는 별도 협의가 필요합니다.<br><br>정확한 조건은 계약 시 안내드립니다.</div></div></div>' +
        '<div class="faq-item"><button class="faq-question">여러 서비스를 함께 이용하면 할인이 되나요?<span class="faq-toggle">+</span></button><div class="faq-answer"><div class="faq-answer-inner">네, 조명+음향+LED 등 통합 이용 시<br>패키지 할인이 적용됩니다.<br><br>통합 견적 요청 시 개별 합산 대비<br>10~20% 절감이 가능합니다.</div></div></div>' +
        '<div class="faq-item"><button class="faq-question">결제 방법은 어떤 것이 있나요?<span class="faq-toggle">+</span></button><div class="faq-answer"><div class="faq-answer-inner">계좌이체와 카드결제 모두 가능합니다.<br><br>계약금 50% 선입금 후 행사 완료 후 잔금 정산이<br>기본 프로세스입니다.<br>세금계산서 발행 가능합니다.</div></div></div>' +
        '<div class="faq-item"><button class="faq-question">리허설 시간은 포함되나요?<span class="faq-toggle">+</span></button><div class="faq-answer"><div class="faq-answer-inner">1일 패키지 기준 설치~리허설~본행사~철거까지<br>모두 포함됩니다.<br><br>전일 설치가 필요한 대형 행사의 경우<br>별도 협의가 필요합니다.</div></div></div>' +
        '</div>' +
        '<div style="margin-top:48px;text-align:center;" class="rv"><p style="font-size:var(--fs-body-lg);color:var(--text2);margin-bottom:8px;">전화 문의</p><a href="tel:+8201077370387" style="font-family:Syne,sans-serif;font-size:var(--fs-h3);font-weight:700;color:var(--gold);text-decoration:none;">010-7737-0387</a></div>' +
        '</div>' + footerHtml();
    };

    // 404
    function render404() {
      updateMeta('404 — 페이지를 찾을 수 없습니다 | 무대 공작소', '요청하신 페이지를 찾을 수 없습니다. 무대 공작소 홈으로 이동하세요.');
      return '<div class="page-404"><div class="error-code">404</div><h2>페이지를 찾을 수 없습니다</h2><p>요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.</p><div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;"><a href="/" data-link class="btn btn-primary">홈으로 돌아가기</a><a href="/services" data-link class="btn btn-ghost">서비스 보기</a><a href="/contact" data-link class="btn btn-ghost">문의하기</a></div></div>' + footerHtml();
    }

    /* =====================================================
       ROUTER ENGINE
    ===================================================== */
    var isTransitioning = false;

    function navigateTo(path, pushState) {
      if (pushState === undefined) pushState = true;
      if (isTransitioning) return;

      closeMobile();
      closeProductModal();
      closeLightbox();
      closeGalleryViewer();

      var renderFn = routes[path] || render404;

      // Page transition
      isTransitioning = true;
      var overlay = document.getElementById('pageTransition');
      overlay.classList.add('page-transitioning');

      setTimeout(function() {
        if (pushState) history.pushState({path: path}, '', path);
        app.innerHTML = '<div class="page-content page-entering" id="mainContent">' + renderFn() + '</div>';

        if (typeof gtag === 'function') {
          gtag('event', 'page_view', { page_path: path, page_title: document.title });
        }

        updateActiveNav(path);
        window.scrollTo(0, 0);

        // Trigger entering animation
        requestAnimationFrame(function() {
          var pc = document.getElementById('mainContent');
          if (pc) pc.classList.remove('page-entering');
          if (pc) pc.classList.add('page-visible');
        });

        overlay.classList.remove('page-transitioning');
        overlay.classList.add('page-transitioning-out');

        setTimeout(function() {
          overlay.classList.remove('page-transitioning-out');
          isTransitioning = false;
          initPageFeatures();
          initScrollReveals();
          initLazyImages();
        }, 400);
      }, 350);
    }

    function renderInitial() {
      var path = location.pathname || '/';
      if (path === '/index.html') path = '/';
      var renderFn = routes[path] || render404;
      app.innerHTML = '<div class="page-content page-visible" id="mainContent">' + renderFn() + '</div>';
      updateActiveNav(path);
      initPageFeatures();
      initScrollReveals();
      initLazyImages();
    }

    // Handle popstate
    window.addEventListener('popstate', function(e) {
      var path = location.pathname || '/';
      if (path === '/index.html') path = '/';
      var renderFn = routes[path] || render404;
      app.innerHTML = '<div class="page-content page-visible" id="mainContent">' + renderFn() + '</div>';
      updateActiveNav(path);
      window.scrollTo(0, 0);
      initPageFeatures();
      initScrollReveals();
      initLazyImages();
    });

    // Click delegation for data-link
    document.addEventListener('click', function(e) {
      var link = e.target.closest('[data-link]');
      if (link) {
        e.preventDefault();
        var href = link.getAttribute('href');
        if (href && href !== location.pathname) {
          navigateTo(href);
        } else if (href === location.pathname) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }
      // Portfolio card click -> detail page
      var card = e.target.closest('.portfolio-card[data-project]');
      if (card && !e.target.closest('[data-link]')) {
        var pid = card.dataset.project;
        if (pid && projectData[pid]) {
          // If on home page, go to detail; if on portfolio page, go to detail
          navigateTo('/portfolio/' + pid);
        }
        return;
      }
      // Channel card click -> product modal (only on home)
      var chCard = e.target.closest('.ch[data-category]');
      if (chCard) {
        var cat = chCard.dataset.category;
        if (location.pathname === '/' || location.pathname === '/services') {
          openProductModal(cat);
        }
      }
      // Service detail page card click -> product modal detail
      var svcCard = e.target.closest('.pm-card[data-svc-category]');
      if (svcCard) {
        var svcCat = svcCard.dataset.svcCategory;
        var svcIdx = parseInt(svcCard.dataset.svcIndex);
        openProductModal(svcCat);
        setTimeout(function() { showProductDetail(svcCat, svcIdx); }, 100);
      }
      // Gallery image click
      var galleryImg = e.target.closest('[data-gallery-img]');
      if (galleryImg) {
        openGalleryFromDetail(galleryImg);
      }
      // FAQ toggle
      var faqBtn = e.target.closest('.faq-question');
      if (faqBtn) {
        var item = faqBtn.closest('.faq-item');
        var answer = item.querySelector('.faq-answer');
        var isOpen = item.classList.contains('open');
        // Close all
        document.querySelectorAll('.faq-item.open').forEach(function(fi) {
          fi.classList.remove('open');
          fi.querySelector('.faq-answer').style.maxHeight = '0';
        });
        if (!isOpen) {
          item.classList.add('open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      }
      // Portfolio filter
      var filterBtn = e.target.closest('.portfolio-filter-btn');
      if (filterBtn) {
        var filter = filterBtn.dataset.filter;
        document.querySelectorAll('.portfolio-filter-btn').forEach(function(b) { b.classList.remove('active'); });
        filterBtn.classList.add('active');
        document.querySelectorAll('#portfolioGrid .portfolio-card').forEach(function(c) {
          if (filter === 'all' || c.dataset.type === filter) {
            c.style.display = '';
          } else {
            c.style.display = 'none';
          }
        });
      }
    });

    // Keyboard on channel cards
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        var chCard = e.target.closest('.ch[data-category]');
        if (chCard) { e.preventDefault(); openProductModal(chCard.dataset.category); }
      }
    });

    /* =====================================================
       PAGE FEATURES INIT
    ===================================================== */
    function initPageFeatures() {
      initStatsCounter();
      initContactForm();
      initHeroTyping();
      initHeroSlideshow();
      // Keyboard accessibility for cards
      document.querySelectorAll('[role="link"][tabindex="0"]').forEach(function(el) {
        el.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); }
        });
      });
      initHeroOPulse();
    }

    function initHeroOPulse() {
      var dot = document.querySelector('.hero-o-dot');
      if (!dot) return;
      setTimeout(function() { dot.classList.add('pulsing'); }, 3600);
    }

    function initScrollReveals() {
      var revealEls = document.querySelectorAll('.rv, .rv-left, .rv-right, .rv-scale');
      if (!revealEls.length) return;
      var io = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
          if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target); }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
      revealEls.forEach(function(el) { io.observe(el); });
    }

    function initLazyImages() {
      document.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
        if (img.complete && img.naturalWidth > 0) {
          img.classList.add('loaded');
        } else {
          img.addEventListener('load', function() { img.classList.add('loaded'); });
          img.addEventListener('error', function() { img.classList.add('loaded'); img.classList.add('img-fallback'); });
          // 안전장치: 3초 후에도 loaded 안 되면 강제 표시
          setTimeout(function() { if (!img.classList.contains('loaded')) img.classList.add('loaded'); }, 3000);
        }
      });
    }

    /* Stats counter */
    function initStatsCounter() {
      var statsBs = document.querySelectorAll('[data-count]');
      if (!statsBs.length) return;
      statsBs.forEach(function(el) { el.textContent = '0'; });
      var statsObs = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
          if (e.isIntersecting) {
            statsObs.unobserve(e.target);
            var els = e.target.querySelectorAll ? e.target.querySelectorAll('[data-count]') : [e.target];
            if (!els.length && e.target.dataset.count) els = [e.target];
            els.forEach(function(el) {
              var target = parseInt(el.dataset.count);
              var suffix = el.dataset.suffix || '';
              var start = performance.now();
              function anim(now) {
                var p = Math.min((now - start) / 2000, 1);
                var eased = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.round(eased * target) + (p >= 1 ? suffix : '');
                if (p < 1) requestAnimationFrame(anim);
              }
              requestAnimationFrame(anim);
            });
          }
        });
      }, { threshold: 0.5 });
      var statsContainer = document.querySelector('.stats');
      if (statsContainer) statsObs.observe(statsContainer);
      else statsBs.forEach(function(el) { statsObs.observe(el); });
    }

    /* Hero typing */
    function initHeroTyping() {
      var heroTag = document.getElementById('heroTag');
      if (!heroTag) return;
      var text = heroTag.textContent;
      heroTag.textContent = '';
      heroTag.style.borderRight = '1px solid var(--text2)';
      var i = 0;
      function type() {
        if (i < text.length) {
          heroTag.textContent += text[i]; i++;
          setTimeout(type, 55 + Math.random() * 35);
        } else { setTimeout(function() { heroTag.style.borderRight = 'none'; }, 800); }
      }
      setTimeout(type, 3200);
    }

    /* Hero slideshow */
    var heroSlideInterval = null;
    function initHeroSlideshow() {
      var slides = document.querySelectorAll('.hero-slide');
      var caption = document.getElementById('heroCaption');
      if (!slides.length || slides.length < 2) return;
      var captions = ['Hiromi Sonicwonder 2026 — 마포아트센터', 'Dominick Jocker — KBS 아레나'];
      var idx = 0;
      if (heroSlideInterval) clearInterval(heroSlideInterval);
      heroSlideInterval = setInterval(function() {
        slides[idx].classList.remove('active');
        idx = (idx + 1) % slides.length;
        slides[idx].classList.add('active');
        if (caption) {
          caption.classList.remove('active');
          setTimeout(function() { caption.textContent = captions[idx]; caption.classList.add('active'); }, 300);
        }
      }, 2500);
      if (caption) { caption.textContent = captions[0]; caption.classList.add('active'); }
    }

    /* Contact form */
    function initContactForm() {
      var form = document.getElementById('contactForm');
      if (!form) return;
      form.addEventListener('submit', function(e) {
        var btn = form.querySelector('#submitCta');
        if (btn) btn.classList.add('loading');
        if (typeof gtag === 'function') {
          var budget = (form.querySelector('[name="budget"]') || {}).value || '';
          var eventType = (form.querySelector('[name="event_type"]') || {}).value || '';
          gtag('event', 'generate_lead', { event_category: 'contact', event_label: eventType, value: budget });
        }
      });
    }

    // GA4: track tel clicks, CTA clicks, portfolio views
    document.addEventListener('click', function(e) {
      if (typeof gtag !== 'function') return;
      var tel = e.target.closest('a[href^="tel:"]');
      if (tel) gtag('event', 'click_to_call', { event_category: 'engagement' });
      var cta = e.target.closest('.hero-cta, .btn-primary, .cta-sm, .cta-sm-primary');
      if (cta) gtag('event', 'cta_click', { event_category: 'engagement', event_label: cta.textContent.trim().substring(0, 30) });
      var card = e.target.closest('.portfolio-card[data-project]');
      if (card) gtag('event', 'view_item', { event_category: 'portfolio', event_label: card.getAttribute('data-project') });
    });

    /* =====================================================
       PRELOADER
    ===================================================== */
    window.addEventListener('load', function() {
      setTimeout(function() {
        document.getElementById('preloader').classList.add('done');
      }, 800);
    });

    /* =====================================================
       CURSOR GLOW
    ===================================================== */
    var glow = document.querySelector('.cursor-glow');
    if (glow && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      var gx = 0, gy = 0, cx = 0, cy = 0;
      document.addEventListener('mousemove', function(e) { gx = e.clientX; gy = e.clientY; }, { passive: true });
      (function glowLoop() {
        cx += (gx - cx) * 0.05;
        cy += (gy - cy) * 0.05;
        glow.style.left = cx + 'px';
        glow.style.top = cy + 'px';
        requestAnimationFrame(glowLoop);
      })();
    }

    /* =====================================================
       SCROLL HANDLER
    ===================================================== */
    var navEl = document.getElementById('mainNav');
    var scrollProg = document.getElementById('scrollProgress');
    var stickyCta = document.getElementById('stickyCta');
    var backToTop = document.getElementById('backToTop');
    var ticking = false;

    function onScroll() {
      var s = window.scrollY;
      var vh = window.innerHeight;

      // Hero parallax (only on home)
      var heroEl = document.querySelector('.hero');
      if (heroEl && s < vh) {
        heroEl.style.opacity = 1 - (s / vh) * 0.5;
        heroEl.style.transform = 'translateY(' + (s * 0.15) + 'px)';
      }

      navEl.classList.toggle('scrolled', s > 60);

      var docH = document.documentElement.scrollHeight - vh;
      if (docH > 0) scrollProg.style.width = (s / docH * 100) + '%';

      if (stickyCta) stickyCta.classList.toggle('show', s > vh * 0.5);
      if (backToTop) backToTop.classList.toggle('show', s > vh * 0.8);

      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });

    if (backToTop) {
      backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    /* =====================================================
       MOBILE MENU
    ===================================================== */
    var navToggle = document.getElementById('navToggle');
    var mobileMenu = document.getElementById('mobileMenu');

    function closeMobile() {
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }

    navToggle.addEventListener('click', function() {
      var isOpen = navToggle.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        if (mobileMenu.classList.contains('open')) closeMobile();
        if (document.getElementById('lightbox').classList.contains('open')) closeLightbox();
        if (document.getElementById('productModal').classList.contains('open')) closeProductModal();
        if (document.getElementById('galleryViewer').classList.contains('open')) closeGalleryViewer();
      }
    });

    /* =====================================================
       LIGHTBOX (legacy support)
    ===================================================== */
    var lightbox = document.getElementById('lightbox');
    var lightboxContent = document.getElementById('lightboxContent');
    var lightboxClose = document.getElementById('lightboxClose');

    function openLightbox(projectId) {
      var data = projectData[projectId];
      if (!data) return;
      var html = '<h3 class="lightbox-title">' + data.title + '</h3>';
      html += '<p class="lightbox-desc">' + data.desc + '</p>';
      html += '<div class="lightbox-gallery">';
      data.media.forEach(function(item) {
        var fullClass = item.full ? ' lb-full' : '';
        if (item.type === 'video') {
          html += '<video class="' + fullClass + '" controls preload="metadata"><source src="' + item.src + '" type="video/mp4"></video>';
        } else {
          html += '<img class="' + fullClass + '" src="' + item.src + '" alt="' + escHtml(item.alt || '') + '" loading="lazy" decoding="async" data-gallery-img>';
        }
      });
      html += '</div>';
      lightboxContent.innerHTML = html;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
      initLazyImages();
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
      lightboxContent.querySelectorAll('video').forEach(function(v) { v.pause(); });
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) { if (e.target === lightbox) closeLightbox(); });

    /* =====================================================
       GALLERY VIEWER (fullscreen)
    ===================================================== */
    var galleryViewer = document.getElementById('galleryViewer');
    var galleryViewerImg = document.getElementById('galleryViewerImg');
    var galleryCounter = document.getElementById('galleryCounter');
    var galleryImages = [];
    var galleryIndex = 0;
    var touchStartX = 0;

    function openGalleryFromDetail(clickedImg) {
      var container = clickedImg.closest('.portfolio-detail-gallery, .lightbox-gallery');
      if (!container) return;
      galleryImages = Array.from(container.querySelectorAll('img'));
      galleryIndex = galleryImages.indexOf(clickedImg);
      if (galleryIndex < 0) galleryIndex = 0;
      showGalleryImage();
      galleryViewer.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function showGalleryImage() {
      if (!galleryImages[galleryIndex]) return;
      galleryViewerImg.src = galleryImages[galleryIndex].src;
      galleryViewerImg.alt = galleryImages[galleryIndex].alt || '';
      galleryCounter.textContent = (galleryIndex + 1) + ' / ' + galleryImages.length;
    }

    function closeGalleryViewer() {
      galleryViewer.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.getElementById('galleryViewerClose').addEventListener('click', closeGalleryViewer);
    document.getElementById('galleryPrev').addEventListener('click', function() {
      galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
      showGalleryImage();
    });
    document.getElementById('galleryNext').addEventListener('click', function() {
      galleryIndex = (galleryIndex + 1) % galleryImages.length;
      showGalleryImage();
    });
    galleryViewer.addEventListener('click', function(e) { if (e.target === galleryViewer) closeGalleryViewer(); });

    // Swipe support
    galleryViewer.addEventListener('touchstart', function(e) { touchStartX = e.touches[0].clientX; }, { passive: true });
    galleryViewer.addEventListener('touchend', function(e) {
      var diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) { galleryIndex = (galleryIndex + 1) % galleryImages.length; }
        else { galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length; }
        showGalleryImage();
      }
    }, { passive: true });

    // Keyboard nav for gallery
    document.addEventListener('keydown', function(e) {
      if (!galleryViewer.classList.contains('open')) return;
      if (e.key === 'ArrowLeft') { galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length; showGalleryImage(); }
      if (e.key === 'ArrowRight') { galleryIndex = (galleryIndex + 1) % galleryImages.length; showGalleryImage(); }
    });

    /* =====================================================
       PRODUCT MODAL
    ===================================================== */
    var productModal = document.getElementById('productModal');
    var productModalContent = document.getElementById('productModalContent');
    var productModalClose = document.getElementById('productModalClose');
    var currentProductCategory = null;

    function openProductModal(category) {
      currentProductCategory = category;
      renderProductList(category);
      productModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      productModal.scrollTop = 0;
    }

    function closeProductModal() {
      productModal.classList.remove('open');
      document.body.style.overflow = '';
      currentProductCategory = null;
    }

    function renderProductList(category) {
      var cat = productData[category];
      if (!cat) return;
      var html = '<div class="pm-header"><div class="pm-category-icon">' + cat.icon + '</div><h3 class="pm-title">' + cat.title + '</h3><p class="pm-subtitle">' + cat.subtitle + '</p></div>';
      html += '<div class="pm-grid">';
      cat.products.forEach(function(p, i) {
        var hasImg = !!p.image;
        html += '<div class="pm-card' + (hasImg ? ' has-image' : '') + '" onclick="showProductDetail(\'' + category + '\',' + i + ')">';
        if (hasImg) html += '<img class="pm-card-img" src="' + p.image + '" alt="' + escHtml(p.name) + '" loading="lazy" decoding="async">';
        if (hasImg) html += '<div class="pm-card-body">';
        if (!hasImg) html += '<div class="pm-card-icon">' + (p.icon || '') + '</div>';
        html += '<div class="pm-card-name">' + escHtml(p.name) + '</div>';
        html += '<div class="pm-card-desc">' + escHtml(p.desc ? p.desc.split('\n')[0] : '') + '</div>';
        html += '<div class="pm-card-prices"><div class="pm-card-price">' + p.price + '</div>';
        if (p.originalPrice) html += '<div class="pm-card-price-original">' + p.originalPrice + '</div>';
        html += '</div>';
        html += '<span class="pm-card-btn" onclick="event.stopPropagation(); goToContactFromModal();">문의하기</span>';
        if (hasImg) html += '</div>';
        html += '</div>';
      });
      html += '</div>';
      productModalContent.innerHTML = html;
    }

    // Make these global for onclick
    window.showProductDetail = function(category, index) {
      var cat = productData[category];
      if (!cat) return;
      var p = cat.products[index];
      if (!p) return;
      var html = '<div class="pm-detail">';
      html += '<button class="pm-detail-back" onclick="renderProductList(\'' + category + '\'); document.getElementById(\'productModal\').scrollTop=0;">\u2190 뒤로</button>';
      if (p.image) html += '<img class="pm-detail-img" src="' + p.image + '" alt="' + escHtml(p.name) + '">';
      else html += '<div class="pm-detail-icon">' + (p.icon || '') + '</div>';
      html += '<h3 class="pm-detail-name">' + escHtml(p.name) + '</h3>';
      html += '<p class="pm-detail-desc">' + escHtml(p.desc) + '</p>';
      html += '<div class="pm-detail-pricing"><div class="pm-detail-price">' + p.price + '</div>';
      if (p.originalPrice) html += '<div class="pm-detail-price-original">' + p.originalPrice + '</div>';
      html += '</div>';
      if (p.specs && p.specs.length) {
        html += '<div class="pm-detail-specs"><div class="pm-detail-specs-title">장비 구성</div><ul>';
        p.specs.forEach(function(s) { html += '<li>' + escHtml(s) + '</li>'; });
        html += '</ul></div>';
      }
      html += '<button class="pm-detail-cta" onclick="goToContactFromModal()">문의하기</button></div>';
      productModalContent.innerHTML = html;
      productModal.scrollTop = 0;
    };

    window.renderProductList = renderProductList;

    window.goToContactFromModal = function() {
      closeProductModal();
      setTimeout(function() { navigateTo('/contact'); }, 150);
    };

    window.navigateTo = navigateTo;

    productModalClose.addEventListener('click', closeProductModal);
    productModal.addEventListener('click', function(e) { if (e.target === productModal) closeProductModal(); });

    /* =====================================================
       3D TILT (desktop only)
    ===================================================== */
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      document.addEventListener('mousemove', function(e) {
        var cards = document.querySelectorAll('.portfolio-card, .ch');
        cards.forEach(function(card) {
          var rect = card.getBoundingClientRect();
          if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) return;
          var x = (e.clientX - rect.left) / rect.width - 0.5;
          var y = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = 'perspective(800px) rotateY(' + (x * 4) + 'deg) rotateX(' + (-y * 4) + 'deg) translateY(-4px)';
        });
      }, { passive: true });
      document.addEventListener('mouseleave', function() {
        document.querySelectorAll('.portfolio-card, .ch').forEach(function(c) { c.style.transform = ''; });
      });
    }

    /* =====================================================
       PARALLAX ON PORTFOLIO IMAGES (desktop)
    ===================================================== */
    if (window.matchMedia('(hover: hover)').matches) {
      window.addEventListener('scroll', function() {
        var cards = document.querySelectorAll('.portfolio-card');
        cards.forEach(function(card) {
          var rect = card.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > window.innerHeight) return;
          var center = rect.top + rect.height / 2;
          var offset = ((center - window.innerHeight / 2) / window.innerHeight) * -15;
          var img = card.querySelector('.card-img');
          if (img) img.style.transform = 'scale(1.05) translateY(' + offset + 'px)';
        });
      }, { passive: true });
    }

    /* =====================================================
       INITIAL RENDER
    ===================================================== */
    renderInitial();

  })();
