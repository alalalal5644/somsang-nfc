/* =========================================================
   샘플 인형 데이터
   - SOM-001 몽이 : MEMORY MODE (기본 샘플)
   - SOM-002 보리 : LOST MODE  (분실모드 화면 확인용)
   - SOM-003 두부 : MEMORY MODE (기억이 아직 적은 상태)
   데모 계정(demo@somsang.com)이 세 인형을 모두 소유합니다.
   ========================================================= */
window.SOMSANG_SAMPLES = {
  demoOwner: { id: 'demo-owner', email: 'demo@somsang.com', password: 'somsang1234' },
  plushes: [
    {
      plush_id: 'SOM-001',
      plush_name: '몽이',
      plush_image: 'nfc/img/mong.svg',
      greeting: '나와 함께한 소중한 기억을 만나보세요.',
      owner_id: 'demo-owner',
      mode: 'memory',
      lost_status: false,
      first_met_date: '2015-12-24',
      reborn_date: '2026-10-18',
      memory_text: '크리스마스 이브, 아빠가 퇴근길에 사 온 작은 강아지 인형이 몽이였어요.\n\n이사를 세 번 하고, 기숙사 생활을 하고, 처음 혼자 살게 된 방에서도 몽이는 늘 베개 옆에 있었어요. 털이 닳고 귀 한쪽에 바느질 자국이 생겼지만, 그만큼 같이 지낸 시간이 많았다는 뜻이겠죠.\n\n이제는 가방에 달고 어디든 함께 다닐 수 있게 되었어요. 앞으로도 잘 부탁해, 몽이야.',
      memory_moments: [
        { date: '2015-12-24', title: '처음 만난 날', text: '크리스마스 선물 상자 속에서 처음 만났어요.' },
        { date: '2018-08-03', title: '첫 가족 여행', text: '제주도 바다를 같이 봤어요. 캐리어 맨 위 자리는 늘 몽이 차지.' },
        { date: '2021-03-02', title: '기숙사 입사', text: '낯선 방에서 잠 못 들던 밤마다 꼭 안고 잤어요.' },
        { date: '2024-06-15', title: '첫 자취', text: '이삿짐 상자 중 가장 먼저 연 상자에 몽이가 있었어요.' }
      ],
      memory_images: [
        { url: 'nfc/img/memory-1.svg', caption: '처음 만난 크리스마스' },
        { url: 'nfc/img/memory-2.svg', caption: '제주 바다 앞에서' },
        { url: 'nfc/img/memory-3.svg', caption: '매일 밤 베개 옆' },
        { url: 'nfc/img/memory-4.svg', caption: '첫 자취방 이사 날' }
      ],
      original_image: 'nfc/img/mong-original.svg',
      reborn_image: 'nfc/img/mong-keyring.svg',
      reborn_steps: [
        { date: '2026-09-28', title: '환생 접수', text: '몽이를 솜생에 보내고 환생을 신청했어요.' },
        { date: '2026-10-02', title: '세척 · 상태 확인', text: '저온 세척 후 원단과 솜 상태를 꼼꼼히 확인했어요.' },
        { date: '2026-10-09', title: '키링 제작', text: '얼굴과 귀 원단을 살려 손바닥만 한 키링으로 다시 만들었어요.' },
        { date: '2026-10-18', title: 'NFC 기억 등록', text: '몽이의 기억을 NFC 칩에 연결하고 환생을 마쳤어요.' }
      ]
    },
    {
      plush_id: 'SOM-002',
      plush_name: '보리',
      plush_image: 'nfc/img/bori.svg',
      greeting: '하늘색 귀가 매력인 보리예요.',
      owner_id: 'demo-owner',
      mode: 'lost',
      lost_status: true,
      first_met_date: '2019-05-05',
      reborn_date: '2026-08-30',
      memory_text: '어린이날 선물로 받은 보리. (분실모드에서는 이 내용이 공개되지 않아요)',
      memory_moments: [
        { date: '2019-05-05', title: '처음 만난 날', text: '어린이날 선물로 받았어요.' }
      ],
      memory_images: [],
      original_image: 'nfc/img/mong-original.svg',
      reborn_image: 'nfc/img/bori.svg',
      reborn_steps: [
        { date: '2026-08-30', title: '환생 완료', text: '키링으로 다시 태어났어요.' }
      ]
    },
    {
      plush_id: 'SOM-003',
      plush_name: '두부',
      plush_image: 'nfc/img/dubu.svg',
      greeting: '말랑말랑 두부의 기억 보관함이에요.',
      owner_id: 'demo-owner',
      mode: 'memory',
      lost_status: false,
      first_met_date: '2022-11-11',
      reborn_date: '2026-11-01',
      memory_text: '',
      memory_moments: [],
      memory_images: [],
      original_image: '',
      reborn_image: 'nfc/img/dubu.svg',
      reborn_steps: []
    }
  ],
  messages: [
    {
      id: 'msg-sample-1',
      plush_id: 'SOM-002',
      message: '안녕하세요! 2호선 강남역 11번 출구 근처 벤치에서 보리를 발견했어요. 지금 역 안 유실물센터에 맡겨두었습니다.',
      finder_contact: '',
      found_location: '강남역 11번 출구',
      is_read: false,
      created_at: '2026-11-08T10:24:00+09:00'
    }
  ]
};
