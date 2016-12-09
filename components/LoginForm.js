const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
			username: '',
			password: ''
		};

		this.updateLoginFields = this.updateLoginFields.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }
	
	updateLoginFields(field, event){
		this.setState({
			[field]: event.target.value
		});
	}

	handleSubmit(event){
		event.preventDefault();
		if(this.state.username.length > 0 && this.state.password.length > 0){
			this.props.onSubmit(this.state.username, this.state.password);
		}
	}

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value = {this.state.username} onChange = {this.updateLoginFields.bind(this, "username")} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value = {this.state.password} onChange = {this.updateLoginFields.bind(this, "password")}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
