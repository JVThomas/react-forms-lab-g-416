const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
			message: ''
		};

		this.updateMessage = this.updateMessage.bind(this);
  }

	updateMessage(event){
		this.setState({
			message: event.target.value 		
		});
	}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange = {this.updateMessage} value = {this.state.message}/>
				<span>Characters remaining: {this.props.maxChars - this.state.message.length}</span>
      </div>
    );
  }
}

module.exports = TwitterMessage;
