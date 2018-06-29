var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage (props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='languages'>
      {languages.map(function (lang) {
        return (
          <li
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
              {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

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
    return(
      <div>
        <SelectLanguage 
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />

      </div>
    )
  }
}

module.exports = Popular;
