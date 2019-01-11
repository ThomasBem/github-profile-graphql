import React from 'react';

import style from './App.scss'
import Github from './Github/Github';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "thomasbem", inputValue: '' };
  }

  handleChange = event => {
    this.setState({ inputValue: event.target.value} );
  };

  handleSubmit = event => {
    this.setState({ username: this.state.inputValue} );
    event.preventDefault();
  };

  openGithubProfile = githubUrl => {
    window.open(githubUrl, "_blank");
  };

  render() {
    const { username } = this.state;
    return (
      <div className={style.root}>
        <Github username={username} openGithubProfile={this.openGithubProfile}/>
        <div className="input-username">
          <form onSubmit={this.handleSubmit}>
            <label>
              Github username:
              <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default App;