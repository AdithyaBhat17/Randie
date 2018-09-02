import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      passwords:[]
    }
  }

  componentDidMount(){
    this.getPasswords()
  }

  getPasswords = () => {
    fetch('/api/passwords').then(res => res.json()).then(passwords => this.setState({passwords}))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.passwords.length ? (
            <div>
              <h1>Randie</h1>
              <p>A random password generator <br/> <span>ʕʘ̅͜ʘ̅ʔ</span>  </p>
              <ul>
                {this.state.passwords.map((password,index) => 
                  <li key={index}>
                    {password}
                  </li>
                )}  
              </ul> 
              <button 
              className="more" 
              onClick={()=>this.getPasswords()}>
                Too ez?
              </button> 
            </div>
          ) : (
            <div>
              <h1>Ahhh!! I "ran" out of passwords :(</h1>
              <button
              className="more"
              onClick={this.getPasswords()}>
                Aww try again boii
              </button>
            </div>
          )
        }
      </div>
    )
  }
}

export default App
