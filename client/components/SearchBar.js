class SearchBar extends React.Component{
  constructor(props) {
    super(props)
    this.state = {};
    this.state.searchQuery = '';
    this.state.displayIcon = true;

    this.startSearch = () => {
      this.setState({displayIcon: false})
    }

    this.searchData = (event) => {
      this.setState({displayIcon: false});
      var query = event.target.value

      this.setState({searchQuery: query})
      var props = this.props;
      var state = this.state;

      var newRows = _.filter(props.data, function (row) {
        var searchStrings = row[props.searchSlug].split(' ');
        return _.some(searchStrings, function (word) {
          return _.every(query, function (letter, index) {
            return word[index].toLowerCase() === letter.toLowerCase();
          })
        })
      })
      this.props.setRows(newRows);
    }

    this.endSearch = () => {
      if (!this.state.searchQuery.length) {
        this.setState({displayIcon: true});
      }
    }
  }

  render () {
    return (
      <tr>
        <td colSpan='3'>
          <div>
            <input
              type='text'
              className='tableSearchBar'
              value={ this.state.searchQuery }
              onChange={ this.searchData }
              onFocus={ this.startSearch }
              onBlur={ this.endSearch }/>
            { renderIcon(this.state.displayIcon) }
          </div>
        </td>
      </tr>
    )
  }
}

var renderIcon = (displayBoolean) => {
  if (displayBoolean) {
    return <i className='material-icons searchIcon'>search</i>
  }
}

window.SearchBar = SearchBar;
