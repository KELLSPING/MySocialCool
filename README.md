# Learn Social-cool app

## Learning Resource
- https://www.youtube.com/playlist?list=PLddLA9QpG2T2__tPfi6nwaL8Rf_wWQaz7
- https://react.dev/
    1. https://react.dev/learn

## Dev tools
- VSCode
- nodejs-lts 20.10.0
- npm 10.2.3
- React.js
- Firebase
  - Firestore : 發表文章、文章主題、留言、按讚、收藏
  - Storage : 文章圖片、會員頭像
  - Authentication : 會員註冊、會員登入、會員資料
  - Hosting : 網站部屬
  - Extensions : 留言通知(Email)、文章搜尋(Algoliz)
- Semantic UI React
- JSX

## cmd
- $ npm init -y
- $ npm install react-scripts react react-dom
  - react : "18.2.0"
  - react-dom : "18.2.0"
  - react-scripts : "5.0.1"
- $ npm start
  - "start": "react-scripts start"
  - 有即時監聽的功能
- $ npm install semantic-ui-react semantic-ui-css react-router-dom

## Notes
- React 是單頁式應用程式（single-page application, SPA），只會有一個 html 檔案。
- React.Component
- 須在 App.js 中使用 BrowserRouter 元件 ，之後才能在 Header.js 中使用 Link 元件。

## Others
- 快速建立新的 React 專案的命令
    1. npx create-react-app my-react-app
    2. cd my-react-app
    3. npm start