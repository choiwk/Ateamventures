<h1 align= "center"> Ateamventures CAPA 파트너스 페이지 구현 과제</h1>

### :house: 배포 URL
http://team13-ateamventures.s3-website.ap-northeast-2.amazonaws.com/

![캡쳐](https://user-images.githubusercontent.com/85682854/153013320-ec2a7f83-6849-44c8-affd-3257a817bb16.png)

<br/>

### 🏗 프로젝트 구조도

```html
.
├── App.tsx
├── assets
│   ├── arrow.png
│   ├── assets.ts
│   ├── logo.png
│   ├── menu.png
│   ├── refresh.png
│   └── vector.png
├── components
│   ├── Filtering
│   │   ├── CheckBox.tsx
│   │   └── Filter.tsx
│   ├── Header
│   │   ├── Header.tsx
│   │   └── Toggle.tsx
│   ├── Navbar
│   │   ├── MobileMenu.tsx
│   │   ├── Navbar.tsx
│   │   └── styles.scss
│   ├── Requestcard
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── RequestCard.tsx
│   │   ├── RequestCardContainer.tsx
│   │   └── styles.scss
│   └── nothing
│       ├── Nothing.tsx
│       └── style.scss
├── index.tsx
├── react-app-env.d.ts
├── styles
│   ├── App.css
│   ├── Badge.scss
│   ├── ChatBtn.scss
│   ├── Filter.scss
│   ├── Header.scss
│   ├── Navbar.scss
│   ├── RequestBtn.scss
│   ├── RequestCard.scss
│   ├── Toggle.scss
│   └── global-style.scss
└── utils
    ├── actions.ts
    ├── axios.ts
    ├── constants
    │   ├── filterOption.ts
    │   ├── material.ts
    │   └── method.ts
    └── types.ts
```

### :exclamation: 설치방법
~~~
1. npm install
2. npx json-server db.json
3. npm start
~~~



### :clapper: 구현내용

#### 1. 필터링
~~~
- 상담 중인 요청만 보는 기능
- 가공방식 / 재료를 선택시(다중선택 가능) 해당 조건에 맞는 견적만 필터링하는 기능
- 필터링 리셋하는 기능
- 조건에 맞는 견적 요청이 없을 시 요청카드에 '조건에 맞는 견적 요청이 없습니다'가 뜨는 기능
~~~

#### 2. 요청 카드
~~~
- json server로 받아온 목 데이터 mapping
- 상담중인 고객사는 '상담중' 뱃지가 보이는 기능
- 카드 hover시 보더 스타일
~~~

#### 3. 반응형
~~~
- 360px에 맞춰 모바일버전으로 변하는 기능
- 햄버거 메뉴 아이콘 클릭시 메뉴 화면이 생기는 기능
- 백그라운드 영역 탭시 메뉴 close되는 기능
~~~

