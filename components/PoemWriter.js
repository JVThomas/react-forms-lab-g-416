const React = require('react');

function poemValidator(text){
	let poemArray = text.split('\n').map(line => line.trim());
	const validLineCount = poemArray.length === 3;
	const firstLineWordCount = wordCount(poemArray[0]);
	const secondLineWordCount = wordCount(poemArray[1]);
	const thirdLineWordCount = wordCount(poemArray[2]);
	return validLineCount && firstLineWordCount === 5 && secondLineWordCount === 3 && thirdLineWordCount === 5;
}

function wordCount(line){
	let length = 0;
	line !== undefined ? length = line.trim().split(" ").length : length = -1;
	return length;
}


class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
			poem: '',
			isValid: false
		};

		this.updatePoemHandler = this.updatePoemHandler.bind(this);
  }

	updatePoemHandler(event){
		const text = event.target.value;
		if(text){
			this.setState({
				poem: text,
				isValid:poemValidator(text)
			})
		}
	}

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value = {this.state.poem} onChange = {this.updatePoemHandler}/>		
				{!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

module.exports = PoemWriter;
