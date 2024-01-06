import React from "react";
import DateComponent from "./헤더 날짜/today";

const headerStyles = {
  topContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    padding: "10px 0",
    borderBottom: "1px solid #e2e2e2",
  },
  menuIconbox: {
    maxWidth: "20px",
  },
  icon: {
    width: "100%",
    cursor: "pointer",
    display: "block",
  },
  logoPngBox: {
    maxWidth: "48%",
  },
  logo: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  emptyBox: {
    maxWidth: "20px",
  },
  empty: {
    width: "100%",
    height: "auto",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 0px",
    paddingBottom: "10px",
    borderBottom: "thick double #020d11",
  },
  categories: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 60px 10px 10px",
    display: "flex",
    fontSize: "0.75rem",
  },
  LoginIconBox: {
    maxWidth: "20px",
  },
  LoginUserIcon: {
    width: "100%",
    cursor: "pointer",
  },
  category: {
    margin: "0.5rem",
    color: "#000",
    cursor: "pointer",
    border: "none",
  },
  todaysPaper: {
    margin: "0",
    fontSize: "0.75rem",
  },
};

function Header() {
  return (
    <header>
      <div style={headerStyles.topContainer}>
        <div style={headerStyles.menuIconbox}>
          <img src="menu.svg" alt="menu" style={headerStyles.icon} />
        </div>
        <div style={headerStyles.logoPngBox}>
          <img src="logo.png" alt="Logo" style={headerStyles.logo} />
        </div>
        <div style={headerStyles.emptyBox}>
          <div style={headerStyles.empty}></div>
        </div>
      </div>
      <div style={headerStyles.container}>
        <div style={headerStyles.headerLeftRight}>
          <DateComponent />
          <p style={headerStyles.todaysPaper}>Today's Paper</p>
        </div>
        <div style={headerStyles.categories}>
          <div style={headerStyles.category}>U.S.</div>
          <div style={headerStyles.category}> World</div>
          <div style={headerStyles.category}>Business</div>
          <div style={headerStyles.category}>Arts</div>
          <div style={headerStyles.category}>Lifestyle</div>
        </div>
        <div style={headerStyles.LoginIconBox}>
          <img src="user.svg" alt="user" style={headerStyles.LoginUserIcon} />
        </div>
      </div>
    </header>
  );
}

export default Header;
/////////////////////////////////////////////////
// //
// 사용 예시
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Header from './Header'; // 프로젝트 구조에 맞게 경로를 조정하십시오

// function App() {
//   // 나머지 애플리케이션 컴포넌트와 로직을 이곳에 정의합니다.
//   // App 컴포넌트 내에서 다른 컴포넌트를 포함시킬 수 있습니다.
//   return (
//     <div>
//       <Header />
//       {/* 다른 컴포넌트를 이곳에서 렌더링합니다. */}
//     </div>
//   );
// }

// // root 요소 내에서 App 컴포넌트를 렌더링합니다.
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
