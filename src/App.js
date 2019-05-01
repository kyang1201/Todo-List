
import React, { Component } from 'react'
import logo from './logo.svg';
import { FirstComponent } from './components/example/FirstComponent'
import './App.css';

// function App() {
//   return (
//       <div className="App">
//         <h1>Hello World</h1>
//       </div>
//   );
// }

//class component
class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World
        <FirstComponent></FirstComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

//function component
function ThirdComponent() {
  return (
    <div className="ThirdComponent">
      ThirdComponent
    </div>
  );
}

export default App;
