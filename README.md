# Redux React Todolist

Redux를 사용하여 만든 간단한 Todolist 프로젝트입니다.  
<br />

## Environment

```
  node v.16.16.0
```

  <br />

## Usage

```
  yarn install
  yarn start
```

  <br />

## Package

- redux
- react-redux
- react-router-dom
- styled-components  
  <br />

## 주요 기능

- Todo 작성
- Todo 상세 보기
- Todo 삭제
- Todo 완료 · 취소 하기  
  <br />

## 폴더 구조

<hr />

📦src  
 ┣ 📂components  
 ┃ ┣ 📂layout  
 ┃ ┃ ┗ 📜Layout.jsx  
 ┃ ┣ 📜Button.jsx  
 ┃ ┣ 📜Detail.jsx  
 ┃ ┣ 📜Form.jsx  
 ┃ ┣ 📜Header.jsx  
 ┃ ┣ 📜List.jsx  
 ┃ ┗ 📜Todo.jsx  
 ┣ 📂pages  
 ┃ ┣ 📜TodoDetail.jsx  
 ┃ ┗ 📜TodoList.jsx  
 ┣ 📂redux  
 ┃ ┣ 📂config  
 ┃ ┃ ┗ 📜configStore.js  
 ┃ ┗ 📂modules  
 ┃ ┃ ┗ 📜todos.js  
 ┣ 📂shared  
 ┃ ┗ 📜Router.js  
 ┣ 📜App.js  
 ┣ 📜index.css  
 ┗ 📜index.js

 <br />

- ### components 폴더
  - 레이아웃 관련 컴포넌트
  - button이나 todo 등과 같이 재사용 가능한 컴포넌트
- ### pages 폴더
  - 라우터를 이용해서 들어가면 뜨는 페이지 별로 분리
- ### redux 폴더
  - redux와 관련된 폴더
  - config 폴더는 redux와 관련된 셋팅을 설정하고 이를 App과 연결해주는 역할
  - modules 폴더의 파일들은 리듀서와 액션관련 코드를 하나로 묶어주는 역할
- ### shared 폴더
  - Router.js 파일을 만들어 이 곳에 모든 라우터를 설정하는 역할
  - Router.js 에서 pages 폴더에 있는 페이지들을 라우터로 설정
