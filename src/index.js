import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 만든 컴포넌트 App을 불러온다
import './index.css';

// 첫번째 파라미터는 렌더링 할 결과물이고, 두번째 파라미터는 컴포넌트를 어떤 DOM 에 그릴지 정해줍니다.
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// public/index.html 의 root div를 찾는다.
