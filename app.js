(() => {
  const QUESTIONS = [
    {
      id: 'base',
      title: '가장 먼저, 어떤 스타일이 끌리나요?',
      sub: '오늘 마시고 싶은 맥주의 큰 방향을 골라주세요.',
      options: [
        {emoji:'🍺',title:'깔끔하고 시원한 라거',desc:'청량하고 마무리가 깨끗한 쪽',weights:{body:2,carbonation:2,bitterness:-1}},
        {emoji:'🌿',title:'홉 향이 선명한 에일',desc:'향긋하고 개성 있는 쪽',weights:{hopAroma:3,bitterness:2,fruit:1}},
        {emoji:'🍫',title:'진하고 로스팅된 흑맥주',desc:'커피·초콜릿처럼 깊은 쪽',weights:{roast:4,body:2}},
        {emoji:'🌾',title:'부드러운 밀맥주',desc:'고소하고 과일 향이 나는 쪽',weights:{fruit:3,body:1,carbonation:1}},
        {emoji:'🍒',title:'새콤한 사워·과일맥주',desc:'상쾌하고 산뜻한 쪽',weights:{sour:5,fruit:3}},
        {emoji:'✨',title:'높은 도수의 개성파',desc:'풍부하고 복합적인 쪽',weights:{body:3,fruit:2,bitterness:1}}
      ]
    },
    {
      id:'bitterness', title:'쓴맛은 어느 정도까지 괜찮나요?', sub:'홉에서 오는 쌉쌀함을 기준으로 골라주세요.',
      options:[
        {emoji:'💧',title:'거의 없는 게 좋아요',desc:'부드럽고 편하게 넘어가는 쪽',weights:{bitterness:-4}},
        {emoji:'🌱',title:'살짝 느껴지는 정도',desc:'깔끔한 쌉쌀함이면 충분해요',weights:{bitterness:-1,hopAroma:1}},
        {emoji:'🌿',title:'분명하게 느껴져도 좋아요',desc:'홉 캐릭터가 있는 게 좋아요',weights:{bitterness:3,hopAroma:2}},
        {emoji:'🌲',title:'강한 쓴맛도 환영해요',desc:'IPA처럼 확실한 홉을 원해요',weights:{bitterness:6,hopAroma:2}}
      ]
    },
    {
      id:'aroma', title:'향은 어떤 쪽이 더 좋나요?', sub:'코로 느끼는 첫인상을 기준으로 선택하세요.',
      options:[
        {emoji:'🍋',title:'시트러스·열대과일',desc:'레몬, 오렌지, 망고 같은 향',weights:{hopAroma:3,fruit:3}},
        {emoji:'🌸',title:'꽃·허브·풀',desc:'플로럴하고 싱그러운 향',weights:{hopAroma:3}},
        {emoji:'🍌',title:'바나나·향신료',desc:'효모에서 오는 과일·스파이스 향',weights:{fruit:4}},
        {emoji:'☕',title:'커피·초콜릿·토스트',desc:'구운 곡물과 로스팅 향',weights:{roast:5,body:2}},
        {emoji:'🍒',title:'와인·붉은 과일·새콤함',desc:'복합적인 산미와 과실 향',weights:{sour:4,fruit:4}},
        {emoji:'🧊',title:'향보다 깔끔함',desc:'향이 튀지 않고 깨끗한 인상',weights:{hopAroma:-2,fruit:-1,carbonation:2}}
      ]
    },
    {
      id:'body', title:'입안의 무게감은 어느 쪽인가요?', sub:'맥주가 얼마나 묵직하게 느껴지는지를 골라주세요.',
      options:[
        {emoji:'🫧',title:'가볍고 산뜻하게',desc:'목넘김이 가벼운 쪽',weights:{body:-4,carbonation:2}},
        {emoji:'🥖',title:'적당히 부드럽게',desc:'너무 가볍지도 무겁지도 않게',weights:{body:0}},
        {emoji:'🍞',title:'몰티하고 풍성하게',desc:'곡물·빵 같은 바디감을 좋아해요',weights:{body:4}},
        {emoji:'🍫',title:'아주 진하고 묵직하게',desc:'한 모금의 존재감이 큰 쪽',weights:{body:7,roast:2}}
      ]
    },
    {
      id:'sour', title:'산미는 얼마나 좋아하나요?', sub:'레몬·요거트·식초처럼 느껴질 수 있는 새콤함을 기준으로 선택하세요.',
      options:[
        {emoji:'🙂',title:'없는 편이 좋아요',desc:'깨끗하고 달지 않은 마무리',weights:{sour:-4}},
        {emoji:'🍋',title:'살짝 있으면 좋아요',desc:'상쾌함을 더해주는 정도',weights:{sour:1}},
        {emoji:'🍒',title:'확실히 느껴져도 좋아요',desc:'사워의 매력이 있다고 느껴요',weights:{sour:5,fruit:2}},
        {emoji:'🫐',title:'강한 산미가 취향이에요',desc:'람빅처럼 개성 강한 쪽도 좋아요',weights:{sour:9,fruit:3}}
      ]
    },
    {
      id:'strength', title:'도수는 어떻게 생각하나요?', sub:'평소 찾는 음주의 강도를 골라주세요.',
      options:[
        {emoji:'🪶',title:'가벼운 게 좋아요',desc:'편하게 오래 마실 수 있는 쪽',weights:{abv:-2,body:-1}},
        {emoji:'⚖️',title:'보통이면 충분해요',desc:'4~6% 정도의 균형',weights:{abv:0}},
        {emoji:'🔥',title:'조금 높은 게 좋아요',desc:'6~8% 정도의 풍미 있는 맥주',weights:{abv:2,body:2}},
        {emoji:'✨',title:'높은 도수를 선호해요',desc:'8% 이상도 즐겨요',weights:{abv:5,body:2,fruit:1}}
      ]
    },
    {
      id:'moment', title:'마지막으로, 어떤 장면에 가까운가요?', sub:'지금 원하는 경험을 한 가지 골라주세요.',
      options:[
        {emoji:'🧊',title:'더운 날 가볍게',desc:'시원하고 청량한 한 잔',weights:{carbonation:3,body:-2,bitterness:-1}},
        {emoji:'🍕',title:'음식과 함께',desc:'여러 음식에 무난하게 곁들이기',weights:{bitterness:1,body:0,carbonation:2}},
        {emoji:'🎧',title:'천천히 향을 즐기며',desc:'한 잔의 복합적인 풍미에 집중',weights:{hopAroma:2,fruit:2,body:2}},
        {emoji:'🌙',title:'밤에 진한 한 잔',desc:'로스팅·몰트와 묵직함을 즐기기',weights:{roast:4,body:3,abv:1}},
        {emoji:'🧪',title:'새로운 맛을 탐험',desc:'평소와 다른 개성적인 맥주',weights:{sour:2,fruit:2,hopAroma:2,bitterness:1}}
      ]
    }
  ];

  const state = { step: 0, answers: [] };
  const els = {
    start: document.getElementById('startTest'), modal: document.getElementById('testModal'), close: document.getElementById('closeTest'), stage: document.getElementById('questionStage'),
    progressText: document.getElementById('progressText'), progressHint: document.getElementById('progressHint'), progressBar: document.getElementById('progressBar'), back: document.getElementById('backButton'), next: document.getElementById('nextButton')
  };

  function openTest() {
    state.step = 0; state.answers = [];
    els.modal.hidden = false;
    document.body.style.overflow='hidden';
    renderStep();
  }
  function closeTest() {
    els.modal.hidden = true;
    document.body.style.overflow='';
  }
  function renderStep() {
    const q = QUESTIONS[state.step];
    const answer = state.answers[state.step];
    els.progressText.textContent = `${state.step + 1} / ${QUESTIONS.length}`;
    els.progressHint.textContent = state.step === 0 ? '첫 번째 선택' : '취향을 조금 더 좁혀볼게요';
    els.progressBar.style.width = `${((state.step + 1) / QUESTIONS.length) * 100}%`;
    els.back.disabled = state.step === 0;
    els.next.disabled = typeof answer !== 'number';
    els.next.textContent = state.step === QUESTIONS.length - 1 ? '결과 보기 →' : '다음 →';

    els.stage.innerHTML = `
      <div class="question-kicker">QUESTION ${String(state.step + 1).padStart(2,'0')}</div>
      <h2 id="questionTitle" class="question-title">${q.title}</h2>
      <p class="question-sub">${q.sub}</p>
      <div class="option-list" role="radiogroup" aria-label="${q.title}">
        ${q.options.map((o,i)=>`
          <button type="button" class="option-card ${answer===i?'selected':''}" data-index="${i}" role="radio" aria-checked="${answer===i}">
            <span class="option-emoji">${o.emoji}</span>
            <span class="option-text"><strong>${o.title}</strong><span>${o.desc}</span></span>
            <span class="checkmark">✓</span>
          </button>`).join('')}
      </div>`;
    els.stage.querySelectorAll('.option-card').forEach(btn => btn.addEventListener('click', () => {
      state.answers[state.step] = Number(btn.dataset.index);
      els.stage.querySelectorAll('.option-card').forEach(b=>{
        const selected = b === btn; b.classList.toggle('selected',selected); b.setAttribute('aria-checked', String(selected));
      });
      els.next.disabled = false;
    }));
  }
  function goNext() {
    if (typeof state.answers[state.step] !== 'number') return;
    if (state.step < QUESTIONS.length - 1) { state.step += 1; renderStep(); return; }
    renderResult();
  }
  function goBack() {
    if (state.step > 0) { state.step -= 1; renderStep(); }
  }
  function calculateScores() {
    const totals = {bitterness:0,body:0,hopAroma:0,roast:0,sour:0,fruit:0,carbonation:0,abv:0};
    QUESTIONS.forEach((q, qi) => {
      const ai = state.answers[qi];
      if (typeof ai !== 'number') return;
      const weights = q.options[ai].weights || {};
      Object.entries(weights).forEach(([key,val]) => { totals[key] = (totals[key]||0) + val; });
    });
    // Normalize to a broad 0~10 target for matching. Values reflect accumulated user preference, not measured palate data.
    return totals;
  }
  const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
  function preferenceProfile() {
    const t = calculateScores();
    return {
      bitterness: clamp(5 + t.bitterness*0.7,0,10), body: clamp(5 + t.body*0.65,0,10), hopAroma: clamp(5+t.hopAroma*0.65,0,10), roast: clamp(2.5+t.roast*0.7,0,10), sour: clamp(3+t.sour*0.7,0,10), fruit: clamp(4+t.fruit*0.55,0,10), carbonation: clamp(5+t.carbonation*0.5,0,10), abv: clamp(5+t.abv*0.45,3,10)
    };
  }
  function beerDistance(profile, beer) {
    const dimensions = [['bitterness',1.25],['body',1.1],['hopAroma',1.2],['roast',1.0],['sour',1.15],['fruit',1.0],['carbonation',0.75]];
    let weighted = 0, weightSum=0;
    dimensions.forEach(([k,w])=>{ weighted += Math.abs(profile[k]-beer[k])*w; weightSum += 10*w; });
    weighted += Math.abs(profile.abv - clamp(beer.abv,3,10))*1.15;
    weightSum += 10*1.15;
    return 1 - (weighted / weightSum);
  }
  function renderResult() {
    const profile = preferenceProfile();
    const ranked = BEERS.map(b=>({...b,match:beerDistance(profile,b)})).sort((a,b)=>b.match-a.match);
    const winner = ranked[0];
    const alts = ranked.slice(1,4);
    els.progressText.textContent='RESULT';
    els.progressHint.textContent='당신의 취향 프로필';
    els.progressBar.style.width='100%';
    els.back.disabled=true; els.next.disabled=false; els.next.textContent='처음부터 다시 →';
    els.next.onclick = restart;
    els.stage.innerHTML = `
      <div class="result-wrap">
        <div class="question-kicker">YOUR BEER MATCH</div>
        <div class="result-top">
          <div>
            <span class="match-badge">취향 일치 ${Math.round(winner.match*100)}%</span>
            <h2 class="result-name">${winner.name}</h2>
            <p class="result-style">${winner.domestic ? '🇰🇷 국내 브루어리' : winner.country} · ${winner.brewery ? winner.brewery + ' · ' : ''}${winner.style} · ${winner.abv.toFixed(1)}% ABV</p>
          </div>
          <div class="result-icon" aria-hidden="true">${winner.emoji}</div>
        </div>
        <div class="result-description">${winner.description}</div>${winner.domestic ? `<div class="availability-note"><strong>국내 구매 참고</strong><span>${winner.availability || '국내 판매처에서 확인 가능하나 재고는 시점에 따라 달라질 수 있습니다.'}</span></div>` : ''}
        <div class="result-stats">
          <div class="stat"><div class="stat-label">쓴맛</div><div class="stat-value">${['매우 낮음','낮음','보통','높음','매우 높음'][Math.min(4,Math.round(winner.bitterness/2.2))]}</div></div>
          <div class="stat"><div class="stat-label">바디감</div><div class="stat-value">${['가벼움','부드러움','중간','묵직함','진함'][Math.min(4,Math.round(winner.body/2.2))]}</div></div>
          <div class="stat"><div class="stat-label">향</div><div class="stat-value">${winner.hopAroma >= 8 ? '강함' : winner.hopAroma >= 5 ? '중간' : '은은함'}</div></div>
        </div>
        <div class="alternatives"><h3>같이 살펴볼 만한 맥주</h3>${alts.map(a=>`<div class="alt-item"><span>${a.emoji} ${a.name}<small class="alt-brewery">${a.domestic ? '국내 · ' + (a.brewery||'브루어리') : a.country}</small></span><small>${a.style} · ${Math.round(a.match*100)}%</small></div>`).join('')}</div>
        <p class="result-note">추천 점수는 이 서비스의 취향 데이터와 스타일 특성을 비교한 참고용 지표입니다. 제품의 실제 풍미는 생산 배치, 신선도, 보관 상태와 개인의 입맛에 따라 달라질 수 있습니다.</p>
      </div>`;
    els.stage.scrollTop=0;
  }
  function restart(){ els.next.onclick=goNext; state.step=0; state.answers=[]; renderStep(); }

  els.start.addEventListener('click',openTest); els.close.addEventListener('click',closeTest); els.back.addEventListener('click',goBack); els.next.addEventListener('click',goNext);
  els.modal.addEventListener('click',(e)=>{ if(e.target===els.modal) closeTest(); });
  document.addEventListener('keydown',(e)=>{ if(e.key==='Escape' && !els.modal.hidden) closeTest(); });
})();
