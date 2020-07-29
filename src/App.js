import React, { Component } from 'react';
import './App.css'
import MyName from './MyName'
import Counter from './counter';
class App extends Component {
  render() {
    return (
      <Counter/>
    );
  }
}

export default App;
// 우리가 작성한 컴포넌트를 다른 곳에서 불러와서 사용 할 수 있도록 내보내기를 해줍니다.
