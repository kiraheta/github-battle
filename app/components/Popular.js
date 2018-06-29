var React = require('react');

class Popular extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    // this.updateLanguage is a func whose this kwl is bound always to this kwr
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(function() {    // call setState to update state
      return {
        selectedLanguage: lang
      }
    })
  }
  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return(
      <ul className='languages'>
        <p> Selected Language: {this.state.selectedLanguage}</p>
        {languages.map(function(lang){
          return (
            <li  
              style={lang === this.state.selectedLanguage ? { color: '#d0021b'}: null}
              onClick={this.updateLanguage.bind(null, lang)}
              key={lang}>
              {lang}
            </li>
          )
        }, this)}
      </ul>
    )
  }
}

module.exports = Popular;
