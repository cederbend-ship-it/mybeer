# Beer Finder — Cloudflare Pages

정적 HTML/CSS/JavaScript로 동작하는 맥주 취향 추천 서비스입니다. 별도의 서버, DB, 로그인 없이 Cloudflare Pages에 그대로 배포할 수 있습니다.

## 파일 구조

- `index.html`: 메인 화면과 SEO 기본 설정
- `styles.css`: Windows 11 / Fluent UI 스타일
- `app.js`: 객관식 질문, 취향 프로필 계산, 맥주 매칭, 결과 화면
- `beer-data.js`: 맥주 데이터베이스. **맥주 추가·수정은 이 파일에서만 하는 것을 권장합니다.**
- `about.html`: 사이트 소개 및 추천 방식 안내
- `privacy.html`: 개인정보처리방침
- `robots.txt`, `sitemap.xml`: 검색엔진 기본 설정

## 맥주 데이터 운영

국내 브루어리 제품을 별도 필드(`domestic`, `brewery`, `availability`)로 관리합니다. 국내 제품은 공식 브루어리 페이지, 국내 유통/판매 정보 등에서 확인한 이름·제품 특성을 바탕으로 구성했습니다.

`bitterness`, `body`, `hopAroma`, `roast`, `sour`, `fruit`, `carbonation`은 **추천 엔진용 0~10 편집 점수**이며 공인 관능평가 점수가 아닙니다. ABV와 IBU 등 제품 수치는 생산 배치·제품 개편·판매 시점에 따라 달라질 수 있으므로 게시 전 최신 제품 페이지를 확인하는 것이 좋습니다.

국내 구매 가능 여부는 전국 단위의 '유통/판매 사례가 있는 제품'을 중심으로 구성했으며, **실제 재고는 지역·판매처·시점에 따라 달라질 수 있습니다.**

## 수정할 필요가 없는 이유

맥주를 추가할 때 아래 예시처럼 `beer-data.js`의 `BEERS` 배열에 객체를 하나 추가하면 됩니다.

```js
{
  id:'sample-beer',
  name:'샘플 맥주',
  style:'IPA',
  country:'대한민국',
  brewery:'예시 브루어리',
  emoji:'🌿',
  abv:5.8,
  bitterness:6,
  body:5,
  hopAroma:8,
  roast:0,
  sour:1,
  fruit:7,
  carbonation:6,
  domestic:true,
  description:'맥주의 맛과 향을 간단히 설명합니다.',
  availability:'국내 판매처에서 확인 가능 · 재고는 변동될 수 있음'
}
```

## 배포

Cloudflare Pages에서 별도 빌드 없이 `beer-finder` 폴더를 정적 사이트로 배포하면 됩니다.

배포 전 `index.html`, `about.html`, `privacy.html`, `sitemap.xml`의 `https://example.com/`을 실제 도메인으로 변경하고 문의 이메일도 실제 주소로 변경하세요.
