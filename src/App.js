import  {Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            string: "Hello Tony"
        };
    }
  render(){
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
              <p>{this.state.string}</p>
              <button>Change Text</button>
          </header>
        </div>
    )
  }
}

export default App;
